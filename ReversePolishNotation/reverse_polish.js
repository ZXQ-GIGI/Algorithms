function reversePolishNotation(str) {
    const OPE = 'operator';
    const BRA = 'brackets';
    const DAT = 'data';
    //判断是否是运算符或括号
    function isOper(op) {
        if(op == '*' || op == '/' || op == '+' || op == '-') {
            return OPE;
        }
        if(op == '(' || op == ')') {
            return BRA;
        }
        return DAT;
    }
    //获得表达式数组，数据与运算符分离
    function getExpression(str) {
        var result = [];
        for(var i = 0; i < str.length; i++) {
            if(result[0] && isOper(result[result.length - 1]) == DAT && isOper(str[i]) == DAT) {
                result[result.length - 1] += str[i];
            } else {
                result.push(str[i]);
            }
        }
        return result;
    }

    function getWeight(op) {
        if(op == '+' || op == '-') {
            return 1;
        }
        if(op == '*' || op == '/') {
            return 2;
        }
    }

    var expr = getExpression(str);
    var rpnExpr = [];       //逆波兰式表达式
    var operStack = [];     //运算符栈

    for(var i = 0; i < expr.length; i++) {
        console.log("i:" + i);
        //如果是数据,进队列
        if(isOper(expr[i]) == DAT) {
            rpnExpr.push(expr[i]);
        }
        //如果是左括号，进栈
        if(expr[i] == '(') {
            operStack.push(expr[i]);
        }
        //如果是右括号，数据出队列
        if(expr[i] == ')') {
            while(operStack.length > 0 && [operStack.length - 1] != '(') {
                rpnExpr.push(operStack.pop());
            }
            operStack.pop(); //左括号出栈
        }
        if(isOper(expr[i]) == OPE) {
            if(operStack[operStack.length - 1] == '(') {
                operStack.push(expr[i]);
            } else {
                //如果运算符比栈顶元素优先级高或者栈为空，运算符进栈
                if(getWeight(expr[i]) > getWeight(operStack[operStack.length - 1]) || operStack.length == 0) {
                    operStack.push(expr[i]);
                }
                else {
                    while(dataQueue.length > 0 ) {
                        rpnExpr.push(dataQueue.shift());
                    }
                    while(operStack.length > 0 && operStack[operStack.length - 1] != '(' && getWeight(expr[i]) <= getWeight(operStack[operStack.length - 1])) {
                        rpnExpr.push(operStack.pop());
                    }
                    operStack.push(expr[i])
                }
            }
        }
        while(operStack.length > 0) {
            rpnExpr.push(operStack.pop());
        }
        console.log(dataQueue);
        console.log(operStack);
        console.log(rpnExpr);
    }
    return rpnExpr;
}
console.log(reversePolishNotation('12+sd+cd*s-(s+w)'));
