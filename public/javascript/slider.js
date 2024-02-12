var slider = document.getElementById('slider');
var sliderItem = slider.getElementsByTagName('aside');
var dots = document.getElementById('dots');
var dotsChild = document.getElementById('dots').getElementsByTagName('li');
var currentIndex = 0; // Track the current slide index

for (var i = 0; i < sliderItem.length; i++) {
  dots.appendChild(document.createElement('li'));
  dotsChild[i].classList.add('list-inline-item');
  dotsChild[i].setAttribute("id", i);
  dotsChild[i].innerHTML = i;
  dotsChild[0].classList.add('active');
  dotsChild[i].addEventListener("click", runSlider);
}

function runSlider() {
  var dnum = this.getAttribute("id");
  for (var i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.remove('active');
      sliderItem[dnum].classList.add('active');
      dotsChild[i].classList.remove('active');
      dotsChild[dnum].classList.add('active');
  }
}

// Function to show a specific slide
function showSlide(index) {
    for (var i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
        dotsChild[i].classList.remove('active');
    }
    sliderItem[index].classList.add('active');
    dotsChild[index].classList.add('active');
}

// Function to handle slider autoplay
function autoplaySlider() {
    currentIndex++;
    if (currentIndex === sliderItem.length) {
        currentIndex = 0; // Reset index if at the end
    }
    showSlide(currentIndex);
}

// Set initial active states
dotsChild[0].classList.add('active');
sliderItem[0].classList.add('active');

// Add event listeners to dots
for (var i = 0; i < dotsChild.length; i++) {
    dotsChild[i].addEventListener("click", function() {
        var dnum = parseInt(this.getAttribute("id"));
        showSlide(dnum);
        currentIndex = dnum;
    });
}

// Autoplay slider every 3 seconds (adjust as needed)
var autoplayInterval = setInterval(autoplaySlider, 10000);

