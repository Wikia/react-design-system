// @flow
import * as React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import uniqueId from 'lodash.uniqueid';

import './styles.scss';

function generateId(): string {
    return uniqueId('wds_input_');
}

type Props = {
    /** Additional class name for the component */
    className?: string,
    /** Additional class name for the hint */
    hintClassName?: string,
    /** Additional class name for the input */
    inputClassName?: string,
    /** Additional class name for the label */
    labelClassName?: string,

    /** Auto focus flag */
    autoFocus?: bool,
    /** Disabled flag */
    disabled?: bool,
    /** ID of the element - by default it's generated automatically */
    id?: string,
    /** Force focus flag */
    forceFocus?: bool,
    /** Hint to display */
    hint?: string,
    /**
     * Type of the input.
     * Use `multiline` for multi-line input (textarea).
     */
    type?: 'text' | 'number' | 'email' | 'search' | 'tel' | 'url' | 'password' | 'multiline',
    /** Value */
    value?: string | number,
    /** Label that we want to display. */
    label?: string,
    /** Placeholder to display */
    placeholder?: string,
    /** Status */
    status?: 'normal' | 'error',
    /** Callback for `onBlur` event */
    onBlur?: Function,
    /**
     * Callback for `onChange` event - will be called whenever the value chnages
     * with `callback(value, event)`.
     */
    onChange?: Function,
    /** Callback for `onFocus` event */
    onFocus?: Function,
    /** Callback for `onKeyDown` event */
    onKeyDown?: Function,
    /** Callback for `onKeyPress` event */
    onKeyPress?: Function,
    /** Callback for `onKeyUp` event */
    onKeyUp?: Function,
    /** Callback for `onPaste` event */
    onPaste?: Function,
    /** Readonly flag */
    readonly?: bool,
    /**
     * Can the textarea be resized by the user
     * Use `auto` to adjust textarea height automatically
     *
     * **Note**: This prop only makes sense for multiline inputs.
     */
    resize?: 'auto' | true | false,
    /**
     * Initial number of rows
     *
     * **Note**: This prop only makes sense for multiline inputs.
     */
    rows?: number,
    /** Tab Index */
    tabIndex?: number,
};

type State = {
    value: string,
    id: string,
    isEmpty: bool,
    isFocused: bool,
    dynamicTextareaHeight: number | null,
};

export default class Input extends React.Component<Props, State> {
    static defaultProps = {
        autoFocus: false,
        className: '',
        disabled: false,
        forceFocus: false,
        hint: null,
        hintClassName: '',
        id: null,
        inputClassName: '',
        label: '',
        labelClassName: '',
        placeholder: null,
        readonly: false,
        resize: false,
        rows: 2,
        status: 'normal',
        tabIndex: 0,
        type: 'text',
        value: '',
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {},
        onKeyDown: () => {},
        onKeyPress: () => {},
        onKeyUp: () => {},
        onPaste: () => {},
    }

    constructor(props: Props) {
        super(props);

        const { value } = props;
        const id = props.id || generateId();

        this.state = {
            value,
            id,
            isEmpty: value.length === 0,
            isFocused: false,
            dynamicTextareaHeight: null,
        };
    }

    componentDidMount() {
        this.autoFocus();
    }

    componentWillReceiveProps(newProps: Props) {
        const id = newProps.id || generateId();
        const { value } = newProps;

        this.setState({
            value,
            id,
            isEmpty: value.length === 0,
        });
    }

    componentDidUpdate() {
        this.forceFocus();
    }

    getClassName() {
        const {
            disabled,
            readonly,
            status,
            resize,
            className,
            hint,
        } = this.props;

        const { isEmpty, isFocused } = this.state;

        let statusClass = null;

        if (isFocused) {
            statusClass = 'is-focused';
        } else if (isEmpty) {
            statusClass = 'is-empty';
        }

        return [
            'wds-input',
            disabled ? 'is-disabled' : null,
            readonly ? 'is-readonly' : null,
            status === 'error' ? 'has-error' : null,
            typeof resize === 'boolean' && resize ? 'is-resize' : null,
            hint ? 'has-hint' : null,
            statusClass,
            className,
        ]
            .filter(Boolean)
            .join(' ');
    }

    getInputClassName() {
        const { inputClassName } = this.props;

        return ['wds-input__field', inputClassName].join(' ');
    }

    getLabelClassName() {
        const { labelClassName } = this.props;

        return ['wds-input__label', labelClassName].join(' ');
    }

    getHintClassName() {
        const { hintClassName } = this.props;

        return ['wds-input__hint', hintClassName].join(' ');
    }

    getSharedInputProps() {
        const {
            id,
            value,
        } = this.state;

        const {
            disabled,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            onPaste,
            placeholder,
            readonly,
            tabIndex,
        } = this.props;

        return {
            className: this.getInputClassName(),
            id,
            name: id,
            value,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onKeyUp,
            onKeyDown,
            onKeyPress,
            onPaste,
            readOnly: readonly,
            disabled,
            tabIndex,
            placeholder,
        };
    }

    handleAutoResize = () => {
        this.autoResize();
    }

    handleChange = (event: SyntheticEvent<*>) => {
        const { readonly, disabled, onChange } = this.props;

        if (readonly || disabled) {
            return;
        }

        const { value } = event.target;

        this.setState({
            value,
            isEmpty: value.length === 0,
        });
        onChange(value, event);
    }

    handleFocus = (event: SyntheticEvent<*>) => {
        const { readonly, onFocus } = this.props;

        if (readonly) {
            return;
        }

        this.setState({
            isFocused: true,
        });
        onFocus(event);
    }

    handleBlur = (event: SyntheticEvent<*>) => {
        const { onBlur } = this.props;

        this.setState({
            isFocused: false,
        });
        onBlur(event);
    }

    autoResize() {
        // height has to be reset first because if not it keeps increasing every time user will type a character
        // setting actual height must be done in setState callback, because React might optimize this into one setState call
        // scrollHeight includes padding but not border, we need to compensate this to avoid slight height change
        // keep value in sync with bottom-border in .wds-input__field styles
        const BOTTOM_BORDER_WIDTH = 1;

        this.setState({ dynamicTextareaHeight: 'auto' }, () => {
            this.setState({ dynamicTextareaHeight: `${this.input.scrollHeight + BOTTOM_BORDER_WIDTH}px` });
        });

        // to prevent scroll jumping
        this.input.scrollTop = this.input.scrollHeight;
    }

    focus() {
        if (this.input && document.activeElement !== this.input) {
            this.input.focus();
        }
    }

    blur() {
        if (this.input) {
            this.input.blur();
        }
    }

    isAutoFocus() {
        const {
            autoFocus, forceFocus, disabled, readonly,
        } = this.props;

        return (autoFocus || forceFocus) && !disabled && !readonly;
    }

    isForceFocus() {
        const { forceFocus, disabled, readonly } = this.props;

        return forceFocus && !disabled && !readonly;
    }

    isAutoResize() {
        const { resize, disabled, readonly } = this.props;

        return resize === 'auto' && !disabled && !readonly;
    }

    autoFocus() {
        if (this.isAutoFocus() && this.input) {
            this.input.focus();
        }
    }

    forceFocus() {
        if (this.isForceFocus() && this.input) {
            if (document.activeElement !== this.input) {
                this.input.focus();
            }
        }
    }

    renderMultiline() {
        const { rows } = this.props;

        const { dynamicTextareaHeight, value } = this.state;

        const props = {
            ...this.getSharedInputProps(),
            rows,
        };

        if (this.isAutoResize()) {
            props.onInput = this.handleAutoResize;
        }

        if (dynamicTextareaHeight) {
            props.style = { height: dynamicTextareaHeight };
        }

        return (
            <textarea
                ref={(input) => {
                    this.input = input;
                }}
                {...props}
            >
                {value}
            </textarea>
        );
    }

    renderInput() {
        const { type } = this.props;

        if (type === 'multiline') {
            return this.renderMultiline();
        }

        const props = {
            ...this.getSharedInputProps(),
            type,
        };

        return (
            <input
                ref={(input) => {
                    this.input = input;
                }}
                {...props}
            />
        );
    }

    renderLabel() {
        const { id } = this.state;
        const { label } = this.props;

        return (
            <label className={this.getLabelClassName()} htmlFor={id}>
                {label}
            </label>
        );
    }

    renderHint() {
        const { hint } = this.props;

        if (!hint) {
            return null;
        }

        return <div className={this.getHintClassName()}>{hint}</div>;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                {this.renderInput()}
                {this.renderHint()}
                {this.renderLabel()}
            </div>
        );
    }
}
