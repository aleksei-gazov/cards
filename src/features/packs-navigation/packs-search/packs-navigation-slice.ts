import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CardPacksResponse, packsNavigationAPI } from '../../../api/packsNavigationAPI'

const getCardsPackThunk = createAsyncThunk<
  { data: CardPacksResponse },
  { searchParam?: string; sortParam?: string }
>('getCardPacks', async ({ searchParam, sortParam }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    // const res = await packsNavigationAPI.getCardsPack(searchParam, sortParam)
    //
    // return { data: res.data }

    let res

    if (searchParam && sortParam) {
      res = await packsNavigationAPI.getCardsPack(searchParam, sortParam)
    } else if (searchParam) {
      res = await packsNavigationAPI.getCardsPack(searchParam)
    } else if (sortParam) {
      res = await packsNavigationAPI.getCardsPack(sortParam)
    } else {
      res = await packsNavigationAPI.getCardsPack()
    }

    return { data: res.data }
  } catch (e) {
    console.log(e)

    return rejectWithValue('')
  }
})

const paginationThunk = createAsyncThunk<any, any>(
  'packs-navigation/pagination',
  async (arg, thunkAPI) => {
    try {
      console.log(123)
    } catch (e) {
      console.log(e)
    }
  }
)

const initialState: CardPacksResponse = {
  cardPacks: [],
  cardPacksTotalCount: null,
  maxCardsCount: null,
  page: null,
  minCardsCount: null,
  pageCount: null,
  token: null,
  tokenDeathTime: null,
}

export const packsNavigationSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCardsPackThunk.fulfilled, (state, action) => {
      return action.payload.data
    })
  },
})

export const searchReducer = packsNavigationSlice.reducer
export const packsNavigationThunks = { getCardsPackThunk }
