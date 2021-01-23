import axios from 'axios';
import { FETCH_ADVENTURES_REQUEST, FETCH_ADVENTURES_SUCCESS, FETCH_ADVENTURES_FAIL } from './actions'


const FetchAdventures = () => async (dispatch) => {
  const baseURL = {
    dev:'http://localhost:3001',
    prod: ''
  }
  const url = process.env.NODE_ENV === "production" ? baseURL.prod : baseURL.dev;

  try{
    dispatch({ type : FETCH_ADVENTURES_REQUEST })
    const { data } = await axios.get(url)
    dispatch({type:FETCH_ADVENTURES_SUCCESS, payload:data})
  }catch(error){
    dispatch({type:FETCH_ADVENTURES_FAIL, payload:error})
  }
}
