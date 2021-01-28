import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
// function MenuLink({ label, to, activeOnlyWhenExact }) {
//   return (
//     <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
//       var active=match?'active-header':"";
//       return (
//         <li className={active}>
//         <Link to={to}>{label}</Link>
//       </li>
//       )
//     }} />
   
//   );
// }

const showMenu=(menu)=>{
  var result=null;
  if(menu.length > 0){
   result= menu.map((item,index)=>{
      return <li key={index}><NavLink   to={item.url1} exact={item.exact} >{item.label}</NavLink></li>
    })
  }
  return result;
}
const Menu=[
  {
    label:'Trang chủ',
    url1:'/',
    exact:true

  },
  {
    label:'Sản Phẩm',
    url1:'/products',
    exact:false

  }
]

function Header(props) {
  return (
    <div>
      
      <div className="navbar navbar-default">
 
  <ul className="nav navbar-nav">
        {showMenu(Menu)}
  </ul>
</div>

      
    </div>
  );
}

export default Header;