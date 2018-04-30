import React from 'react';
import PropTypes from 'prop-types';

import {tabClassName, renderLinkLabel} from './helper';
import {clickableTabType} from './types';

const ClickableTab = ({key, tab}) => {
  const {className, isCurrent, onClick, label, ...rest} = tab;

  return (
    <button
      key={key}
      className={tabClassName(isCurrent, className)}
      onClick={onClick}
      {...rest}
    >
      {renderLinkLabel(label)}
    </button>
  );
};

ClickableTab.propTypes = {
  key: PropTypes.string.isRequired,
  tab: clickableTabType.isRequired,
};

export default ClickableTab;
