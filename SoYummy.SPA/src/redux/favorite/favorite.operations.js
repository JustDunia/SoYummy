import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'http://localhost:3000'

export const addToFavorites = createAsyncThunk('favorite/add', async (recipeId, thunkAPI) => {
	try {
		const res = await axios.put(`/favorite/${recipeId}`)
		return res.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
})

export const removeFromFavorites = createAsyncThunk(
	'favorite/remove',
	async (recipeId, thunkAPI) => {
		try {
			const res = await axios.patch(`/favorite/${recipeId}`)
			return res.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)

export const getFavorite = createAsyncThunk('favorite/get', async (_, thunkAPI) => {
	try {
		const res = await axios.get('/favorite')
		return res.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
})
