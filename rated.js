var starBtn1 = document.getElementById('star1');
var starBtn2 = document.getElementById('star2');
var starBtn3 = document.getElementById('star3');
var starBtn4 = document.getElementById('star4');
var starBtn5 = document.getElementById('star5');

var rankStar = 0;

starBtn1.onclick = function(){
        starBtn1.setAttribute("src", "assets/image/starFull.png");
        starBtn2.setAttribute("src", "assets/image/star.png");
        starBtn3.setAttribute("src", "assets/image/star.png");
        starBtn4.setAttribute("src", "assets/image/star.png");
        starBtn5.setAttribute("src", "assets/image/star.png");
        rankStar = 1;
};

starBtn2.onclick = function(){
        starBtn1.setAttribute("src", "assets/image/starFull.png");
        starBtn2.setAttribute("src", "assets/image/starFull.png");
        starBtn3.setAttribute("src", "assets/image/star.png");
        starBtn4.setAttribute("src", "assets/image/star.png");
        starBtn5.setAttribute("src", "assets/image/star.png");
        rankStar = 2;
};


starBtn3.onclick = function(){
    starBtn1.setAttribute("src", "assets/image/starFull.png");
    starBtn2.setAttribute("src", "assets/image/starFull.png");
    starBtn3.setAttribute("src", "assets/image/starFull.png");
    starBtn4.setAttribute("src", "assets/image/star.png");
    starBtn5.setAttribute("src", "assets/image/star.png");
    rankStar = 3;
};


starBtn4.onclick = function(){
    starBtn1.setAttribute("src", "assets/image/starFull.png");
    starBtn2.setAttribute("src", "assets/image/starFull.png");
    starBtn3.setAttribute("src", "assets/image/starFull.png");
    starBtn4.setAttribute("src", "assets/image/starFull.png");
    starBtn5.setAttribute("src", "assets/image/star.png");
    rankStar = 4;
};


starBtn5.onclick = function(){
    starBtn1.setAttribute("src", "assets/image/starFull.png");
    starBtn2.setAttribute("src", "assets/image/starFull.png");
    starBtn3.setAttribute("src", "assets/image/starFull.png");
    starBtn4.setAttribute("src", "assets/image/starFull.png");
    starBtn5.setAttribute("src", "assets/image/starFull.png");
    rankStar = 5;
};
