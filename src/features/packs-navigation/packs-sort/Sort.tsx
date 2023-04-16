import React, { FC, useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { useAppDispatch } from '../../../app/store'
import SuperSort from '../../../comman/components/c10-SuperSort/SuperSort'
import { packsNavigationThunks } from '../packs-search/packs-navigation-slice'

/*
props is an array of params to sort by
 */
export const Sort: FC<{ sort_by: string[] }> = ({ sort_by }) => {
  const [sort, setSort] = useState('')
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('packName')

  const onChangeHandler = (newSort: string) => {
    console.log(search)
    setSort(newSort)
    setSearchParams({ sortPacks: newSort, packName: search ? search : '' })
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams)

    /*
    we check if there is any change in the URL,
    Compare the params object with the current searchParams object, and
    if there is difference set new params
     */
    if (
      JSON.stringify(params) !==
      JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)))
    ) {
      setSearchParams(new URLSearchParams(window.location.search))
    } else {
      dispatch(
        packsNavigationThunks.getCardsPackThunk({
          sortParam: params.sortPacks,
          searchParam: search || '',
        })
      )
    }
  }, [searchParams, search, sort_by])

  return (
    <>
      {sort_by.map(elem => {
        return (
          <SuperSort
            key={elem}
            sort={sort}
            value={elem}
            onChange={onChangeHandler}
            id={`${elem}-sortId`}
          />
        )
      })}
    </>
  )
}
