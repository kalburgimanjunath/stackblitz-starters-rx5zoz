import EmojiPicker from 'emoji-picker-react';
import React,{useEffect,useState} from 'react';
import Card from './Card'
export default function 
PropertyPane({cards}){
    const [showSubtitle,setSubtitle] = useState();
    const [showTitle,setTitle] = useState();
    const [showEmoji,setEmoji] = useState();
    
    const [currentCard,setCurrentCard]= useState(1);
    const [previousCard,setPreviousCard]= useState();
    const [nextCard,setNextCard]= useState();


    useEffect(()=>{
        if(currentCard){
            setSubtitle(cards[currentCard].showsubtitle)
            setTitle(cards[currentCard].showtitle)
            setEmoji(cards[currentCard].showemoji)
        // }else{
        //     setSubtitle(false)
        //     setTitle(false)
        //     setEmoji(false)
        }
    },[currentCard])
    const Cards = ()=>{
        return cards && cards.map((item,index)=>{
          return <div onClick={()=>setCurrentCard(index)}>
            <Card item={item} showTitle={showTitle} 
            showSubtitle={showSubtitle} showEmoji={showEmoji}/>
            </div>
        })
      }
    return <>
    <div className="flex grid grid-cols-3 overscroll-auto focus:overscroll-contain"><Cards/>  </div>   
    <div className="p-3 bg-white shadow-lg p-4 m-3">
        <h3 className="font-bold">INTRO SETTINGS</h3>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" 
            onChange={()=>setSubtitle(!showSubtitle)} 
            checked={showSubtitle?showSubtitle:false} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">subtitle</span>
            </label>
            <div><input type="text" value={showSubtitle}/></div>
        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onChange={()=>setTitle(!showTitle)} 
            checked={showTitle?showTitle:false} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">title</span>
            </label>
            <div><input type="text" value={showTitle}/></div>
        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onChange={()=>setEmoji(!showEmoji)} 
            checked={showEmoji?showEmoji:false} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">emoji</span>
            </label>
            <div><input type="text" value={showEmoji}/> <EmojiPicker /></div>
        </div>
    </div></>
}