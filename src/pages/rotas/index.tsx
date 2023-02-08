import Link from 'next/link'

export default function Rotas() {
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
		</>
	)
}
