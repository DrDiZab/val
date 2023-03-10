 /* Шребаный грифт */
let font = new FontFace('Marck Script', 'url(https://fonts.gstatic.com/s/marckscript/v16/nwpTtK2oNgBA3Or78gapdwuyzCg_WMM.woff2)');
font.load().then(() => {
    document.fonts.add(font);

let canvas = document.getElementById('heart');
let ctx = canvas.getContext('2d');
ctx.font = '20px Marck Script';


/* Letter */

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300, 150);
ctx.lineTo(600,0);
ctx.closePath();
ctx.stroke();
ctx.font = '35px Marck Script';
ctx.fillText('Нажми на сердечко', 160, 280);

/* Heart */
let heart = {
color: 'rgb(222,51,51)',
draw: function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(300,130);
    ctx.quadraticCurveTo(265, 105 , 250 , 130);
    ctx.quadraticCurveTo(240, 155 , 300 , 190);
    ctx.quadraticCurveTo(360, 155 , 350 , 130);
    ctx.quadraticCurveTo(335, 105 , 300 , 130);
    ctx.fill();
} }


heart.draw();
function text() {
    ctx.fillStyle = 'black';
    ctx.font = '35px Marck Script';
    ctx.fillText('Моя валентинка для тебя', 100, 30);
    ctx.font = '20px Marck Script';
    ctx.fillText('В этот день я хочу сказать', 15,110);
    ctx.fillText('Что я не забыл про тебя.', 15, 140);
    ctx.fillText('Хочу пригласить тебя погулять.', 15,170);
    ctx.fillText('Напиши мне, если ты не против', 30, 280);
}
function girl() {
    let girl = new Image();
    girl.onload = function() {
        ctx.drawImage(girl, 355, 70, 245,230);
    }
    girl.src = 'girl.png';
    
}
function pismo() {
    
   
    text();
    girl();
    
}


canvas.addEventListener('click', function(e) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    //console.log(rect.left, rect.top, rect);
    let heartWidth = 75;
    let heartHeight = 85;
    let heartX = 265;
    let heartY = 105;
    if (mouseX >= heartX && mouseX <= heartX + heartWidth &&
        mouseY >= heartY && mouseY <= heartY + heartHeight) {
      // The heart was clicked
      ctx.clearRect(0,0,canvas.width, canvas.height);
      pismo();
    }
})


  
});
