import React from 'react';
import * as Types from './../connstant/ActionsType'
var initialState=null;

const  productEdittingReducer = (state=initialState,action)=> {
 switch(action.type){
   case Types.EDIT_PRODUCT:
    return action.product;
    default:return state;
 }
}

export default productEdittingReducer;