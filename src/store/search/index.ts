import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DateDomain, LanguageDomain } from '../../domain/language'
import { CurrencyDomain } from '../../domain/currency'
import { SearchDomain } from '../../domain/search'
import { setCurrency } from '../currency'
import { CityDomain } from '../../domain/city'

type SearchState = {
  form: SearchDomain.SearchData & {
    isLoading: boolean
  }
}

export const initialState: SearchState = {
  form: {
    origin: CityDomain.getCityByName('Quebec'),
    destination: CityDomain.getCityByName('Montreal'),
    outboundDate: DateDomain.todayString(),
    adult: 1,
    child: 0,
    senior: 0,
    senior_ages: [],
    child_ages: [],
    lang: LanguageDomain.EN,
    currency: CurrencyDomain.USD,
    isLoading: false,
  },
}

type SetPlaceAction = {
  field: 'origin' | 'destination'
  location: CityDomain.City['name']
}
const setPlace = (
  state: SearchState,
  action: PayloadAction<SetPlaceAction>
) => {
  const { field, location } = action.payload
  state.form[field] = CityDomain.getCityByName(location)
}

const setDate = (state: SearchState, action: PayloadAction<string>) => {
  state.form.outboundDate = action.payload
}

const switchPlaces = (state: SearchState) => {
  const newOrigin = state.form.destination
  const newDestination = state.form.origin
  state.form.destination = newDestination
  state.form.origin = newOrigin
}

export type setPassengerPayload = {
  passenger: SearchDomain.PassengerKeys | SearchDomain.PassengerAgeKeys
  value: number | string[]
}

const setPassenger = (
  state: SearchState,
  action: PayloadAction<setPassengerPayload>
) => {
  const { passenger, value } = action.payload
  state.form[passenger] = value as string[] & number

  if (passenger === SearchDomain.SENIOR) {
    state.form[SearchDomain.SENIOR_AGES] = state.form[
      SearchDomain.SENIOR_AGES
    ].slice(0, value as number)
  }

  if (passenger === SearchDomain.CHILD) {
    state.form[SearchDomain.CHILD_AGES] = state.form[
      SearchDomain.CHILD_AGES
    ].slice(0, value as number)
  }
}

const currencySlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPlace,
    switchPlaces,
    setDate,
    setPassenger,
  },
  extraReducers: (builder) => {
    builder.addCase(
      setCurrency,
      (state, action: PayloadAction<CurrencyDomain.Currency>) => {
        state.form.currency = action.payload
      }
    )
  },
})

export const { reducer: searchReducer, actions } = currencySlice
