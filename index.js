

const button = document.querySelector('.toggle-menu')
const ul_link = document.querySelector('.ul-link')
const link = document.querySelectorAll('.link-nav')

button.addEventListener('click',
function(){
    ul_link.classList.toggle('show')
},false)


for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
      ul_link.classList.remove('show');
    }, false);
  }
