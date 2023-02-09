import { useEffect, useState } from 'react'
import { Questao } from './api/questao/[id]'

export default function QuestaoPage() {
	const [questao, setQuestao] = useState<Questao>()

	useEffect(() => {
		fetch('http://localhost:3000/api/questao/12')
			.then((res) => res.json())
			.then(setQuestao)

		return () => {}
	}, [])

	return (
		<>
			<h1>Questão {questao?.id}</h1>

			<div>
				<span>{questao?.enunciado}</span>

				{questao?.respostas && (
					<ul>
						{questao.respostas.map((questao, i) => (
							<li key={i}> # {questao}</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}
