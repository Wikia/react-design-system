import React from 'react';

import linkType from '../linkType';

/* eslint-disable react/prop-types */

function renderLinkNav({href, title, tracking_label}, props) {
  return (
    <a
      className="wds-global-navigation__link"
      href={href}
      data-tracking-label={tracking_label}
      {...props}
    >
      {title}
    </a>
  );
}

function renderLinkText({href, title, tracking_label}, props) {
  return (
    <a
      href={href}
      data-tracking-label={tracking_label}
      {...props}
    >
      {title}
    </a>
  );
}

function renderLinkButton({href, title, tracking_label}, props) {
  return (
    <a
      className="wds-global-navigation__link-button wds-button wds-is-secondary"
      href={href}
      data-tracking-label={tracking_label}
      {...props}
    >
      {title}
    </a>
  );
}

function renderLinkGroup({title, items}, props) {
  return (
    <div className="wds-global-navigation__link-group wds-has-shadow wds-dropdown">
      <div className="wds-global-navigation__dropdown-toggle wds-global-navigation__link wds-dropdown__toggle">
        <span>{title}</span>
        <svg className="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron">
          <use xlinkHref="#wds-icons-dropdown-tiny" />
        </svg>
      </div>
      <div className="wds-global-navigation__dropdown-content wds-dropdown__content">
        <ul className="wds-list wds-is-linked">
          {items.map(item => (
            <li key={item.tracking_label}>
              <Link link={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function renderPartnerSlot({href, tracking_label, title, image}) {
  return (
    <div className="wds-global-navigation__partner-slot">
      <a
        className="wds-global-navigation__partner-slot-link"
        href={href}
        data-tracking-label={tracking_label}
      >
        <img
          className="wds-global-navigation__partner-slot-image"
          src={image}
          alt={title}
        />
      </a>
    </div>
  );
}

function renderLogo({href, tracking_label, title, edition}) {
  return (
    <a
      href={href}
      className="wds-global-navigation__logo"
      data-tracking-label={tracking_label}
      title={title}
    >
      <svg className="wds-global-navigation__logo-image wds-is-wds-company-logo-fandom-white">
        <use xlinkHref="#wds-company-logo-fandom-white" />
      </svg>
      <span className="wds-global-navigation__edition-text">{edition}</span>
    </a>
  );
}

function renderLogout({href, tracking_label, title}) {
  return (
    <div className="">
      <div id="global-navigation-user-sign-out">
        <form method="POST" action={href}>
          <button
            className="wds-sign-out__button"
            data-tracking-label={tracking_label}
            type="submit"
          >
            {title}
          </button>
        </form>
      </div>
    </div>
  );
}

function renderFullButton({href, tracking_label, title, caption}, isSecondary) {
  return (
    <React.Fragment>
      {caption && (
        <div className="wds-global-navigation__user-menu-dropdown-caption">
          {caption}
        </div>
      )}
      <a
        className={`wds-is-full-width wds-button ${isSecondary && 'wds-is-secondary'}`}
        href={href}
        data-tracking-label={tracking_label}
      >
        {title}
      </a>
    </React.Fragment>
  );
}

/* eslint-enable react/prop-types */

const Link = ({link, ...props}) => {
  if (!link) {
    return null;
  }

  const {type} = link;

  switch (type) {
    case 'link-nav':
      return renderLinkNav(link, props);
    case 'link-text':
      return renderLinkText(link, props);
    case 'link-button':
      return renderLinkButton(link, props);
    case 'link-group':
      return renderLinkGroup(link);
    case 'link-partner-slot':
      return renderPartnerSlot(link);
    case 'link-logo':
      return renderLogo(link);
    case 'link-logout':
      return renderLogout(link);
    case 'link-full-button':
      return renderFullButton(link, false);
    case 'link-full-button-secondary':
      return renderFullButton(link, true);
    default:
    // eslint-disable-next-line no-console
      console.error('Unknown Link type: ', type, link);
  }
  return null;
};

Link.propTypes = {
  link: linkType.isRequired,
};

export default Link;
