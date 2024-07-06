import { createSignal, onMount } from 'solid-js';
import type { Component } from 'solid-js';

import './BGstyles.css';
import addEvent from './addEvent.svg';
import addAdmin from './addAdmin.svg';
import EventFormSidebar from './EventFormSidebar';
import AddAdminModal from './adminForm';
import SideBar from './sidebar';
import EventView from './EventsView';

const TopBarView: Component<{ title: string; activeIndex: number; onAddEventClick: () => void; onAddAdminClick: () => void }> = (props) => {
  return (
    <div class="topBarContainer">
      <h1 class="MainHead">{props.title}</h1>
      <input class="search__input" type="text" placeholder="Search..." />
      <div class="buttonContainer">
        {props.activeIndex === 2 ? (
          <button class="actionButton" onClick={props.onAddAdminClick}>
            <img src={addAdmin} alt="Add Admin" />
          </button>
        ) : (
          <button class="actionButton" onClick={props.onAddEventClick}>
            <img src={addEvent} alt="Add Event" />
          </button>
        )}
      </div>
    </div>
  );
};

const MainView: Component<{ activeIndex: number; events: any[] }> = (props) => {
  const renderContent = () => {
    switch (props.activeIndex) {
      case 0:
        return <div><EventView events={props.events}/></div>; // Case 0 renders EventView
      case 1:
        return <div>Drafts Content</div>;
      case 2:
        return <div>Campaigns Content</div>;
      case 3:
        return <div>Admin Content</div>;
      case 4:
        return <div>Newsletter Content</div>;
      case 5:
        return <div>Subscribers Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div class="main">
      {renderContent()}
    </div>
  );
};

const DashBoard: Component = () => {
  const [activeIndex, setActiveIndex] = createSignal(0); // Initializes activeIndex to 0 by default
  const [isEventFormOpen, setIsEventFormOpen] = createSignal(false);
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = createSignal(false);
  const [events, setEvents] = createSignal<any[]>([]); // Initialize as an empty list
  const titles = ['Dashboard', 'Drafts', 'Campaigns', 'Admin', 'Newsletter', 'Subscribers'];

  // Load events from localStorage when the component mounts
  onMount(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  });

  const handleAddEventClick = () => {
    setIsEventFormOpen(true);
  };

  const handleCloseEventForm = () => {
    setIsEventFormOpen(false);
  };

  const handlePublishEvent = (event: any) => {
    const updatedEvents = [...events(), event];
    setEvents(updatedEvents); // Update events list
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Save to localStorage
    setIsEventFormOpen(false);
  };

  const handleAddAdminClick = () => {
    setIsAddAdminModalOpen(true);
  };

  const handleCloseAddAdminModal = () => {
    setIsAddAdminModalOpen(false);
  };

  const handleAddAdmin = (admin: any) => {
    console.log('Admin Added:', admin);
  };

  return (
    <div class="container" style="display: flex;">
      <div style="width: 15%;">
        <SideBar activeIndex={activeIndex()} setActiveIndex={setActiveIndex} />
      </div>
      <div style="width: 85%;">
        <TopBarView 
          title={titles[activeIndex()]} 
          activeIndex={activeIndex()} 
          onAddEventClick={handleAddEventClick} 
          onAddAdminClick={handleAddAdminClick} 
        />
        <MainView activeIndex={activeIndex()} events={events()} />
      </div>
      <EventFormSidebar 
        isOpen={isEventFormOpen()} 
        onClose={handleCloseEventForm} 
        onPublish={handlePublishEvent} 
      />
      <AddAdminModal 
        isOpen={isAddAdminModalOpen()} 
        onClose={handleCloseAddAdminModal} 
        onAdd={handleAddAdmin} 
      />
    </div>
  );
};

export default DashBoard;
