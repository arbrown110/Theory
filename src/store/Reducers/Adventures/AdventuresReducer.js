import { FETCH_ADVENTURES_REQUEST, FETCH_ADVENTURES_SUCCESS, FETCH_ADVENTURES_FAIL }  from '../../Actions/Adventures/actions'


export const AdventuresReducer = (state={adventures:[]}, actions) =>{
  switch(actions.type){
    case FETCH_ADVENTURES_REQUEST:
      return {loading:true}
    case FETCH_ADVENTURES_SUCCESS:
      return {loading:false, adventures:actions.payload}
    case FETCH_ADVENTURES_FAIL:
      return {loading:false, error:actions.payload}
  }
}
