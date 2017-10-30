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
    //计算权重
    function w(op) {
        if(op == '+' || op == '-') {
            return 1;
        }
        if(op == '*' || op == '/') {
            return 2;
        }
    }

    var expr = getExpression(str);
    console.log(expr);
    var rpnExpr = [];       //逆波兰式表达式
    var operStack = [];     //运算符栈

    for(var i = 0; i < expr.length; i++) {
        console.log("i:" + i + " " + expr[i]);
        //如果是数据,进结果栈
        if(isOper(expr[i]) == DAT) {
            rpnExpr.push(expr[i]);
        }
        //如果是左括号，进运算符栈
        if(expr[i] == '(') {
            operStack.push(expr[i]);
        }
        //如果是右括号，依次出栈顶元素，直到遇到左括号
        if(expr[i] == ')') {
            while(operStack.length > 0) {
                if(operStack[operStack.length - 1] == '(') {
                    operStack.pop(); //左括号出栈
                    break;
                } else {
                    rpnExpr.push(operStack.pop());
                }
            }
        }
        //如果是运算符，比较当前元素和运算符栈顶元素的权重
        if(isOper(expr[i]) == OPE) {
            while(operStack.length > 0) {
                if(operStack[operStack.length - 1] == '(' || w(expr[i]) > w(operStack[operStack.length - 1])) {
                    operStack.push(expr[i]);
                    break;
                }
                else if(w(expr[i]) <= w(operStack[operStack.length - 1])) {
                    rpnExpr.push(operStack.pop());
                }
            }
            if(operStack.length === 0) {
                operStack.push(expr[i]);
            }
        }
    }
    while(operStack.length > 0) {
        rpnExpr.push(operStack.pop());
    }
    return rpnExpr;
}
console.log(reversePolishNotation('12+sd+cd*s-(s+w)'));
