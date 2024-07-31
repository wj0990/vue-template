import request from '@/utils/request';

export function getAdvertisementList(params){
  return request({
    url:'/api/query/advertisement/list',
    mathod:'post',
    data: params,
  })
}
// 地区
export function getAreaList(params){
  return request({
    url:'/api/query/area/list',
    mathod:'post',  
    data: params,
  })
}
// 行业
export function getIndustry(params){
  return request({
    url:'/api/query/industry/list',
    mathod:'post',
    data: params,
  })
}
// 产品列表
export function getProductSelectPage(params){
  return request({
    url:'/api/query/product/selectPage',
    mathod:'post',
    data: params,
  })
}



