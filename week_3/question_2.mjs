/*
* 难度: 中等
* 根据某个规则过滤此树.
* 1. 遍历整颗tree
* 2. 如果某个node 的 value < 600, 为他的子节点新增2个节点, 使用 nodeClient中的nextNode方法
* 3. 如果某个node 的 value >= 600, 并且 <= 4000, 为他的子节点新增3个节点, 使用 nodeClient中的nextNode方法
* 4. 如果某个node 的 value > 4000, 为他的子节点新增4个节点, 使用 nodeClient中的nextNode方法
*
* 提示:
* 1. name2code 方法是异步的
* */
import { treeDatas } from '../data/tree.mjs';

async function transformTree() {

}

