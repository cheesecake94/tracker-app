import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'set_token':
      return { ...state, token: action.payload, errorMessage: null };
    case 'set_error_message':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'set_token', payload: response.data.token })
    } catch (err) {
      dispatch({ type: 'set_error_message', payload: 'An error has occurred while signing up' });
    }
  }
}

const signIn = (dispatch) => {
  return ({ email, password }) => {

  }
}

const signOut = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, errorMessage: null }
);