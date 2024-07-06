
import { Component, createSignal } from 'solid-js';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  content: string;
  status: 'completed/terminated' | 'in progress' | 'upcoming';
}

const EventView: Component<{ events: Event[] }> = (props) => {
  const { events } = props;

  const [expandedEventId, setExpandedEventId] = createSignal<number | null>(null);

  const toggleEventDetails = (eventId: number) => {
    setExpandedEventId(expandedEventId() === eventId ? null : eventId);
  };

  return (
    <div>
      {events.map((event) => (
        <div class="event-card" key={event.id}>
          <div class="event-summary" onClick={() => toggleEventDetails(event.id)}>
            <h2>{event.name}</h2>
            <p><strong>ID:</strong> {event.id}</p>
          </div>
          {expandedEventId() === event.id && (
            <div class="event-details">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Description:</strong> {event.content}</p>
              <p><strong>Status:</strong> {event.status}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventView;