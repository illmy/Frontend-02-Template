# 学习笔记

## 本周学习章节
* 浏览器工作原理总结
* 状态机-有限状态机

## 章节内容

### 浏览器工作原理总结

流程  
```mermaid
graph LR
A(URL) -->|HTTP|B(HTML)
    B -->|parse| C(DOM)
    C -->|css computing| D(DOM with CSS)
    D -->|layout| E(DOM with position)
    E -->|render| F(Bitmap)
```

### 有限状态机

#### 概述
1. 每一个状态都是一个机器
   * 在每个机器里，我们可以做计算、存储、输出......
   * 所有的这些机器接受的输入是一致的
   * 状态机的每一个机器本身没有状态，如果我们用函数表示的话，他应该是一个纯函数（无副作用）
2. 每一个机器知道下一个状态
   * 每个机器都有确定的下一个状态（Moore）
   * 每一个机器根据输入决定下一个状态（Mealy）
  
#### JS中的有限状态机（Mealy）

```JavaScript
// 每一个函数是一个状态
function state(input) // 函数参数就是输入
{
    // 在函数中可以自由地编写代码，处理每一个状态的逻辑
    return next; // 返回值作为下一个状态
}

// 以下是调用
while(input) {
    // 获取输入
    state = state(input); // 把状态机的返回值作为下一个状态
}
```