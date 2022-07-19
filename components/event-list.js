import React, { useState } from 'react';

import Event from '@components/event';
import BlockContent from '@components/block-content';

const EventList = ({ data }) => {
  const { items } = data;

  const [activeAccordion, setActiveAccordion] = useState(null);

  const onToggle = (id, status) => {
    setActiveAccordion(status ? id : null);
  };

  return (
    <div className="event-group">
      {items.map((event, key) => (
        <Event
          key={key}
          id={event.id}
          isOpen={event.id === activeAccordion}
          onToggle={onToggle}
          eventDate={event.eventDate}
          title={event.title}
          time={event.time}
          location={event.location}
          description={event.description}
        >
          <BlockContent blocks={event.content} />
        </Event>
      ))}
    </div>
  );
};

export default EventList;
