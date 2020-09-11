/**
 * 触发视图更新
 */
function updateView() {
  console.log('视图更新');
}

/**
 * 重新定义
 *
 * @param {*} target 
 * @param {*} key 
 * @param {*} value 
 */
function defineReactive(target, key, value) {
  observer(value);

  // 核心 API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        // 继续对新值进行深度监听
        observer(newVal);

        // 设置新值
        // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是
        value = newVal;

        // 触发视图更新
        updateView();
      }
    }
  })
}

/**
 * 监听对象属性
 *
 * @param {*} target 
 */
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target;
  }

  // 重新定义各个属性（for in 也可以遍历数组）
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      defineReactive(target, key, target[key]);      
    }
  }
}

const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: 'nanjing' // 需要深度监听
  },
  // nums: [10, 20, 30]
};

// 监听数据
observer(data);

// 测试
data.name = 'lisi';
data.age = { num: 21 };
data.age.num = 22;
data.x = '100'; // 新增属性，监听不到——所以有 Vue.set
// delete data.name; // 删除属性，监听不到——所以已 Vue.delete
data.info.address = 'china'; // 深度监听
// data.nums.push(40); // 监听数组