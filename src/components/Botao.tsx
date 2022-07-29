interface BotaoProps {
	className?: string
	children: any
}

export default function Botao(props: BotaoProps){
	return(
		<button className={`
			bg-gradient-to-r from-purple-500 to-blue-600
			text-white px-4 py-2 rounded-md
			${props.className}
		`}>
			{props.children}
		</button>
	)
}