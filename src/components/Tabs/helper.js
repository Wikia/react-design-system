import React from 'react';

export function tabClassName(isCurrent, className) {
  return [
    'wds-tabs__tab',
    isCurrent ? 'wds-is-current' : '',
    className,
  ].filter(c => c).join(' ');
}

export function renderLinkLabel(label) {
  return typeof label === 'string' ? <span>{label}</span> : label;
}
