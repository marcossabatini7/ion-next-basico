import Link from 'next/link'
import { useRouter } from 'next/router'

function Params() {
	const route = useRouter()

	return (
		<>
			<h1>Rotas Params</h1>

			<h3 style={{ marginBottom: 20 }}>Params:</h3>
			<h4>Nome: {route.query.nome}</h4>
			<h4>E-mail: {route.query.email}</h4>

			<Link href="/rotas">
				<button
					style={{ marginTop: 10, padding: '5px 10px', cursor: 'pointer' }}
				>
					Voltar
				</button>
			</Link>
		</>
	)
}

export default Params
