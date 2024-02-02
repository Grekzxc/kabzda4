import React, { useState } from 'react';
import './App.css';
import { Accordion } from './Components/Accordion/Accordion';
import { Rating, RatingType, RatingValueType } from './Components/Rating/Rating';
import { UncontrolledAccordion } from './Components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './Components/UncontrolledRating/UncontrolledRating';
import { OnOff } from './Components/OnOff/OnOff';
import { UncontrolledOnOff } from './Components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [acc, setAcc] = useState(false)
  const [switchOn, setswitchOn] = useState<boolean>(false)


  return (
    <div className={'App'}>

      <OnOff on={switchOn} setOn={setswitchOn} />

      <UncontrolledOnOff onChange={setswitchOn} /> {switchOn.toString()}

      <UncontrolledAccordion titleValue={'bla'} />
      <UncontrolledRating />
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <Accordion value={acc} onClick={() => { setAcc(!acc) }} titleValue='bla bla' /> */}
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
