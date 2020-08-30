# 编程与算法练习

## 本周学习章节
* TicTacToe 实现一个TicTacToe游戏
* TicTacToe|给游戏添加一个完美的AI

## 章节内容

#### TicTacToe 实现一个TicTacToe游戏

[代码地址](./code/TicTacToe/index1.html)

#### TicTacToe|给游戏添加一个完美的AI

[代码地址](./code/TicTacToe/index2.html)

疑惑点
```JavaScript
function clone(pattern) {
    return JSON.parse(JSON.stringify(pattern));
    //return Object.create(pattern);
}
```
Object.create创建的对象比JSON.parse创建的对象性能好吗
