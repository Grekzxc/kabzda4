import React from 'react';
import './App.css';
import { Accordion } from './Components/Accordion/Accordion';
import { Rating } from './Components/Rating/Rating';
import { OnOff } from './OnOff/OnOff';
import { UncontrolledAccordion } from './Components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './Components/UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div>
      <UncontrolledAccordion titleValue={'bla'} />
      <UncontrolledRating />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
