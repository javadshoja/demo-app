import React, { useRef } from 'react'
import { FormControl, FormLabel, FormMessage } from '../ui/form'
import { FormItem } from '../ui/form'
import { FormField } from '../ui/form'
import { Input } from '../ui/input'
import { ControllerProps } from 'react-hook-form'
import { FieldPath } from 'react-hook-form'
import { FieldValues } from 'react-hook-form'
import { ClearInputButton } from './clear-input-button'

const InputField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
	label: string
	placeholder: string
}) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<FormField
			{...props}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{props.label}</FormLabel>

					<div className='relative'>
						<FormControl>
							<Input
								placeholder={props.placeholder}
								{...field}
								ref={inputRef}
							/>
						</FormControl>

						<ClearInputButton field={field} inputRef={inputRef} />
					</div>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export default InputField
