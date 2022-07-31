interface EntrySessionTwoProps{
	tipo?: 'text' | 'number'
	texto: string
	value: any
	readOnly?: boolean
	className?: string
	onChange?: (value: any) => void
}

export default function EntrySessionTwo(props: EntrySessionTwoProps){
	return(
		<div className={`flex flex-col ${props.className}`}>
			<label className="mb-2">
				{props.texto}
			</label>
			<input
				type={props.tipo ?? 'text'}
				value= {props.value}
				readOnly={props.readOnly}
				onChange={e => props.onChange?.(e.target.value)}
				className={`
					border border-purple-500 rounded-lg
					focus: outline-none bg-gray-900
					px-4 py-2
					${props.readOnly ? '' : 'focus:bg-gray-600'}
				`}
			/>
		</div>
	)
}