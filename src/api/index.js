// 该模块用于对API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

// 获取banner接口
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取搜索模块接口
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})
