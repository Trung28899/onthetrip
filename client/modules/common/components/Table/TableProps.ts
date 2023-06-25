interface ColumnFields {
	label: string
	icon?: JSX.Element
	key: string
}

type TableDataType = { [key: string]: any }[]

type TableProps = {
	data: TableDataType
	columnFields: ColumnFields[]
	itemsPerPagePagination: number
	tableToPagination?: string
	noPagination?: boolean
	emptyData?: boolean
}

export type { TableProps, ColumnFields, TableDataType }
