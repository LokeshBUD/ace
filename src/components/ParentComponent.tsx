import { createSignal } from 'solid-js';
import DraftView from './DraftView';
import EventView from './EventsView';

const ParentComponent = () => {
  const [drafts, setDrafts] = createSignal<Draft[]>([]);

  const [events, setEvents] = createSignal<Event[]>([]);

  const handleSaveDraft = (updatedDraft: Draft) => {
    setDrafts(prevDrafts => prevDrafts.map(draft =>
      draft.id === updatedDraft.id ? updatedDraft : draft
    ));
  };

  const handleDeleteDraft = (id: number) => {
    setDrafts(prevDrafts => prevDrafts.filter(draft => draft.id !== id));
  };

  const handleSaveEvent = (updatedEvent: Event) => {
    setEvents(prevEvents => prevEvents.map(event =>
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
  };

  return (
    <>
      <DraftView drafts={drafts()} onSave={handleSaveDraft} onDelete={handleDeleteDraft} />
      <EventView events={events()} onSave={handleSaveEvent} onDelete={handleDeleteEvent} />
    </>
  );
};

export default ParentComponent;
