import axios from "axios";
import Button from "../components/Button";
import Layout from "../components/Layout";
import FormSessionOne from "../components/FormSessionOne";
import Donator from "../core/Donator";
import { useState } from "react";
import FormSessionTwo from "../components/FormSessionTwo";

export default function Home({data}) {
console.log(data.alive);
	const donators =  [
		new Donator(
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		''
		)
	]

	const [visivel, setVisivel] = useState<'formSessionOne'| 'formSessionTwo'>('formSessionOne')
  return (
		<div className ={`
			flex justify-center items-center h-screen
			text-white
		`}>
			<Layout tittle="Doação de computadores" >
				{visivel === 'formSessionOne' ?(
				<>
				<FormSessionOne 
					donator= {donators[0]} 
					next={() => setVisivel('formSessionTwo')}
				/>
				<p>
					{data.alive === true ? 'API: Online' : 'API: Offline'}
	  			</p>
				</>

				) : (
				<FormSessionTwo 
					donator={donators[0]} 
					return={()=>setVisivel('formSessionOne')}
				/>
					
				)}
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