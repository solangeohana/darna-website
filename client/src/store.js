import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'

import {
  rentingListReducer,
  rentingDetailsReducer,
  rentingDeleteReducer,
  rentingCreateReducer,
  rentingUpdateReducer,
} from './reducers/rentingReducers'

import {
  buyingListReducer,
  buyingDetailsReducer,
  buyingDeleteReducer,
  buyingCreateReducer,
  buyingUpdateReducer,
} from './reducers/buyingReducers'

import {
  commercialListReducer,
  commercialDetailsReducer,
  commercialDeleteReducer,
  commercialCreateReducer,
  commercialUpdateReducer,
} from './reducers/commercialReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  rentingList: rentingListReducer,
  rentingDetails: rentingDetailsReducer,
  rentingDelete: rentingDeleteReducer,
  rentingCreate: rentingCreateReducer,
  rentingUpdate: rentingUpdateReducer,
  buyingList: buyingListReducer,
  buyingDetails: buyingDetailsReducer,
  buyingDelete: buyingDeleteReducer,
  buyingCreate: buyingCreateReducer,
  buyingUpdate: buyingUpdateReducer,
  commercialList: commercialListReducer,
  commercialDetails: commercialDetailsReducer,
  commercialDelete: commercialDeleteReducer,
  commercialCreate: commercialCreateReducer,
  commercialUpdate: commercialUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
