import React,{useState,useEffect} from 'react';
import './style.css';
import { Header,Card, PropertyPane } from './components/index';
export default function App() {
  const cards=[
    {
    id:1,
    title:'hello world',
    subtitle:'sub title goes here',
    emoji:'emoji',
    background:'#d8d8d8',
    showtitle:true,
    showsubtitle:true,
    showemoji:true
  },
  {
    id:2,
    title:'hello world2',
    subtitle:'sub title2 goes here',
    emoji:'emoji',
    background:'#b0b0b0',
    showtitle:true,
    showsubtitle:true,
    showemoji:true
  },
  {
    id:3,
    title:'hello world3',
    subtitle:'sub title3 goes here',
    emoji:'emoji',
    background:'#b0b0b0',
    showtitle:true,
    showsubtitle:true,
    showemoji:true
  },
];
  const [currentCard,setCurrentCard]= useState(1);
  const [previousCard,setPreviousCard]= useState();
  const [nextCard,setNextCard]= useState();

  const Cards = ()=>{
    return cards && cards.map(item=>{

      return <div onClick={()=>setCurrentCard(item.id)}><Card title={item.title} subtitle={item.subtitle} emoji={item.emoji} background={item.background}/></div>
    })
  }
  return (
    <div className="container">
      <Header />
      <div className="flex grid grid-cols-3 overscroll-auto focus:overscroll-contain"><Cards/>  </div>   
      <div>{currentCard}</div>
      <PropertyPane currentCard={cards[currentCard]}/>
    </div>
  );
}
