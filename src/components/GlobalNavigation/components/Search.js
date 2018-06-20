import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.searchFocus = this.searchFocus.bind(this);
    this.searchBlur = this.searchBlur.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.searchInputRef = React.createRef();
  }

  state = {
    searchIsFocused: false,
    searchIsEmpty: true,
  };

  searchChange() {
    const searchIsEmpty = this.searchInputRef.current.value.length === 0;

    this.setState({searchIsEmpty});
  }

  searchFocus() {
    this.setState({searchIsFocused: true, searchIsEmpty: true});
    this.props.onStateChange(true);
    this.searchInputRef.current.value = '';
    this.searchInputRef.current.focus();
  }

  searchBlur() {
    this.setState({searchIsFocused: false, searchIsEmpty: true});
    this.props.onStateChange(false);
    this.searchInputRef.current.value = '';
    this.searchInputRef.current.blur();
  }

  render() {
    const classes = [
      'wds-global-navigation__search-container',
      this.state.searchIsFocused ? 'wds-search-is-focused' : null,
    ].filter(c => c).join(' ');

    return (
      <form
        action={this.props.url}
        className={classes}
      >
        <div className="wds-global-navigation__search wds-dropdown">
          <div
            className="wds-global-navigation__search-toggle"
            onClick={this.searchFocus}
            role="button"
            tabIndex="0"
          >
            <svg className="wds-global-navigation__search-toggle-icon wds-icon wds-icon-small">
              <use xlinkHref="#wds-icons-magnifying-glass-small" />
            </svg>
            <span className="wds-global-navigation__search-toggle-text">
              {this.props.label}
            </span>
          </div>
          <div className="wds-global-navigation__search-input-wrapper wds-dropdown__toggle">
            <input
              name={this.props.param}
              autoComplete="off"
              placeholder={this.props.placeholder}
              className="wds-global-navigation__search-input ember-text-field"
              type="search"
              onChange={this.searchChange}
              onPaste={this.searchChange}
              onFocus={this.searchFocus}
              onBlur={this.searchBlur}
              ref={this.searchInputRef}
            />
            <button
              className="wds-global-navigation__search-close wds-button wds-is-text"
              type="button"
              onClick={this.searchBlur}
            >
              <svg className="wds-icon wds-icon-tiny wds-global-navigation__search-close-icon">
                <use xlinkHref="#wds-icons-cross" />
              </svg>
            </button>
            <button
              data-tracking-label={this.props.tracking_label}
              disabled={this.state.searchIsEmpty}
              className="wds-global-navigation__search-submit wds-button"
            >
              <svg className="wds-global-navigation__search-submit-icon wds-icon wds-icon-small">
                <use xlinkHref="#wds-icons-arrow-small" />
              </svg>
            </button>
          </div>
          <div className="wds-global-navigation__search-suggestions wds-dropdown__content">
            <ul className="wds-list wds-is-linked wds-has-ellipsis" />
          </div>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  url: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  tracking_label: PropTypes.string.isRequired,
  onStateChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  placeholder: '',
};

export default Search;
