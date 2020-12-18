/* image sliding*/
// Javascript for image slider manual navigation
var slide = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let slideNumber = 1;
function manually(manual) {
    slide.forEach((cur1) => {
        cur1.classList.remove('active');
    });
    btns.forEach((cur2) => {
        cur2.classList.remove('active');
    });
    slide[manual].classList.add('active');
    btns[manual].classList.add('active');
} 

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manually(i);
        slideNumber = i;
    })
});
//javascript for slider autoplay
function repeat(){
    let active = document.getElementsByClassName('active');
    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

      slide[slideNumber].classList.add('active');
      btns[slideNumber].classList.add('active');
      slideNumber++;

      if(slide.length <=slideNumber){
        slideNumber = 0;
      }
      
      repeater();
    }, 5000);
    }
    repeater();
  }
repeat();
  
// ////////////////////////////////////////////////
/////popup window//////

var popup = document.querySelector('.popup');
var videoPlayer = document.querySelector(".video-item");
var videoContainer = document.querySelectorAll('.video-logo');
var watch = document.querySelectorAll('.watch');
var next = document.querySelector(".next");
var back = document.querySelector(".previous")
var close = document.querySelector(".close");
var i = 0;
function popupShow(source) {
  popup.style.display = "block";
  videoPlayer.setAttribute('src', source);
}

videoContainer.forEach((cur,index) => {
  cur.addEventListener("click", () => {
    console.log(index);
    popupShow(cur.dataset.src);
    i = index;
    console.log(index);
  })
})
close.addEventListener('click', () => {
  videoPlayer.setAttribute("src", "");
  popup.style.display = "none";
})
watch.forEach((cur,index) => {
  cur.addEventListener('click', (event) => {
    console.log(index);
    popupShow(cur.dataset.src);
    i = index + 1;
    console.log(i);
  });
})
next.addEventListener('click', () => {
  if (i == videoContainer.length - 1) {
    i = 0;
  }
  else {
    i++;
  }
  popupShow(videoContainer[i].dataset.src);
})
back.addEventListener('click', () => {
  if (i == 0) {
    i = videoContainer.length - 1;
  }
  else {
    i--;
  }
  popupShow(videoContainer[i].dataset.src);
})