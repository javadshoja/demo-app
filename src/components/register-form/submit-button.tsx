import { Button } from '../ui/button'

type Props = {
	disabled: boolean
}

const SubmitButton = ({ disabled }: Props) => {
	return (
		<Button type='submit' disabled={disabled}>
			ثبت نام
		</Button>
	)
}

export { SubmitButton }
