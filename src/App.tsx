import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/onOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontroledRating} from "./components/UncontroledRating/UncontroledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/uncontrolledOnOff";


function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            <UncontroledRating/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/* <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <div>
            <h1> {props.title}</h1>
        </div>
    );
}


export default App;
