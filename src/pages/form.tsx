import { useState } from 'react'

export default function Form() {
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [users, setUsers] = useState<any>([])

	async function saveUser() {
		await fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify({
				name,
				age
			})
		})

		//  seria muito fácio retornar os usuários ao inserir com POST
		const users = await fetch('/api/form').then((res) => res.json())
		setUsers(users)
	}

	return (
		<>
			<h1>Integrando com API</h1>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
					rowGap: 5,
					padding: '10px 20px'
				}}
			>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(+e.target.value)}
				/>

				<button onClick={saveUser}>Enviar</button>

				{!!users?.length && (
					<ul>
						{users.map((user: { id: string; name: string; age: number }) => (
							<li key={user.id}>
								Nome: {user.name} &nbsp; Idade: {user.age}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}
