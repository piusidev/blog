import React from 'react';

interface IDataGridProps {
  isLoading: boolean

  page: number
  setPage: (page: number) => void

  data: Array<any>
  renderItem: (item: any) => React.ReactNode
}
