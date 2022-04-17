// 该文件为可选项
// 会集成在Java编译后的类的底部

setTimeout(function() {
    //下面调用仅在@JsType的类中生效
    console.log(new MathUtil().sum(1, 2));
    console.log(MathUtil.static_sum(2, 3));

    //未申明@JsType的调用
    // console.log(MathUtil.$create__().m_sum__int__int(2,3))
    // console.log(MathUtil.m_static_sum__int__int(3,5))

}, 0);