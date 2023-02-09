import { NextApiRequest, NextApiResponse } from 'next'

const teste = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({
		method: req.method
	})
}

export default teste
