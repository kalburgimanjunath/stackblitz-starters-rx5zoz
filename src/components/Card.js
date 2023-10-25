export default function Card({ item,showTitle,showSubtitle,showEmoji }) {
    return <div className="shadow-md m-2 p-4 cursor-pointer" style={{backgroundColor:item.background}}>
        {showSubtitle ? <div className="font-normal">{item.subtitle}</div>:''}
        
        {showTitle ? <div className="font-bold text-3xl">{item.title}</div>:''}
        {showEmoji ? <div>{item.emoji}</div>:''}
    </div>
}