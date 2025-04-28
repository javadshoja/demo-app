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

const EmailInput: React.FC<Props> = ({ control }) => {
	return (
		<FormField
			control={control}
			name='email'
			render={({ field }) => (
				<FormItem>
					<FormLabel>ایمیل</FormLabel>

					<FormControl>
						<Input
							placeholder='you@example.com'
							type='email'
							// dir='ltr'
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export { EmailInput }
