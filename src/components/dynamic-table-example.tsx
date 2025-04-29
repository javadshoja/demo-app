'use client'

import { useEffect, useState } from 'react'
import { DynamicTable } from '@/components/ui/dynamic-table'

// Example function to fetch columns from first API
async function fetchTableColumns() {
	// Replace with your actual API endpoint
	// const response = await fetch("api/table-columns");
	// const data = await response.json();
	// return data.columns;

	// Mock response for demonstration
	return new Promise<string[]>(resolve => {
		setTimeout(() => {
			resolve(['name', 'age', 'email', 'isActive', 'role', 'joinDate'])
		}, 500)
	})
}

// Example function to fetch data based on columns
async function fetchTableData(columns: string[]) {
	console.log('🚀 ~ fetchTableData ~ columns:', columns)
	// Replace with your actual API endpoint
	// const response = await fetch("api/table-data", {
	//   method: "POST",
	//   headers: { "Content-Type": "application/json" },
	//   body: JSON.stringify({ columns }),
	// });
	// return await response.json();

	// Mock response for demonstration
	return new Promise<Record<string, unknown>[]>(resolve => {
		setTimeout(() => {
			resolve([
				{
					name: 'John Doe',
					age: 28,
					email: 'john@example.com',
					isActive: true,
					role: 'Developer',
					joinDate: '2023-01-15'
				},
				{
					name: 'Jane Smith',
					age: 34,
					email: 'jane@example.com',
					isActive: false,
					role: 'Designer',
					joinDate: '2022-05-20'
				},
				{
					name: 'Mike Johnson',
					age: 42,
					email: 'mike@example.com',
					isActive: true,
					role: 'Manager',
					joinDate: '2021-11-08'
				},
				{
					name: 'Sarah Williams',
					age: 31,
					email: 'sarah@example.com',
					isActive: true,
					role: 'Developer',
					joinDate: '2022-03-17'
				}
			])
		}, 800)
	})
}

export function DynamicTableExample() {
	const [columns, setColumns] = useState<string[]>([])
	const [data, setData] = useState<Record<string, unknown>[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function loadTableData() {
			try {
				setIsLoading(true)

				// Step 1: Fetch column names from first API
				const fetchedColumns = await fetchTableColumns()
				setColumns(fetchedColumns)

				// Step 2: Use these column names to fetch the actual data
				const fetchedData = await fetchTableData(fetchedColumns)
				setData(fetchedData)
			} catch (error) {
				console.error('Error loading table data:', error)
			} finally {
				setIsLoading(false)
			}
		}

		loadTableData()
	}, [])

	return (
		<DynamicTable
			title='Dynamic Data Table'
			columns={columns}
			data={data}
			isLoading={isLoading}
		/>
	)
}
