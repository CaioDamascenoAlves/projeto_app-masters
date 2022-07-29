import EntradaSessaoUm from "./EntradaSessaoUm"

interface FormSessaoUmProps{

}

export default function FormSessaoUm(props: FormSessaoUmProps){
	return(
		<div>
			<EntradaSessaoUm  texto="Nome" valor="Teste"/>
		</div>
	)
}