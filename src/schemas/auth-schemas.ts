import { z } from 'zod'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=(?:.*\d){2,}).*$/
const persianLettersRegex = /^[\u0600-\u06FF\s]+$/

const required_error = 'این فیلد ضروری است'

const registerSchema = z
	.object({
		fullName: z
			.string({
				required_error
			})
			.regex(persianLettersRegex, {
				message: 'نام و نا خانوادگی فقط می‌تواند شامل حروف فارسی و فاصله باشد'
			})
			.min(3, {
				message: 'نام و نا خانوادگی باید حداقل 3 کاراکتر باشد'
			}),
		email: z
			.string({
				required_error
			})
			.email({
				message: 'ایمیل معتبر نمی باشد'
			}),
		password: z
			.string({
				required_error
			})
			.min(8, {
				message: 'رمز عبور باید حداقل 8 کاراکتر باشد'
			})
			.regex(passwordRegex, {
				message:
					'رمز عبور باید حداقل یک حرف کوچک، یک حرف بزرگ و دست‌کم دو عدد داشته باشد'
			}),
		confirmPassword: z
			.string({
				required_error
			})
			.min(8)
	})
	.superRefine((data, ctx) => {
		if (data.password !== data.confirmPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'رمز عبور مطابقت ندارد'
			})
		}
	})

type RegisterRequest = z.infer<typeof registerSchema>

export { registerSchema, type RegisterRequest }
