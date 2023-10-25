import EmojiPicker from 'emoji-picker-react';
import React,{useEffect,useState} from 'react';
export default function PropertyPane({currentCard}){
    console.log(currentCard);
    const [showSubtitle,setSubtitle] = useState();
    const [showTitle,setTitle] = useState();
    const [showEmoji,setEmoji] = useState();
    useEffect(()=>{
        if(currentCard && currentCard.length>0){
            setSubtitle(currentCard.showSubtitle)
            setTitle(currentCard.showTitle)
            setEmoji(currentCard.showEmoji)
        }else{
            setSubtitle(false)
            setTitle(false)
            setEmoji(false)
        }
    },[currentCard])

    return <div className="p-3">
        <h3 className="font-bold">INTRO SETTINGS</h3>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" 
            onChange={()=>setSubtitle(!showSubtitle)} 
            value={showSubtitle} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">subtitle</span>
            </label>
            <div><input type="text" value={showSubtitle}/></div>
        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onChange={()=>setTitle(!showTitle)} 
            value={showTitle} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">title</span>
            </label>
            <div><input type="text" value={showTitle}/></div>
        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onChange={()=>setEmoji(!showEmoji)} 
            value={showEmoji} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">emoji</span>
            </label>
            <div><input type="text" value={showEmoji}/> <EmojiPicker /></div>
        </div>
    </div>
}