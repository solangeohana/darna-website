import axios from 'axios'
import { 
    COMMERCIAL_LIST_REQUEST, 
    COMMERCIAL_LIST_SUCCESS, 
    COMMERCIAL_LIST_FAIL, 
    COMMERCIAL_DETAILS_REQUEST,
    COMMERCIAL_DETAILS_SUCCESS,
    COMMERCIAL_DETAILS_FAIL,
    COMMERCIAL_CREATE_FAIL,
    COMMERCIAL_CREATE_SUCCESS,
    COMMERCIAL_CREATE_REQUEST,
    COMMERCIAL_DELETE_FAIL,
    COMMERCIAL_DELETE_SUCCESS,
    COMMERCIAL_DELETE_REQUEST,
    COMMERCIAL_UPDATE_SUCCESS,
    COMMERCIAL_UPDATE_FAIL,
    COMMERCIAL_UPDATE_REQUEST
} from '../constants/commercialConstants'
import { logout } from './userActions'

export const listCommercials = () => async (dispatch) => {
    try {
        dispatch({ type: COMMERCIAL_LIST_REQUEST })

        const { data } = await axios.get('/api/commercials')

        dispatch({
            type: COMMERCIAL_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COMMERCIAL_LIST_FAIL, 
            payload: 
             error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const listCommercialDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: COMMERCIAL_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/commercials/${id}`)
        dispatch({
            type: COMMERCIAL_DETAILS_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COMMERCIAL_DETAILS_FAIL, 
            payload: 
             error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteCommercial = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COMMERCIAL_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`/api/commercials/${id}`, config)
  
      dispatch({
        type: COMMERCIAL_DELETE_SUCCESS,
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
        type: COMMERCIAL_DELETE_FAIL,
        payload: message,
      })
    }
  }
  
  export const createCommercial = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: COMMERCIAL_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/commercials`, {}, config)
  
      dispatch({
        type: COMMERCIAL_CREATE_SUCCESS,
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
        type: COMMERCIAL_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const updateCommercial = (commercial) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COMMERCIAL_UPDATE_REQUEST,
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
        `/api/commercials/${commercial._id}`,
        commercial,
        config
      )
  
      dispatch({
        type: COMMERCIAL_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: COMMERCIAL_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: COMMERCIAL_UPDATE_FAIL,
        payload: message,
      })
    }
  }