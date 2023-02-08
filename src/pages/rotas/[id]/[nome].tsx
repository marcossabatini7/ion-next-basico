import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BuscarPorIdENome() {
	const { query } = useRouter()

	return (
		<>
			<h1>
				Rotas / {query.id} / {query.nome}
			</h1>

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
