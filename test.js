var myPara = document.getElementById("content").getElementsByTagName("p")[5];

var myPara2=$("#content p:last-child");


myPara2.addClass("test");
//remove.Class

myPara2.fadeOut();

//fadeIn

myPara2.css({position: "relative", color: "red"})

myPara2.animate({left: "50px"});
