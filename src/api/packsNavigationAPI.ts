import axios from 'axios'

export const packsNavigationAPI = {
  getCardsPack(page: number, pageCount: number, search: string, sort: string) {
    return axios.get<CardPacksResponse>('http://localhost:7542/2.0/cards/pack', {
      withCredentials: true,
      params: { packName: search, sortPacks: sort, page, pageCount },
    })
  },
}

export type CardPackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}

export type CardPacksResponse = {
  cardPacks: CardPackType[]
  cardPacksTotalCount: number | null
  maxCardsCount: number | null
  minCardsCount: number | null
  page: number | null
  pageCount: number | null
  token: string | null
  tokenDeathTime: number | null
}
