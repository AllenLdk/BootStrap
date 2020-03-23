/**
 * Created by Administrator on 2018/4/22.
 */
function over(){
    var div = document.getElementById('like');//获取大div对象
    var text = document.getElementById('Asia');//获取文字div对象
    text.style.display="block";
}//鼠标进入显示文字
function out(){
    var div = document.getElementById('warp');
    var text = document.getElementById('Asia');
    text.style.display="none";
}//鼠标退出不显示文字