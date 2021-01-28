import  * as Types from './../connstant/ActionsType'
var initialState=[];

const ListProducsReducers =(state=initialState,action)=>{
  switch(action.type){
    case Types.FETCH_ALL_PRODUCT:
      state=action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      console.log(action.id);
      var newList = state.filter(item=>item.id !== action.id);
     state=newList;
     return [...state];
     case Types.ADD_PRODUCT:
       state.push(action.product);
       console.log(state);
       return [...state];

      default:return state;
  }
}
export default ListProducsReducers;