interface EntradaSessaoUmProps{
	tipo?: 'text' | 'number'
	texto: string
	valor: any
	somenteLeitura?: boolean
}

export default function EntradaSessaoUm(props: EntradaSessaoUmProps){
	return(
		<div>
			<label>
				{props.texto}
			</label>
			<input
				type={props.tipo ?? 'text'}
				value= {props.valor}
				readOnly={props.somenteLeitura}
			/>
		</div>
	)
}