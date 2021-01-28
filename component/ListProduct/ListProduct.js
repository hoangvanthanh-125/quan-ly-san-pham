import React from 'react';
import { Link } from 'react-router-dom';

function ListProduct(props) {
  return (
    
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      
      <Link to='/products/add' className="btn btn-primary">Thêm sản phẩm</Link>
      
      
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">Danh sác sản phẩm</h3>
      </div>
      <div className="panel-body">
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Tên Sản phẩm</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
        
       </div>
     </div>

      
    </div>
    
  );
}

export default ListProduct;