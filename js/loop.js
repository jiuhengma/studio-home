var jsPart = document.getElementById("loopImg")
var jsPic = document.getElementById("pic")
var jsLeft = document.getElementById("left")
var jsRight = document.getElementById("right")
var jsLisArr = document.getElementsByClassName("list")
var jsBt = document.getElementsByClassName("btn")


//第一个li设置为红色
jsLisArr[0].style.backgroundColor = "palevioletred"


//启动一个定时器去更换jsPic中的src属性
var currentPage = 1
var timer = setInterval(startLoop,1500)
function startLoop(){
    currentPage++
    changePage()
}
function changePage(){
    if (currentPage == 3){
        currentPage = 1
    }else if (currentPage == 0){
        currentPage = 2
    }
    jsPic.src = "img/" + currentPage + ".jpg"

    //清空所有小圆点的颜色
    for (var i = 0; i < jsLisArr.length; i++){
        jsLisArr[i].style.backgroundColor = "#aaa"

    }
    jsLisArr[currentPage - 1].style.backgroundColor = "palevioletred"
}

//鼠标进入loopImg
jsPart.addEventListener("mouseover", overFunc, false)
function overFunc(){
    //停止定时器
    clearInterval(timer)
    //显示左右按钮
    jsLeft.style.display = "block"
    jsRight.style.display = "block"
}
//鼠标离开box
jsPart.addEventListener("mouseout", outFunc, false)
function outFunc(){
    //重启定时器
    timer = setInterval(startLoop,1500)
    //隐藏左右按钮
    jsLeft.style.display = "none"
    jsRight.style.display = "none"
}



//鼠标移动到左右按钮颜色加深
jsLeft.addEventListener("mouseover", deep, false)
jsRight.addEventListener("mouseover", deep, false)
function deep(){
    this.style.backgroundColor = "rgba(0,0,0,0.6)"
}
//鼠标移动到左右按钮颜色回原
jsLeft.addEventListener("mouseout", undertint, false)
jsRight.addEventListener("mouseout", undertint, false)
function undertint(){
    this.style.backgroundColor = "rgba(0,0,0,0.2)"
}

//鼠标点击左右按钮
jsRight.addEventListener("click", function(){
    currentPage++
    changePage()
}, false)
jsLeft.addEventListener("click", function(){
    currentPage--
    changePage()
}, false)

//鼠标进出小圆点
for (var i = 0; i < jsLisArr.length; i++){
    jsLisArr[i].index = i + 1
    jsLisArr[i].addEventListener("mouseover", function(){
        currentPage = parseInt(this.index)
        changePage()
    },false)
}



// //鼠标进入按钮
// jsBt.addEventListener("mouseover",changeColor,false)
// function changeColor(){
//     this.style.backgroundColor = "white"
//     this.style.color = "black"
// }
// //鼠标移出按钮
// jsBt.addEventListener("mouseout", function(){
//     this.style.backgroundColor = "rgb(128,128,128)"
//     this.style.color = "white"
// },false)



