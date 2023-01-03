import React, { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Meh } from 'react-feather'

import Loading from '@/components/atoms/Loading'

import { Container, List, Actions, Button, NoData } from './styles'
import { IDataGridProps } from './types'

const DataGrid: React.FC<IDataGridProps> = ({
  page,
  setPage,
  isLoading,
  data,
  renderItem,
}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    scrollToTop()
  }, [page])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.length ? (
            <List>
              {data.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
              ))}
            </List>
          ) : (
            <NoData>
              <Meh />
              <p>There is nothing here...</p>
            </NoData>
          )}

          <Actions>
            <p>{`Page: ${page}`}</p>

            <Button
              disabled={page === 1}
              onClick={() => setPage(page <= 1 ? 1 : page - 1)}
            >
              <ArrowLeft />
            </Button>
            <Button disabled={!data.length} onClick={() => setPage(page + 1)}>
              <ArrowRight />
            </Button>
          </Actions>
        </>
      )}
    </Container>
  )
}

export default DataGrid
