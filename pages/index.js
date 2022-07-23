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
	const response = await fetch('https://doar-computador-api.herokuapp.com/')
	const data = await response.json();

	return {
		props: {data},
		
	}
}
  