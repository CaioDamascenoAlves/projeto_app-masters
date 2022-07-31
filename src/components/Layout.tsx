import Tittle from "./Tittle";

interface LayoutProps{
	tittle: string;
	children: any;
}

export default function Layout(props: LayoutProps){
	return (
		<div className={`
			flex flex-col w-2/3
			bg-slate-800 text-white rounded-md
		`}>
			<Tittle >{props.tittle}</Tittle>
			<div className="p-5">
				{props.children}
			</div>
		</div>
	)
}