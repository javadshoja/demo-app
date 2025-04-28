import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { RegisterRequest } from '@/schemas/auth-schemas'
import { Control } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

type Props = {
	control: Control<RegisterRequest>
	name: Pick<RegisterRequest, 'password' | 'confirmPassword'> extends infer T
		? keyof T
		: never
	label: string
}

const PasswordInput: React.FC<Props> = ({ control, name, label }) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>

					<FormControl>
						<div className='relative'>
							<Input
								type={showPassword ? 'text' : 'password'}
								className='hide-password-toggle pl-10'
								{...field}
							/>
							<Button
								type='button'
								variant='ghost'
								size='sm'
								className='absolute left-0 top-0 h-full pl-3 py-2 hover:bg-transparent'
								onClick={() => setShowPassword(prev => !prev)}
							>
								{showPassword ? (
									<EyeIcon className='h-4 w-4' aria-hidden='true' />
								) : (
									<EyeOffIcon className='h-4 w-4' aria-hidden='true' />
								)}
								<span className='sr-only'>
									{showPassword ? 'Hide password' : 'Show password'}
								</span>
							</Button>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export { PasswordInput }
