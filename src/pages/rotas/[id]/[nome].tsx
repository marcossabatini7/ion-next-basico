import { useRouter } from 'next/router'

export default function BuscarPorIdENome() {
	const { query } = useRouter()

	return (
		<h1>
			Rotas / {query.id} / {query.nome}
		</h1>
	)
}
