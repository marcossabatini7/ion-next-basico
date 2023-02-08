import { useRouter } from 'next/router'

export default function BuscarPorId() {
	const { query } = useRouter()

	return <h1>Rotas / {query.id} / BuscarPorId</h1>
}
