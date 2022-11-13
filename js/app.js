// Hero animation
window.onscroll = function () {
  scrollRotate()
}

function scrollRotate() {
  let image = document.getElementById('blob')
  image.style.transform = 'rotate(' + window.pageYOffset / 2 + 'deg)'
}

// Animate on scroll

function revealLeft() {
  var reveals = document.querySelectorAll('.slide-left')
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

function revealRight() {
  var reveals = document.querySelectorAll('.slide-right')
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', revealLeft)
window.addEventListener('scroll', revealRight)
