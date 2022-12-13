//progress bar
let section=document.querySelector('.about');
let divs=document.querySelectorAll('.about .skills .progress div');

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        divs.forEach((div) => {
        div.style.width = div.dataset.width;
      });
    }
  };



//counter 
let nums = document.querySelectorAll(".count");
let sectionOffset = $('#about').offset().top;
let started = false; 
let headingOffset=$('.home-caption ').offset().top;
let aboutOffset=$('#about ').offset().top;
$(window).scroll(()=> { 
    if($(window).scrollTop() >= sectionOffset){
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    if($(window).scrollTop() >= headingOffset){
        $('.navbar ').css({'backgroundColor' : '#212529',"opacity":'1', 'transition':'1s'});
    }
    else{
        $('.navbar').css({'backgroundColor':'transparent'});
    }
    //back to top button
    if($(window).scrollTop() >= aboutOffset){
        $('#backTop').fadeIn(1000);
    }
    else{
        $('#backTop').fadeOut(1000);
    }
});
function startCount(el) {
    let goal = el.dataset.goal;
    let countNum = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        clearInterval(countNum);
    }
}, 5000/goal);
}
//back to top func
$('#backTop').click(function () { 
    $('html,body').delay(0).animate({scrollTop:0},1000) 
}); 
