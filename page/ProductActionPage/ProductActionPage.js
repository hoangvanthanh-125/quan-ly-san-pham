import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams,  } from 'react-router-dom';
import callApi from './../../utils/callApi'
import * as actions from './../../actions/index'
function ProductActionPage(props) {
  const history = useHistory();
  const [name,setName]=useState('');
  const [price,setprice]=useState('');
  const [status,setStatus]=useState('');
  const param=useParams();
 const itemEditing= useSelector(state=>state.itemEditing);
 console.log(itemEditing);
  //const match=useRouteMatch();
  const dispatch=useDispatch();
  const onChange=(e)=>{
    var target=e.target;
   
    var value = target.type==='checkbox'?target.checked:target.value;
    if(target.name==='name')setName(value);
    if(target.name==='status')setStatus(value);
    if(target.name==='price')setprice(value);
     
  }
  const onSave = (e) => {
    e.preventDefault();
    //console.log(name,price,status);
    if(param.id){
       const {id}=param;
       callApi(`products/${id}`,'PUT',{
        name:name,
        price:price,
        status:status
       }).then(r=> history.push('/products'))
       
    }
    else{
     dispatch(actions.actAddProductsRequest({
        name:name,
        price:price,
        status:status
      }));
      history.goBack();

    }
   
    
  }
     useEffect(()=>{
      
      if(param.id){
        
        dispatch(actions.actGetProduct(param.id));
      }
      
     },[])
     useEffect(()=>{
      if(itemEditing){
       setStatus(itemEditing.status);
       setprice(itemEditing.price);
       setName(itemEditing.name);
      }
     },[itemEditing]);
  return (
   
   <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <form onSubmit={onSave}>
 
       <div className="form-group">
        <label >Tên sản phẩm</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nhập tên sản phẩm" 
          name='name'
          value={name}
          onChange={onChange}
         />
      </div>
      <div className="form-group">
        <label>Giá</label>
        <input 
          type="text" 
          className="form-control"  
          placeholder="Input field" 
          value={price}
          onChange={onChange}
          name='price'
        />
      </div>
      <div className="form-group">
        <label>Trạng thái</label>
      </div>
      
      <div className="checkbox">
        <label>
          <input 
           type="checkbox" 
           name='status'
           value={status}
           onChange={onChange}
           checked={status}

          />
           Còn hàng
        </label>
      </div>
      
       <button type="submit" className="btn btn-primary">Submit</button>
</form>

   </div>
   
  );
}

export default ProductActionPage;