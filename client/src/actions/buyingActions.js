import axios from 'axios'
import { 
    BUYING_LIST_REQUEST, 
    BUYING_LIST_SUCCESS, 
    BUYING_LIST_FAIL, 
    BUYING_DETAILS_REQUEST,
    BUYING_DETAILS_SUCCESS,
    BUYING_DETAILS_FAIL,
    BUYING_CREATE_FAIL,
    BUYING_CREATE_SUCCESS,
    BUYING_CREATE_REQUEST,
    BUYING_DELETE_FAIL,
    BUYING_DELETE_SUCCESS,
    BUYING_DELETE_REQUEST,
    BUYING_UPDATE_SUCCESS,
    BUYING_UPDATE_FAIL,
    BUYING_UPDATE_REQUEST
} from '../constants/buyingConstants'
import { logout } from './userActions'

export const listBuyings = () => async (dispatch) => {
    try {
        dispatch({ type: BUYING_LIST_REQUEST })

        const { data } = await axios.get('/api/buyings')

        dispatch({
            type: BUYING_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BUYING_LIST_FAIL, 
            payload: 
             error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const listBuyingDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BUYING_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/buyings/${id}`)
        dispatch({
            type: BUYING_DETAILS_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BUYING_DETAILS_FAIL, 
            payload: 
             error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteBuying = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BUYING_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`/api/buyings/${id}`, config)
  
      dispatch({
        type: BUYING_DELETE_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: BUYING_DELETE_FAIL,
        payload: message,
      })
    }
  }
  
  export const createBuying = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: BUYING_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/buyings`, {}, config)
  
      dispatch({
        type: BUYING_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: BUYING_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const updateBuying = (buying) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BUYING_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/buyings/${buying._id}`,
        buying,
        config
      )
  
      dispatch({
        type: BUYING_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: BUYING_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: BUYING_UPDATE_FAIL,
        payload: message,
      })
    }
  }