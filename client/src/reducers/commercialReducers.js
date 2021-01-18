import {
    COMMERCIAL_LIST_REQUEST,
    COMMERCIAL_LIST_SUCCESS,
    COMMERCIAL_LIST_FAIL,
    COMMERCIAL_DETAILS_REQUEST,
    COMMERCIAL_DETAILS_SUCCESS,
    COMMERCIAL_DETAILS_FAIL,
    COMMERCIAL_DELETE_REQUEST,
    COMMERCIAL_DELETE_SUCCESS,
    COMMERCIAL_DELETE_FAIL,
    COMMERCIAL_CREATE_REQUEST,
    COMMERCIAL_CREATE_SUCCESS,
    COMMERCIAL_CREATE_FAIL,
    COMMERCIAL_CREATE_RESET,
    COMMERCIAL_UPDATE_REQUEST,
    COMMERCIAL_UPDATE_SUCCESS,
    COMMERCIAL_UPDATE_FAIL,
    COMMERCIAL_UPDATE_RESET,
  } from '../constants/commercialConstants'
  
  export const commercialListReducer = (state = { commercials: [] }, action) => {
    switch (action.type) {
      case COMMERCIAL_LIST_REQUEST:
        return { loading: true, commercials: [] }
      case COMMERCIAL_LIST_SUCCESS:
        return { loading: false, commercials: action.payload }
      case COMMERCIAL_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const commercialDetailsReducer = (
    state = { commercial: { location: {}, images: [] } },
    action
  ) => {
    switch (action.type) {
      case COMMERCIAL_DETAILS_REQUEST:
        return { loading: true, ...state } 
      case COMMERCIAL_DETAILS_SUCCESS:
        return { loading: false, commercial: action.payload }
      case COMMERCIAL_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const commercialDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMERCIAL_DELETE_REQUEST:
        return { loading: true }
      case COMMERCIAL_DELETE_SUCCESS:
        return { loading: false, success: true }
      case COMMERCIAL_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const commercialCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMERCIAL_CREATE_REQUEST:
        return { loading: true }
      case COMMERCIAL_CREATE_SUCCESS:
        return { loading: false, success: true, commercial: action.payload }
      case COMMERCIAL_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case COMMERCIAL_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const commercialUpdateReducer = (state = { commercial: {} }, action) => {
    switch (action.type) {
      case COMMERCIAL_UPDATE_REQUEST:
        return { loading: true }
      case COMMERCIAL_UPDATE_SUCCESS:
        return { loading: false, success: true, commercial: action.payload }
      case COMMERCIAL_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case COMMERCIAL_UPDATE_RESET:
        return { commercial: {} }
      default:
        return state
    }
  }
  