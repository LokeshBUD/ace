import { Component } from "solid-js";
import addAdmin from './svg/addAdmin.svg';
import addEvent from './svg/addEvent.svg';
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


export default TopBarView;