import { nanoid } from 'nanoid';
import _ from 'lodash';

export function nextId(){
    return nanoid(10);
}

export function generateIds(num){
    return _.times(num, nextId);
}

export function asyncFunc(obj) {
    return new Promise((resolve) => {
        const time = Math.random() * 100
        setTimeout(() => {
            return resolve(obj)
        }, time)
    })
}
