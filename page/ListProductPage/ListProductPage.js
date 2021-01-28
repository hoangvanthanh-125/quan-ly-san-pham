import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListProduct from './../../component/ListProduct/ListProduct'
import ProductItem from './../../component/ProductItem/ProductItem'
import callApi from './../../utils/callApi'
import * as actions from './../../actions/index'
function ListProductPage(props) {
  const products=useSelector(state=>state.products);
  const dispatch=useDispatch();
  const onDelete=(id)=>{

    dispatch(actions.actDeleteProductsRequest(id));

  }
  const showProduct=(products)=>{
    var result=null;
    if(products.length>0){
      result=products.map((product,index)=>(<ProductItem onDelete={onDelete} key={index} product={product} index={index} />))
    }
    return result;

  }
  useEffect(()=>{
    console.log('render');
    dispatch(actions.actFetchProductsRequest());
  },[])
  
  return (

    <ListProduct>
      {showProduct(products)}
    </ListProduct>
  );
}


export default ListProductPage;