'use client'

import { PasswordInput } from '@/components/form-inputs/password-input'
import { RegisterRequest } from '@/schemas/auth-schemas'
import { Control } from 'react-hook-form'

type Props = {
	control: Control<RegisterRequest>
}

const ConfirmPasswordInput: React.FC<Props> = ({ control }) => {
	return (
		<PasswordInput
			control={control}
			name='confirmPassword'
			label='تکرار رمز عبور'
		/>
	)
}

export { ConfirmPasswordInput }
