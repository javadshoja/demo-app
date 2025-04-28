import { upfetch } from '@/lib/up-fetch'
import { RegisterRequest } from '@/schemas/auth-schemas'
import { RegisterResponse } from '@/types/auth-types'
import { isResponseError } from 'up-fetch'

const postRegister = async (body: RegisterRequest) => {
	try {
		const response = await upfetch<RegisterResponse>('/api/auth/register', {
			method: 'POST',
			body
		})

		return response
	} catch (error) {
		if (isResponseError(error)) {
			console.error(error)

			return error.response.json() as unknown as RegisterResponse
		}
	}
}

export { postRegister }
