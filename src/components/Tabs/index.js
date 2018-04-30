import React from 'react';
import PropTypes from 'prop-types';

import ClickableTab from './ClickableTab';
import LinkTab from './LinkTab';
import {tabType} from './types';

function renderTab(key, tab) {
  if (tab.onClick && typeof tab.onClick === 'function') {
    return ClickableTab(key, tab);
  }
  if (tab.link && typeof tab.link === 'string') {
    return LinkTab(key, tab);
  }
  return null;
}

const Tabs = ({tabs, className}) => (
  <div
    className={`wds-tabs ${className}`}
  >
    {tabs.map(tab => renderTab(tab.label, tab))}
  </div>
);

Tabs.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Tab definitions
   */
  tabs: PropTypes.arrayOf(tabType).isRequired,
};

Tabs.defaultProps = {
  className: '',
};

export default Tabs;
