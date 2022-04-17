goog.module('cn.app');
let MathUtil = goog.require('cn.util.MathUtil');
console.log(new MathUtil().sum(2, 3));
console.log(MathUtil.static_sum(5, 6));
goog.exportSymbol('MathUtil', MathUtil);
// 导出之后可以在外部调用,比如在控制台
// console.log(new MathUtil().sum(2, 3));
// console.log(MathUtil.static_sum(5, 6));