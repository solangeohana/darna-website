import axios from 'axios'
import { 
    RENTING_LIST_REQUEST, 
    RENTING_LIST_SUCCESS, 
    RENTING_LIST_FAIL, 
    RENTING_DETAILS_REQUEST,
    RENTING_DETAILS_SUCCESS,
    RENTING_DETAILS_FAIL,
    RENTING_CREATE_FAIL,
    RENTING_CREATE_SUCCESS,
    RENTING_CREATE_REQUEST,
    RENTING_DELETE_FAIL,
    RENTING_DELETE_SUCCESS,
    RENTING_DELETE_REQUEST,
    RENTING_UPDATE_SUCCESS,
    RENTING_UPDATE_FAIL,
    RENTING_UPDATE_REQUEST
} from '../constants/rentingConstants'
import { logout } from './userActions'

export const listRentings = () => async (dispatch) => {
    try {
        dispatch({ type: RENTING_LIST_REQUEST })

        const { data } = await axios.get('/api/rentings')

        dispatch({
            type: RENTING_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RENTING_LIST_FAIL, 
            payload: 
             error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const listRentingDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: RENTING_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/rentings/${id}`)
        console.log('data:', data)
        console.log('address:', data.location.address)
        console.log('image 1 :', data.images[0])
        
        dispatch({
            type: RENTING_DETAILS_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RENTING_DETAILS_FAIL, 
            payload: 
             error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteRenting = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: RENTING_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`/api/rentings/${id}`, config)
  
      dispatch({
        type: RENTING_DELETE_SUCCESS,
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
        type: RENTING_DELETE_FAIL,
        payload: message,
      })
    }
  }
  
  export const createRenting = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: RENTING_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/rentings`, {}, config)
  
      dispatch({
        type: RENTING_CREATE_SUCCESS,
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
        type: RENTING_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const updateRenting = (renting) => async (dispatch, getState) => {
    try {
      dispatch({
        type: RENTING_UPDATE_REQUEST,
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
        `/api/rentings/${renting._id}`,
        renting,
        config
      )
  
      dispatch({
        type: RENTING_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: RENTING_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: RENTING_UPDATE_FAIL,
        payload: message,
      })
    }
  }