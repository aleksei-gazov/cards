import React from 'react'

import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/store'
import SuperPagination from '../../../comman/components/c9-SuperPagination/SuperPagination'
import { changePage, changePageCount } from '../packs-search/packs-navigation-slice'

export const Pagination = () => {
  const page = useAppSelector(state => state.packNavigation.page)
  const pageCount = useAppSelector(state => state.packNavigation.pageCount)
  const totalCount = useAppSelector(state => state.packNavigation.cardPacksTotalCount)
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const onChangeHandler = (newPage: number, newCount: number) => {
    dispatch(changePage(newPage))
    dispatch(changePageCount(newCount))
    setSearchParams({ ...params, page: newPage.toString(), pageCount: newCount.toString() })
  }

  return (
    <>
      <SuperPagination
        itemsCountForPage={pageCount as number}
        totalCount={totalCount as number}
        page={page as number}
        onChange={onChangeHandler}
        isLoading={false}
      />
    </>
  )
}
