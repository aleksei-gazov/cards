import React, { FC, useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/store'
import SuperSort from '../../../comman/components/c10-SuperSort/SuperSort'
import { sortResult } from '../packs-search/packs-navigation-slice'

export const Sort: FC<{ sort_by: string }> = ({ sort_by }) => {
  const [sort, setSort] = useState('')
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const sortRes = useAppSelector(state => state.packNavigation.sortResult)

  const onChangeHandler = (newSort: string) => {
    setSort(newSort)
    dispatch(sortResult(newSort))
    setSearchParams({ ...params, sortPacks: newSort })
  }

  /*
  this useEffect is for the synchronize icon with query params, if user send link to someone
  or enter value directly in URL
   */
  useEffect(() => {
    dispatch(sortResult(params.sortPacks))
    setSort(sortRes as string)
  }, [sortRes])

  return (
    <>
      <SuperSort sort={sort} value={sort_by} onChange={onChangeHandler} id={`${sort_by}-sortId`} />
    </>
  )
}
