import React from 'react';
import { Toggle } from './components/BareMinimumRequirements/Toggle';
import { Modal } from './components/BareMinimumRequirements/Modal';
import { Tag } from './components/BareMinimumRequirements/Tag';
import { Autocomplete } from './components/AdvancedChallenges/Autocomplete';
import { ClickToEdit } from './components/AdvancedChallenges/ClickToEdit';
import { Tab } from './components/BareMinimumRequirements/Tab';
import './app.css';

const App = () => {
  return (
    <>
      <div id='container'>
        <div id='title'>React Custom Component</div>
        <div className='box'>
          <div className='sub_title'>Modal</div>
          <Modal />
        </div>
        <div className='box'>
          <div className='sub_title'>Toggle</div>
          <Toggle />
        </div>
        <div className='box'>
          <div className='sub_title'>Tab</div>
          <Tab />
        </div>
        <div className='box'>
          <div className='sub_title'>Tag</div>
          <Tag />
        </div>
        <div className='box'>
          <div className='sub_title'>Autocomplete</div>
          <Autocomplete />
        </div>
        <div className='box'>
          <div className='sub_title'>ClickToEdit</div>
          <ClickToEdit />
        </div>
      </div>
    </>
  );
};
export default App;
