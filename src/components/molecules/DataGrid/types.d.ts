import React from 'react'

interface IDataGridProps {
  isLoading: boolean

  page: number
  setPage: (page: number) => void

  data: Array<object>
  renderItem: (item: object) => React.ReactNode
}
