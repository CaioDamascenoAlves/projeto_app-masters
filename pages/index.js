import axios from "axios";

export default function Home({data}) {
console.log(data.alive);
  return (
		<div>
			<h1>
				Doação de computadores usados
			</h1>
			<p>
				{data.alive === true ? '{alive:true}' : '{alive:false}'}
	  		</p>
		</div>
  )
}

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
		console.error(error);
	}
}

// export async function getStaticProps() {
// 	const response = await fetch('https://doar-computador-api.herokuapp.com/')
// 	const data = await response.json();

// 	return {
// 		props: {data},
// 	}
// }
  