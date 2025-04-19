/*
* 难度: 简单
* graph模拟数据中, 有各种nodes. x, y 代表node坐标
* 1. 设计transGraph对nodes, 和lines进行处理
* 2. 截取出前45个节点.
* 2. 按x坐标从小到大排序
* 3. 对node信息进行补充,添加color属性. color从给点的数组里依次选取,选完又从头选
* 4. 返回的lines里不能包含不存在的nodes
* */
import {nodes} from '../data/graph.mjs';

/* 排序规则,里面是category的值 */
const rules = [7, 8, 3, 2, 4, 1, 0];

const colors = [
    '#523BE4',
    '#4A35CD',
    '#422FB6',
    '#3929A0',
    '#312389',
    '#291E72',
    '#21185B',
    '#191244',
    '#100C2E',
    '#080617',
    '#000000',
]

function transformGraph() {
    return {
        nodes: [],
        lines: [],
    };
}
