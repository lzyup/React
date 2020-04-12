### 关键点
使用`redux-thunk`中间件，改造了`store.dispatch`,使得后者可以接受的`action`可以是个函数

### 具体实现
写出一个返回函数的 Action Creator,然后使用`redux-thunk`中间件改造`store.dispatch`