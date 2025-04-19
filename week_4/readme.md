week_1 主要是同步的对数组进行数据处理
week_2 主要是同步的对tree进行数据处理
week_3 在前两周的基础上加上了异步处理
week_4 以真实场景的需求进行练习

qa.json
是一个后端返回的真实数据, 描述了一颗问答树, 这棵树遵循以下规范
1. 单数层 是 问题, 会拥有 choice属性
2. 双数层 是 选项  会用用 questions 属性
3. question 节点, type属性有 radio 和 checkbox, radio 是单选,  checkbox 是多选

比如:
quesiton
    choice
        question
            choice
            choice
        question
            choice
            choice
        question
            choice
            choice
                question
                    choice
            choice
            choice
    choice
        question
            choice
            choice
        question
            choice
            choice
quesiton
    choice
        question    
            choice
