import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Rotas() {
	const router = useRouter()

	function navegacaoSimplesPorNome(url: string) {
		router.push(url)
	}

	function navegacaoParams() {
		router.push({
			pathname: '/rotas/params',
			query: {
				nome: 'Marcos Sabatini',
				email: 'ms@email.com'
			}
		})
	}

	return (
		<>
			<h1 style={{ marginBottom: 10 }}>Rotas Index</h1>

			<ul>
				<Link href="/rotas/params?nome=João&email=j@e.com">
					<li>Params</li>
				</Link>
				<Link href="/rotas/9876/buscar">
					<li>Buscar</li>
				</Link>
				<Link href="/rotas/8872665/Ana">
					<li>Buscar por Ana</li>
				</Link>
			</ul>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					paddingTop: 10
				}}
			>
				<button onClick={() => router.push('/rotas/443322/buscar')}>
					Buscar
				</button>
				<button onClick={() => navegacaoSimplesPorNome('/rotas/123654/carlos')}>
					Buscar por nome do Carlos
				</button>
				<button onClick={() => navegacaoParams()}>
					Buscar por nome do Marcos
				</button>
			</div>
		</>
	)
}
