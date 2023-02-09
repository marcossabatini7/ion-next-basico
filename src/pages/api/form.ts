import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'

const users: any[] = []

export default function form(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const user = JSON.parse(req.body)
		user.id = randomUUID()
		users.push(user)
		res.status(200).send('Usuário cadastrado com sucesso!')
		return
	}

	if (req.method === 'GET') {
		res.status(200).json(users)
		return
	}

	res.status(405).send(null)
}
