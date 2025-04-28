type RegisterResponse = {
	success: boolean
	message: string
	user?: {
		fullName: string
		email: string
	}
}

export type { RegisterResponse }
