import  axios from 'axios';
import { ElMessage } from 'element-plus';

let request = axios.create({
  baseURL: process.env.NODE_ENV ==='development' ? '' :'',
  timeout:20000, // 超时请求
});
/**
 * 请求拦截
 */
request?.intercepotors?.request?.use((config)=>{
  return config;
},(err)=>{
  return Promise.reject(err)}
)
/**
 * 响应拦截
 */
request?.intercepotors?.response?.use((response)=>{
  console.log('---responseresponseresponse---0000000---->')
  const data = response.data || {};
  if(data?.code ===1){

  }

  return Promise.resolve(data);
},(err)=>{
  if(error.code === 'ECONNABORTED'){
    ElMessage.error('接口超时响应超时')
  }
  if(error.response.status ===401){
    ElMessage.error('登陆失效');
  }else{
    ElMessage.error(error.message || error.response.message || '请求失败')
  }
  return Promise.reject(err);
})

export default request;