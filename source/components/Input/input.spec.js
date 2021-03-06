import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import uniqueId from 'lodash/uniqueId';

import Input from './index';

// mock lodash's uniqueId
jest.mock('lodash/uniqueId');
uniqueId.mockImplementation(() => 'foo');

/* eslint-disable no-console */
function testPropTypeError(Component, props, expectedError) {
    const stub = sinon.stub(console, 'error');

    renderer.create(<Component {...props} />);

    expect(stub.calledOnce).toEqual(true);
    expect(stub.calledWithMatch(sinon.match(new RegExp(expectedError)))).toEqual(true);

    console.error.restore();
}

test('Input renders correctly with default values', () => {
    const component = renderer.create(
        <Input label="an input label" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Input renders correctly disabled', () => {
    const component = renderer.create(
        <Input label="a disabled label" disabled />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Input renders correctly readonly', () => {
    const component = renderer.create(
        <Input label="a readonly label" readonly />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});


test('Input lifecycle works', () => {
    const component = mount(
        <Input label="foo label" value="foo" />,
    );
    expect(component).toMatchSnapshot();

    component.setProps({ value: 'bar' });
    expect(component).toMatchSnapshot();

    component.setProps({ id: 'bar' });
    expect(component).toMatchSnapshot();
});

test('Input renders correctly all the standard params', () => {
    const component = renderer.create(
        <Input
            id="input_label"
            label="an input label"
            value="foo"
            onChange={(value) => { console.log(value); }}
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Input renders correctly with an error status and a hint', () => {
    const component = renderer.create(
        <Input label="an input label" value="bar" hint="an error occured" status="error" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Input renders correctly with a placeholder', () => {
    const component = renderer.create(
        <Input placeholder="That's a placeholder" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Input throws error when rendered with a placeholder and label', () => {
    testPropTypeError(
        Input,
        { label: 'Label', placeholder: 'Placeholder' },
        'Prop label is not used when placeholder is set'
    );
});

test('Input throws error when rendered without a placeholder or label', () => {
    testPropTypeError(Input, {}, 'Prop label is required when placeholder is not set');
});

test('Input throws error when rendered with invalid label', () => {
    testPropTypeError(Input, { label: 100 }, 'Prop label is not a string');
});

test('Input renders correctly with custom class names', () => {
    const component = renderer.create(
        <Input
            label="an input with custom classes"
            className="general-class"
            hintClassName="hint-class"
            inputClassName="input-class"
            labelClassName="label-class"
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Input renders correctly with different types', () => {
    const types = ['text', 'number', 'email', 'search', 'tel', 'url', 'password'];

    types.forEach((type) => {
        const component = renderer.create(
            <Input
                label={`an input with type ${type}`}
                type={type}
                value={`an input with value ${type}`}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});

test('Input renders correctly with multiline', () => {
    const component = renderer.create(
        <Input
            label="Textarea"
            type="multiline"
            rows={3}
            value="this is multiline"
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    const component2 = renderer.create(
        <Input
            label="Textarea"
            type="multiline"
            rows={3}
            value="this is multiline (with resize)"
            resize
        />,
    );
    expect(component2.toJSON()).toMatchSnapshot();
});

test('Input renders correctly with tabIndex', () => {
    const component = renderer.create(
        <Input
            label="input with tabIndex"
            tabIndex={-2}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Input autoresizing works correctly', () => {
    const component = mount(
        <Input
            label="Autoresize"
            resize="auto"
            type="multiline"
            value="This is some value"
        />,
    );

    expect(component).toMatchSnapshot();

    const textarea = component.find('textarea');

    // because scrollHeight is a getter
    Object.defineProperty(textarea.getDOMNode(), 'scrollHeight', {
        value: 100,
    });

    textarea.simulate('input', { target: { value: 'This is value to test \n if autoresizing works' } });

    expect(component).toMatchSnapshot();
});

test('Input autoFocus works correctly', () => {
    const activeElementStub = sinon.stub(document, 'activeElement').get(() => null);
    const focusStub = sinon.spy(Input.prototype, 'autoFocus');

    // first `autoFocus` call on mount
    const component = mount(
        <Input
            label="autofocus"
            autoFocus
        />
    );
    expect(focusStub.callCount).toBe(1);

    const instance = component.instance();

    activeElementStub.get(() => instance.input);
    component.unmount();
    component.setProps({ label: 'bar1' });
    component.mount();
    expect(focusStub.callCount).toBe(2);

    component.unmount();
    component.setProps({ label: 'bar2' });
    component.mount();
    expect(focusStub.callCount).toBe(3);

    focusStub.restore();
});

test('Input forceFocus works correctly', () => {
    const activeElementStub = sinon.stub(document, 'activeElement').get(() => null);
    const autoFocusStub = sinon.spy(Input.prototype, 'autoFocus');
    const forceFocusStub = sinon.spy(Input.prototype, 'forceFocus');

    // first `autoFocus` call on mount
    const component = mount(
        <Input
            label="forceFocus"
            forceFocus
        />
    );
    // first call is autoFocus
    expect(autoFocusStub.callCount).toBe(1);

    // second `autoFocus` call (`forceFocus`), but `document.activeElement` will return input element
    const instance = component.instance();
    activeElementStub.get(() => instance.input);
    const inputFocusSpy = sinon.spy();
    instance.input.focus = inputFocusSpy;
    component.setProps({ label: 'bar' });

    expect(inputFocusSpy.notCalled).toBe(true);
    expect(forceFocusStub.callCount).toBe(1);

    // third `autoFocus` call, but `document.activeElement` will return null
    activeElementStub.get(() => null);
    component.setProps({ label: 'foo1' });

    expect(inputFocusSpy.calledOnce).toBe(true);
    expect(forceFocusStub.callCount).toBe(2);

    autoFocusStub.restore();
    forceFocusStub.restore();
});

test('Input doAutoResize works correctly', () => {
    const autoResizeStub = sinon.spy(Input.prototype, 'doAutoResize');

    const component = mount(
        <Input
            label="Autoresize"
            resize="auto"
            type="multiline"
            value="This is some value"
        />
    );

    expect(autoResizeStub.callCount).toBe(1);

    component.find('textarea').simulate('input', { target: { value: 'This is value to test \n if autoresizing works' } });

    expect(autoResizeStub.callCount).toBe(2);

    component.find('textarea').simulate('input', { target: { value: 'This \n this \n again' } });

    expect(autoResizeStub.callCount).toBe(3);
});

test('Input can fire all default callbacks', () => {
    const wrapper = shallow(
        <Input label="callbacks test" />
    );

    wrapper.find('input').simulate('change', { target: { value: 'newvalue' } });
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    wrapper.find('input').simulate('keyup');
    wrapper.find('input').simulate('keydown');
    wrapper.find('input').simulate('keypress');
    wrapper.find('input').simulate('paste');

    expect(true).toBe(true);
});

test('Input can fire all callbacks', () => {
    const mockOnBlur = sinon.spy();
    const mockOnChange = sinon.spy();
    const mockOnFocus = sinon.spy();
    const mockOnKeyDown = sinon.spy();
    const mockOnKeyPress = sinon.spy();
    const mockOnKeyUp = sinon.spy();
    const mockOnPaste = sinon.spy();
    const wrapper = shallow(
        <Input
            label="callbacks test (real-world)"
            onBlur={mockOnBlur}
            onChange={mockOnChange}
            onFocus={mockOnFocus}
            onKeyDown={mockOnKeyDown}
            onKeyPress={mockOnKeyPress}
            onKeyUp={mockOnKeyUp}
            onPaste={mockOnPaste}
        />
    );

    wrapper.find('input').simulate('change', { target: { value: 'newvalue' } });
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    wrapper.find('input').simulate('keyup');
    wrapper.find('input').simulate('keydown');
    wrapper.find('input').simulate('keypress');
    wrapper.find('input').simulate('paste');

    expect(mockOnChange.calledOnce).toBe(true);
    expect(mockOnFocus.calledOnce).toBe(true);
    expect(mockOnBlur.calledOnce).toBe(true);
    expect(mockOnKeyDown.calledOnce).toBe(true);
    expect(mockOnKeyPress.calledOnce).toBe(true);
    expect(mockOnKeyUp.calledOnce).toBe(true);
    expect(mockOnPaste.calledOnce).toBe(true);
});


test('Input does not call onChange and onFocus callbacks on readonly', () => {
    const mockOnChange = sinon.spy();
    const mockOnFocus = sinon.spy();
    const wrapper = shallow(
        <Input
            label="change test for readonly"
            onChange={mockOnChange}
            onFocus={mockOnFocus}
            readonly
        />
    );

    wrapper.find('input').simulate('change', { target: { value: 'newvalue' } });
    wrapper.find('input').simulate('focus');

    expect(mockOnChange.calledOnce).toBe(false);
    expect(mockOnFocus.calledOnce).toBe(false);
});

test('Input can call focus and blur', () => {
    const activeElementStub = sinon.stub(document, 'activeElement').get(() => null);

    const focusStub = sinon.spy();
    const blurStub = sinon.spy();

    const wrapper = mount(
        <Input
            label="focus and blur"
        />
    );

    const instance = wrapper.instance();

    instance.input.focus = focusStub;
    instance.input.blur = blurStub;

    // correct - focus and blur
    instance.focus();
    instance.blur();

    // already focused, can't focus again
    activeElementStub.get(() => instance.input);
    instance.focus();

    // incorrect - lost input
    instance.input = null;
    instance.focus();
    instance.blur();

    expect(focusStub.calledOnce).toBe(true);
    expect(blurStub.calledOnce).toBe(true);
});

test('Input calls onClick', () => {
    const clickSpy = sinon.spy();
    const wrapper = mount(<Input onClick={clickSpy} />);

    wrapper.find('input').simulate('click');

    expect(clickSpy.calledOnce).toBe(true);
});

test('Input does not call onClick for disabled inputs', () => {
    const clickSpy = sinon.spy();
    const wrapper = mount(<Input onClick={clickSpy} disabled />);

    wrapper.find('input').simulate('click');

    expect(clickSpy.calledOnce).toBe(false);
});

test('Input does not call onClick for readonly inputs', () => {
    const clickSpy = sinon.spy();
    const wrapper = mount(<Input onClick={clickSpy} readonly />);

    wrapper.find('input').simulate('click');

    expect(clickSpy.calledOnce).toBe(false);
});

test('Input without onClick handler does not throw error', () => {
    const wrapper = mount(<Input />);
    wrapper.find('input').simulate('click');
});
