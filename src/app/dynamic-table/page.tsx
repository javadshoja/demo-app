import { DynamicTableExample } from '@/components/dynamic-table-example'

export default function DynamicTablePage() {
	return (
		<div className='container py-8'>
			<h1 className='text-2xl font-bold mb-6'>Dynamic Table Demo</h1>
			<p className='mb-6'>
				This page demonstrates a dynamic table that loads columns and data
				dynamically from APIs. The table can handle unknown data types and
				adapts to the structure returned by the API.
			</p>
			<DynamicTableExample />
		</div>
	)
}
