import { PasswordInput as FromPasswordInput } from '@/components/form-inputs/password-input'
import { RegisterRequest } from '@/schemas/auth-schemas'
import { Control } from 'react-hook-form'

type Props = {
	control: Control<RegisterRequest>
}

const PasswordInput: React.FC<Props> = ({ control }) => {
	return (
		<FromPasswordInput control={control} name='password' label='رمز عبور' />
	)
}

export { PasswordInput }
