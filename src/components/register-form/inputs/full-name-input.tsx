import InputField from '@/components/form-inputs/input-field'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterRequest } from '@/schemas/auth-schemas'
import { Control } from 'react-hook-form'

type Props = {
	control: Control<RegisterRequest>
}

const FullNameInput: React.FC<Props> = ({ control }) => {
	return (
		<InputField
			control={form.control}
			name='fullName'
			placeholder='نام'
			label='نام و نام خانوادگی'
		/>
	)
}

export { FullNameInput }
