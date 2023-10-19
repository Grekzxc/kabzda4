import React from 'react';
import './App.css';
import { Accordion } from './Components/Accordion/Accordion';
import { Rating } from './Components/Rationg/Rating';
import { OnOff } from './OnOff/OnOff';

function App() {
  return (
    <div>
      {/* <PageTitle title={'This is APP component'} />
      <PageTitle title={'Users'} />
      <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Rating value={0} /> */}
      <OnOff value={true} />
      <OnOff value={false} />
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
