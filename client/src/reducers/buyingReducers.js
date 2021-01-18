import {
    BUYING_LIST_REQUEST,
    BUYING_LIST_SUCCESS,
    BUYING_LIST_FAIL,
    BUYING_DETAILS_REQUEST,
    BUYING_DETAILS_SUCCESS,
    BUYING_DETAILS_FAIL,
    BUYING_DELETE_REQUEST,
    BUYING_DELETE_SUCCESS,
    BUYING_DELETE_FAIL,
    BUYING_CREATE_REQUEST,
    BUYING_CREATE_SUCCESS,
    BUYING_CREATE_FAIL,
    BUYING_CREATE_RESET,
    BUYING_UPDATE_REQUEST,
    BUYING_UPDATE_SUCCESS,
    BUYING_UPDATE_FAIL,
    BUYING_UPDATE_RESET,
  } from '../constants/buyingConstants'
  
  export const buyingListReducer = (state = { buyings: [] }, action) => {
    switch (action.type) {
      case BUYING_LIST_REQUEST:
        return { loading: true, buyings: [] }
      case BUYING_LIST_SUCCESS:
        return { loading: false, buyings: action.payload }
      case BUYING_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const buyingDetailsReducer = (
    state = { buying: { location: {}, images: [] } },
    action
  ) => {
    switch (action.type) {
      case BUYING_DETAILS_REQUEST:
        return { loading: true, ...state } 
      case BUYING_DETAILS_SUCCESS:
        return { loading: false, buying: action.payload }
      case BUYING_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const buyingDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case BUYING_DELETE_REQUEST:
        return { loading: true }
      case BUYING_DELETE_SUCCESS:
        return { loading: false, success: true }
      case BUYING_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const buyingCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case BUYING_CREATE_REQUEST:
        return { loading: true }
      case BUYING_CREATE_SUCCESS:
        return { loading: false, success: true, buying: action.payload }
      case BUYING_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case BUYING_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const buyingUpdateReducer = (state = { buying: {} }, action) => {
    switch (action.type) {
      case BUYING_UPDATE_REQUEST:
        return { loading: true }
      case BUYING_UPDATE_SUCCESS:
        return { loading: false, success: true, buying: action.payload }
      case BUYING_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case BUYING_UPDATE_RESET:
        return { buying: {} }
      default:
        return state
    }
  }
  