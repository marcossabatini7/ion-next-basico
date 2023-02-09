import { NextApiRequest, NextApiResponse } from 'next'

export type Questao = {
	id: string
	enunciado: string
	respostas: string[]
}

export default function questao(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(<Questao>{
			id: req.query.id,
			enunciado: 'Qual é a sua cor preferida?',
			respostas: ['Branca', 'Vermelha', 'Amarela']
		})

		return
	}

	res.status(405).send(null)
}
