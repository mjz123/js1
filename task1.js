/**
 * Created by hasee on 2017/8/21.
 */

var x = document.querySelectorAll(".sq");

function color() {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+r+","+g+","+b+")";
}
function clear() {
    for(var i=0; i<9 ;i++){
        x[i].style.backgroundColor="orange";
    }
}
function cal() {
    //清除之前的颜色
    clear();

    //随机三个颜色值
    var original = new Array();
    for (var i=0; i<9; i++){
        original[i] = i ;
    }
    for (i=0; i<3; i++) {
        do{
            var num=Math.floor(Math.random() * 9);
        } while(original[num]==null);
        x[num].style.backgroundColor=color();
        original[num] = null;
    }
}

var t1 = new Object();
var a = document.getElementById("btn1");
var b = document.getElementById("btn2");
a.onclick = function(){
    cal();
    t1=setInterval("cal()",1000);
    a.disabled=true;
}
b.onclick = function(){
    clearInterval(t1);
    clear();
    a.disabled=false;
}

