import {asyncFunc} from '../utils.mjs';
import _ from 'lodash';


export async function nextNode(obj) {
    return asyncFunc({name: obj.name + '_', value: obj.value * 2});
}

export async function getColor(obj) {
    return asyncFunc({name: obj.name + '_', value: obj.value * 2});
}

export async function name2code(...names) {
    return asyncFunc(_.map(names, btoa));
}
