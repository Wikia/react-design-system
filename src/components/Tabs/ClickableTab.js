import React from 'react';
import PropTypes from 'prop-types';

import {tabClassName, renderLinkLabel} from './helper';
import {linkTabType} from './types';

const LinkTab = ({key, tab}) => {
  const {className, isCurrent, link, label, ...rest} = tab;

  return (
    <a
      key={key}
      className={tabClassName(isCurrent, className)}
      href={link}
      {...rest}
    >
      {renderLinkLabel(label)}
    </a>
  );
};

LinkTab.propTypes = {
  key: PropTypes.string.isRequired,
  tab: linkTabType.isRequired,
};

export default LinkTab;
