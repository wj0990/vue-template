import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock ([
  {
    url:'/api/query/advertisement/list',
    body:{ 
      code: 1,
      dataList:[
        {url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg', title: '标题1' },
        {url:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', title: '标题1' },
        {url:'https://up.zhuoku.org/pic_source/1c/b1/5b/1cb15b8b8df2072015c92d0130f3a236.jpg', title: '标题1' },
        {url:'https://up.zhuoku.org/pic_source/cd/2b/3f/cd2b3f73d6d4115cfb9f34b4804778c8.jpg', title: '标题1' },
      ]
    },
  },
  {
    url:'/api/query/area/list',
    body:{ 
      code: 1,
      dataList:[
        { label: '北京', value:10001001 },
        { label: '上海', value:10001002 },
        { label: '广州', value:10001003 },
        { label: '深圳', value:10001004 },
        { label: '大连', value:10001005 },
        { label: '湖南', value:10001006 },
        { label: '福建', value:10001008 },
        { label: '武汉', value:10001009 },
        { label: '南昌', value:10001023 },
        { label: '山东', value:10001024 },
        { label: '青岛', value:10001025 },
        { label: '广西', value:10001026 },
        { label: '哈尔滨', value:1000134 },
        { label: '鄂尔多斯', value:1000135 },
        { label: '鄂尔多斯', value:1000136 },
        { label: '鄂尔多斯', value:1000137 },
        { label: '鄂尔多斯', value:1000139 },
        { label: '鄂尔多斯', value:1000140 },

      ]
    },
  },
  {
    url:'/api/query/industry/list',
    body:{ 
      code: 1,
      dataList:[
        { label: '汽车', value:10001001 },
        { label: '机修', value:10001002 },
        { label: '保洁', value:10001003 },
        { label: '印刷', value:10001004 },
        { label: '少儿教育', value:10001005 },
        { label: '体育', value:10001006 },
        { label: '摄影', value:10001008 },
        { label: '娱乐', value:10001009 },
    
      ]
    },
  },
  {
    url:'/api/query/product/selectPage',
    body:{ 
      code: 1,
      rows:[
        { id:12, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720'},
        { id:13, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720'},
        { id:14, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',count:121212 ,name:'测试名称',region:'描述233223',url:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720'},
        { id:15, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720'},
        { id:16, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:17, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:18, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:19, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:20, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:21, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:22, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:23, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:24, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:25, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},
        { id:26, title: '测试标题',productPath:'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720', count:121212 ,name:'测试名称',region:'描述233223',url:'https://up.zhuoku.org/pic_source/03/ee/82/03ee827d07badc0cf73019c38dd56619.jpg'},

      ],
      total:5,
      page:1, 
      pageSize:10
    },
  },
]);