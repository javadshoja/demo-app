import React from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface DynamicTableProps {
	title?: string
	columns: string[]
	data: Record<string, unknown>[]
	isLoading?: boolean
}

export function DynamicTable({
	title,
	columns,
	data,
	isLoading = false
}: DynamicTableProps) {
	if (isLoading) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>{title || 'Loading data...'}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='h-24 flex items-center justify-center'>
						<p>Loading...</p>
					</div>
				</CardContent>
			</Card>
		)
	}

	if (!columns.length || !data.length) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>{title || 'No data available'}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='h-24 flex items-center justify-center'>
						<p>No data available</p>
					</div>
				</CardContent>
			</Card>
		)
	}

	return (
		<Card>
			{title && (
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
			)}
			<CardContent>
				<div className='rounded-md border'>
					<Table>
						<TableHeader>
							<TableRow>
								{columns.map(column => (
									<TableHead key={column}>
										{column.charAt(0).toUpperCase() + column.slice(1)}
									</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{data.map((row, rowIndex) => (
								<TableRow key={rowIndex}>
									{columns.map(column => (
										<TableCell key={`${rowIndex}-${column}`}>
											{formatCellValue(row[column])}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	)
}

// Helper function to format cell values based on their type
function formatCellValue(value: unknown): React.ReactNode {
	if (value === null || value === undefined) {
		return '-'
	}

	if (typeof value === 'boolean') {
		return value ? 'Yes' : 'No'
	}

	if (typeof value === 'object') {
		if (Array.isArray(value)) {
			return value.join(', ')
		}

		if (value instanceof Date) {
			return value.toLocaleDateString()
		}

		// For other objects, convert to JSON string
		return JSON.stringify(value)
	}

	return String(value)
}
