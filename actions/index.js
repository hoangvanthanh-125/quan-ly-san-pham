import * as Types from '../connstant/ActionsType'
import callApi from './../utils/callApi'
export const  actFetchProductsRequest = ()=>{
  return (dispatch)=>{
    return callApi('products','GET',null).then(res=>{
     dispatch(fetchAllProduct(res.data));
    })
  }
}
export const fetchAllProduct = (products)=>{
  return {
    type:Types.FETCH_ALL_PRODUCT,
    products
  }
}

export const  actDeleteProductsRequest = (id)=>{
  return (dispatch)=>{
    return callApi(`products/${id}`,'DELETE',null).then(res=>{
     dispatch(deleteProduct(id));
    })
  }
}
export const deleteProduct = (id)=>{
  return {
    type:Types.DELETE_PRODUCT,
    id
  }
}

export const  actAddProductsRequest = (product)=>{
  return (dispatch)=>{
    return callApi(`products`,'POST',product).then(res=>{
     // history.push('/products');
     dispatch(addProduct(res.data));
    })
  }
}
export const addProduct = (product)=>{
  return {
    type:Types.ADD_PRODUCT,
    product
  }
}
export const actGetProduct = (id)=>{
  return (dispatch)=>{
    return callApi(`products/${id}`,'GET',null).then(res=>{
      dispatch(editProduct(res.data));
    })
  }
}

export const editProduct = (product)=>{
 return {
   type:Types.EDIT_PRODUCT,
   product
 }
}