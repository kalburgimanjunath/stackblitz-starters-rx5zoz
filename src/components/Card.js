export default function Card({ subtitle, title, emoji,background }) {
    return <div className="shadow-md m-2 p-4 cursor-pointer" style={{backgroundColor:background}}>
        
        <div className="font-normal">{subtitle}</div>
        <div className="font-bold text-3xl">{title}</div>
        <div>{emoji}</div>
    </div>
}