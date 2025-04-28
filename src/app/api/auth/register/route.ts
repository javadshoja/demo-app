import { NextResponse } from 'next/server'
import { registerSchema } from '@/schemas/auth-schemas'

export async function POST(request: Request) {
	try {
		// Parse request body
		const body = await request.json()

		// Validate request data using zod schema
		const validatedData = registerSchema.safeParse(body)

		if (!validatedData.success) {
			// Return validation errors
			return NextResponse.json(
				{
					success: false,
					errors: validatedData.error.flatten().fieldErrors
				},
				{ status: 400 }
			)
		}

		const { fullName, email } = validatedData.data

		if (fullName.length > 20) {
			return NextResponse.json(
				{
					success: false,
					message: 'نام وارد شده باید کمتر از 20 کاراکتر باشد'
				},
				{ status: 400 }
			)
		}

		return NextResponse.json(
			{
				success: true,
				message: 'ثبت نام با موفقیت انجام شد',
				user: { fullName, email }
			},
			{ status: 201 }
		)
	} catch (error) {
		console.error('Registration error:', error)

		return NextResponse.json(
			{
				success: false,
				message: 'خطایی در ثبت نام رخ داد'
			},
			{ status: 500 }
		)
	}
}
