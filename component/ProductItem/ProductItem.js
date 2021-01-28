import React from 'react';
import { Link } from 'react-router-dom';


function ProductItem(props) {
  const {product,index,onDelete}=props;
  var status=product.status?"Còn hàng":'Hết hàng'
  var statusColor=product.status?'success':'danger';
   function Delete(id){
   //console.log(id);
    if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không')){ //eslint-disabled-line
    onDelete(id);
  }
}
  return (
    <tr>
      <td>{index+1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        
        <span className={`label label-${statusColor}`}>{status}</span>
        
      </td>
      <td>
        
        <Link 
         to={`products/${product.id}/edit`}
         className="btn btn-success"
         
        >Sửa</Link>
        <button onClick={()=>Delete(product.id)} type="button" className="btn btn-danger">Xóa</button>
        
      </td>
    </tr>
  );
}

export default ProductItem;