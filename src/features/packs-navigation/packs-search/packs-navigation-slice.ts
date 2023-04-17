import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardPacksResponse, packsNavigationAPI } from '../../../api/packsNavigationAPI'

const getCardsPackThunk = createAsyncThunk<
  { data: CardPacksResponse },
  { searchParam: string; sortParam: string; page: number; pageCount: number }
>('getCardPacks', async ({ searchParam, sortParam, pageCount, page }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await packsNavigationAPI.getCardsPack(page, pageCount, searchParam, sortParam)

    return { data: res.data }
  } catch (e) {
    console.log(e)

    return rejectWithValue('')
  }
})

const initialState: CardPacksResponse & {
  newPage?: number
  newCountPage?: number
  searchResult?: string
  sortResult?: string
} = {
  cardPacks: [],
  cardPacksTotalCount: null,
  maxCardsCount: null,
  page: null,
  minCardsCount: null,
  pageCount: null,
  token: null,
  tokenDeathTime: null,
  newPage: 1,
  newCountPage: 4,
  searchResult: '',
  sortResult: '',
}

export const packsNavigationSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.newPage = action.payload
    },
    changePageCount: (state, action: PayloadAction<number>) => {
      state.newCountPage = action.payload
    },
    searchResult: (state, action: PayloadAction<string>) => {
      state.searchResult = action.payload
    },
    sortResult: (state, action: PayloadAction<string>) => {
      state.sortResult = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getCardsPackThunk.fulfilled, (state, action) => {
      return action.payload.data
    })
  },
})

export const packNavigationReducers = packsNavigationSlice.reducer
export const { changePage, changePageCount, sortResult, searchResult } =
  packsNavigationSlice.actions
export const packsNavigationThunks = { getCardsPackThunk }
