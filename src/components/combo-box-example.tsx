import { cn } from '@/lib/utils'
import { useCombobox } from 'downshift'
import React from 'react'
import { Virtualizer } from 'virtua'
import { Input } from './ui/input'

import { useDebounceCallback } from 'usehooks-ts'
import books from '@/constants/books'

function getBooksFilter(inputValue: string) {
	const lowerCasedInputValue = inputValue.toLowerCase()

	return function booksFilter(book: (typeof books)[number]) {
		return (
			!inputValue ||
			book.title.toLowerCase().includes(lowerCasedInputValue) ||
			book.author.toLowerCase().includes(lowerCasedInputValue)
		)
	}
}

function ComboBoxExample() {
	const [items, setItems] = React.useState(books)

	const debouncedSetItems = useDebounceCallback(setItems, 500)

	const { isOpen, getMenuProps, getInputProps, getItemProps } = useCombobox({
		onInputValueChange({ inputValue }) {
			debouncedSetItems(books.filter(getBooksFilter(inputValue)))
		},
		items,
		itemToString(item) {
			return item ? item.title : ''
		}
	})

	return (
		<div>
			<div className='w-72 flex flex-col gap-1'>
				<Input {...getInputProps?.()} />
			</div>
			<ul
				className={`absolute w-72 bg-white mt-1 shadow-md overflow-y-scroll max-h-80 p-0 z-10 ${
					!(isOpen && items.length) && 'hidden'
				}`}
				{...getMenuProps()}
			>
				{isOpen && (
					<Virtualizer>
						{items.map((item, index) => (
							<li
								key={item.id}
								className={cn(
									`relative flex cursor-default select-none flex-col rounded-sm px-3 py-1.5 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground`
								)}
								{...getItemProps?.({ item, index })}
							>
								<span className='text-sm text-foreground'>{item.title}</span>
								<span className='text-sm text-gray-700'>{item.author}</span>
							</li>
						))}
					</Virtualizer>
				)}
			</ul>
		</div>
	)
}

export default ComboBoxExample
