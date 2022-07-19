import React, { useState } from 'react';
import { m } from 'framer-motion';
import cx from 'classnames';

import Icon from '@components/icon';
import { formatDate } from '@lib/helpers';

const accordionAnim = {
  open: {
    opacity: 1,
    height: 'auto',
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

const Event = ({
  id,
  title,
  eventDate,
  time,
  location,
  description,
  isOpen = false,
  isControlled = false,
  onToggle = () => {},
  className,
  children,
}) => {
  const [hasFocus, setHasFocus] = useState(isOpen);

  return (
    <div key={id} className={cx('event', className)}>
      {!isControlled && (
        <>
          <div className="event--date">
            <h3>{formatDate(eventDate)}</h3>
          </div>
          <div className="event--intro">
            <h4>{title}</h4>
            <p hidden={isOpen && hasFocus}>{description}</p>
            <m.div
              id={`accordion-${id}`}
              className="accordion--content"
              initial={isOpen ? 'open' : 'closed'}
              animate={isOpen ? 'open' : 'closed'}
              variants={accordionAnim}
              transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
              onAnimationComplete={(v) => setHasFocus(v === 'open')}
            >
              <div className="accordion--inner" hidden={!isOpen && !hasFocus}>
                {children}
              </div>
            </m.div>
            <button
              type="button"
              onClick={() => onToggle(id, !isOpen)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${id}`}
              className={cx('accordion--toggle', { 'is-open': isOpen })}
            >
              <p className="event--toggle">Event details</p>
              <div className="accordion--icon event--toggle">
                <Icon name="Chevron Down" />
              </div>
            </button>
          </div>
          <div className="event--detail">
            <p className="is-h4">{time}</p>
            <p>{location}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Event;
