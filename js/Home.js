window.addEventListener('scroll', onScroll);

var scrollY = 0;
function onScroll(){
  const DOM = document.getElementById('menubar');
  var doc = document.documentElement;
    if(doc.scrollTop !== scrollY) {
    scrollY = doc.scrollTop;
    console.log('Y scrolled!', doc.scrollTop);
    }
    if (doc.scrollTop > 210) {
      DOM.classList.add('sticky');
     document.getElementById("logo").style.padding = "40px 0 0 100px";
     document.querySelector('.fa-search').style.padding = "40px 100px 0 0";
    } else {
      DOM.classList.remove('sticky')
      document.getElementById("logo").style.padding = "40px 0 0 0";
      document.querySelector('.fa-search').style.padding = "40px 0 0 0";
    
    }

    }

