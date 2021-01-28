import axios from 'axios';
import React from 'react';
import  * as config from './../connstant/config'

export default function calApi(endpoint,method='GET',body){
return axios({
  method:method,
  url:`${config.API_URL}/${endpoint}`,
  data:body
}).catch(err=>{console.log(err)});

}