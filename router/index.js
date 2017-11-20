var path = require('path')
var router = require('express').Router();
var env = require('../config')

router.get('/env', (req, res) => {
    res.json(env)
})

router.get('/cards/list', (req, res) => {
    res.json({
        code: 0,
        list: [{   
            index: '1',
            title: '业务监控',
            description: '从客户、产品、数据源接口等维度对查询量、耗时及成功率等指标进行多样化的图形化展示',
            imgurl: '../../assets/img/html.png',
            state: 'inactive',
            link: 'http://192.168.30.81:3000'
        },
        {   
            index: '2',
            title: '高可用监控',
            description: '对高可用AB集群中的Hadoop重要组件进行监控，展现Redis，kafka、hbase等组件的数据同步状态',
            imgurl: '../../assets/img/lifebuoy.png',
            state: 'inactive',
            link: 'http://192.168.30.81:8080/MonitorPlatform_Portal/test.html'
        },
        {
            index: '3',
            title: '离线分析',
            description: '敬请期待...',
            imgurl: '../../assets/img/adaptive_design.png',
            state: 'inactive',      
            link: ''
        }]
    })
})


module.exports = router