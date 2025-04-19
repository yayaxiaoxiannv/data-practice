/*
* 难度: 简单
* graph模拟数据中, 有各种nodes. x, y 代表node坐标
* 将nodejs和lines进行整合.返回结果格式如下.
 edges: {
   source: {
        "id": "0",
        "name": "Myriel",
        "symbolSize": 19.12381,
        "x": -266.82776,
        "y": 299.6904,
        "value": 28.685715,
        "category": 0
    },
    target: {
        "id": "3",
        "name": "MmeMagloire",
        "symbolSize": 6.323809333333333,
        "x": -242.82404,
        "y": 235.26283,
        "value": 9.485714,
        "category": 1
   }
}
*
* */
import {nodes} from '../data/graph.mjs';

function transformGraph() {
    return {
        edges: [],
    };
}
