import { CircleX } from 'lucide-react'
import {
	useFormContext,
	type ControllerRenderProps,
	type FieldPath,
	type FieldValues
} from 'react-hook-form'

import { cn } from '@/lib/utils'

import { useFormField } from '../ui/form'

const ClearInputButton = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	field,
	inputRef
}: {
	field: ControllerRenderProps<TFieldValues, TName>
	inputRef: React.RefObject<HTMLInputElement | null>
}) => {
	const form = useFormContext<TFieldValues>()

	const { name, error } = useFormField()

	const handleClearInput = () => {
		form.resetField(name as TName)

		if (inputRef?.current) {
			inputRef.current.focus()
		}
	}

	return (
		field.value && (
			<button
				className='text-primary-500 hover:text-primary-700 focus-visible:outline-ring/70 absolute inset-y-0 end-2 flex h-full w-9 cursor-pointer items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
				aria-label='Clear input'
				onClick={handleClearInput}
			>
				<CircleX
					size={20}
					strokeWidth={1}
					aria-hidden='true'
					className={cn({
						'text-red-500 dark:text-red-200': !!error
					})}
				/>
			</button>
		)
	)
}

export { ClearInputButton }
