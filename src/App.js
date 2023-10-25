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
    showtitle:false,
    showsubtitle:false,
    showemoji:false
  },
  {
    id:2,
    title:'hello world2',
    subtitle:'sub title2 goes here',
    emoji:'emoji',
    background:'#b0b0b0',
    showtitle:false,
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
  // const [currentCard,setCurrentCard]= useState(1);
  // const [previousCard,setPreviousCard]= useState();
  // const [nextCard,setNextCard]= useState();

    

  return (
    <div className="container">
      <Header />      
      <PropertyPane 
      cards={cards}/>
    </div>
  );
}
