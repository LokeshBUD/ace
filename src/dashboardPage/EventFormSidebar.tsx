import { createSignal } from 'solid-js';
import { Component } from 'solid-js';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  content: string;
  status: 'completed/terminated' | 'in progress' | 'upcoming';
}

const EventFormSidebar: Component<{
  isOpen: boolean;
  onClose: () => void;
  onPublish: (event: Event) => void;
}> = (props) => {
  const [name, setName] = createSignal('');
  const [content, setContent] = createSignal('');
  const [date, setDate] = createSignal('');
  const [time, setTime] = createSignal('');
  const [venue, setVenue] = createSignal('');

  const handlePublish = () => {
    const newEvent: Event = {
      id: Math.floor(Math.random() * 1000),
      name: name(),
      content: content(),
      date: date(),
      time: time(),
      venue: venue(),
      status: 'upcoming'
    };
    props.onPublish(newEvent);
    setName('');
    setContent('');
    setDate('');
    setTime('');
    setVenue('');
    props.onClose();
  };

  return (
    <div class={`formSidebar ${props.isOpen ? 'active open' : ''}`}>
      <h2>Add Event</h2>
      <input type="text" placeholder="Event Name" value={name()} onInput={(e) => setName(e.currentTarget.value)} />
      <input type="date" placeholder="Date" value={date()} onInput={(e) => setDate(e.currentTarget.value)} />
      <input type="text" placeholder="Time" value={time()} onInput={(e) => setTime(e.currentTarget.value)} />
      <input type="text" placeholder="Venue" value={venue()} onInput={(e) => setVenue(e.currentTarget.value)} />
      <textarea placeholder="Description" value={content()} onInput={(e) => setContent(e.currentTarget.value)}></textarea>
      <button onClick={props.onClose} style="margin-right: 34.7%;">Close</button>
      <button onClick={handlePublish}>Publish Event</button>
    </div>
  );
};

export default EventFormSidebar;
