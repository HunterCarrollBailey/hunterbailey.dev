
interface CardProps {
    adlClasses?: string;
    children?: React.ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className={'bg-slate-950/50 backdrop-blur shadow-md shadow-cyan-800 rounded-2xl p-5 items-center border border-cyan-800 ' + props.adlClasses}>
            {props.children}
        </div>
    )
}