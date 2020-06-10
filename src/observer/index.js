import {isObject} from '../utils';

class Observer{
    constructor(data){
        this.walk(data)
    }
    walk(data){
        //对象的循环Object.keys().forEach for in 有原型
        Object.keys(data).forEach(key => {
            defineReactive(data,key,data[key]);
        })
    }
}
//vue2 性能 递归 重写get 和 set vue3 proxy
function defineReactive(data,key,value){
    observe(value)
    Object.defineProperty(data,key,{
        get(){
            return value;
        },
        set(newValue){
            if(newValue === value) return;
            observe(newValue)
            value = newValue;
        }
    })
}

export function observe(data){
    //对象就是使用Object.defineProperty来实现响应式原理

    //判断是不是对象，如果是null那就不用监控了
    if (!isObject(data)) {
        return;
    }
    //对数据进行defineProperty
    // 判断是否被观测过通过实例
    return new Observer(data)//可以看到当前数据是否被观测过

}