import { Component } from 'solid-js';
import EventView from './EventsView';
import DraftView from './DraftView';
import AdminView from './AdminView';
import SubscribersView from './SubscribersView';
import NewsletterView from './NewsletterView';

const MainView: Component<{
  onDeleteEvent: (id: number) => void;
  onDeleteDraft: (id: number) => void; activeIndex: number; events: any[], drafts: any[], onSaveEvent: (event: any) => void, onSaveDraft: (draft: any) => void 
}> = (props) => {
  const renderContent = () => {
    switch (props.activeIndex) {
      case 0:
        return <div><EventView events={props.events} onSave={props.onSaveEvent} onDelete={props.onDeleteEvent} /></div>;
      case 1:
        return <div><DraftView drafts={props.drafts} onSave={props.onSaveDraft} onDelete={props.onDeleteDraft} /></div>;
      case 2:
        return <div>Campaigns Content</div>;
      case 3:
        return <div><AdminView/></div>;
      case 4:
        return <div><NewsletterView/></div>;
      case 5:
        return <div><SubscribersView/></div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div class="mainContent">
      {renderContent()}
    </div>
  );
};

export default MainView;
