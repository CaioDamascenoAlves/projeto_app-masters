import axios from "axios";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import FormSessaoUm from "../components/FormSessaoUm";

export default function Home({data}) {
console.log(data.alive);
  return (
		<div className ={`
			flex justify-center items-center h-screen
			text-white
		`}>
			<Layout titulo="Doação de computadores" >
				<div className="flex justify-end ">
				<Botao className="mb-4">Novo Doador</Botao>
				</div>
				<p>
					{data.alive === true ? 'API: Online' : 'API: Offline'}
	  			</p>
				<FormSessaoUm />
			</Layout>
		</div>
  )
};

export async function getStaticProps() {
	try {	
		const result = await axios.get('https://doar-computador-api.herokuapp.com/')
		const data = result.data;
		return {
			props:{
				data: data,
			}
		}
	}catch(error){
		//console.error(error);
	}
};