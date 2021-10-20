window.onscroll = function(){
    myfunction();
}

var wrap = document.getElementById("cartwrap")

var fixcategory = wrap.offsetTop

function myfunction(){
    if (window.pageYOffset > fixcategory){
        wrap.classList.add("fixcategory")
    }else{
        wrap.classList.remove("fixcategory")
    }
}