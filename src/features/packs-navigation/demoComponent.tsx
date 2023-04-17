import React, { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'

import { useAppDispatch } from '../../app/store'

import { Pagination } from './packs-pagination/Pagination'
import { packsNavigationThunks } from './packs-search/packs-navigation-slice'
import { Search } from './packs-search/Search'
import { Sort } from './packs-sort/Sort'

export const DemoComponent = () => {
  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams({
    packName: '',
    sortPacks: '',
    page: '1',
    pageCount: '4',
  })

  useEffect(() => {
    const params = Object.fromEntries(searchParams)

    if (params.page || params.pageCount || params.sort || params.search) {
      dispatch(
        packsNavigationThunks.getCardsPackThunk({
          page: +params.page,
          pageCount: +params.pageCount,
          sortParam: params.sortPacks,
          searchParam: params.packName,
        })
      )
    }
  }, [searchParams])

  return (
    <>
      <Search />
      <Sort sort_by={'cardsCount'} />
      <Sort sort_by={'name'} />
      <Sort sort_by={'updated'} />
      <Pagination />
    </>
  )
}
