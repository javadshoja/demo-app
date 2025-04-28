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
		<FormField
			control={control}
			name='fullName'
			render={({ field }) => (
				<FormItem>
					<FormLabel>نام و نام خانوادگی</FormLabel>

					<FormControl>
						<Input placeholder='نام' {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export { FullNameInput }
