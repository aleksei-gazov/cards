import React, { useEffect } from 'react'

import { Box, Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch } from '../../../app/store'
import SuperDebouncedInput from '../../../comman/components/c8-SuperDebouncedInput/SuperDebouncedInput'

import { packsNavigationThunks } from './packs-navigation-slice'

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sortPacks')

  const dispatch = useAppDispatch()

  const onDebounceHandler = (searchParam: string) => {
    console.log(sort)
    setSearchParams({ packName: searchParam, sortPacks: sort || '' })
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams)

    /*
    we check if there is any change in the URL,
    Compare the params object with the current searchParams object, and
    if there is difference set new params
     */
    if (JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)))) {
      setSearchParams(new URLSearchParams(window.location.search))
    } else {
      dispatch(
        packsNavigationThunks.getCardsPackThunk({
          searchParam: params.packName,
          sortParam: sort || '',
        })
      )
    }
  }, [searchParams, sort])

  return (
    <Box sx={{ textAlign: 'start' }}>
      <Typography>Search</Typography>
      <SuperDebouncedInput onDebouncedChange={onDebounceHandler} />
    </Box>
  )
}
