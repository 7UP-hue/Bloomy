$(function(){
  /**
   * 首页点击向下箭头页面滚动
   */
  $('.scroll-down').on('click', function(){
    $('html,body').animate({'scrollTop':$(window).height()-40},0)
  })
  /**
   * 点击回到顶部
   */
  $('.scroll-top').on('click', function(){
    var currentPath = window.location.pathname
    if(currentPath === '/7UP-hue/' || currentPath === '/') {
      $('html,body').animate({'scrollTop':$(window).height()-80},0)
    }
    else {
      $('html,body').animate({'scrollTop':0},0)
    }
  })
  /**
   * 点击显示菜单
   */
  $('.menu-more').on('click', function() {
    if($('.navbar').hasClass('navbar-show')) {
      $('.navbar').removeClass('navbar-show')
      $('.navbar').addClass('navbar-hide')
    } else {
      $('.navbar').removeClass('navbar-hide')
      $('.navbar').addClass('navbar-show')
    }
  })
  /**
   * 监听页面滚动
   */
  const hrefItems = document.querySelectorAll('a.headerlink')
  const tocItems = document.querySelectorAll('.toc-item')
  $(window).scroll(function(event){
    var currentPath = window.location.pathname
    var pos = $(window).scrollTop()
    if(currentPath === '/7UP-hue/' || currentPath === '/') {
        if(pos >= $(window).height()-80) {
        $('.scroll-top').show()
        $('.header').addClass('header-last')
        $('.header').removeClass('header-hide')
      } else {
        $('.scroll-top').hide()
        if($('.header').hasClass('header-last')) {
          $('.header').addClass('header-hide')
        }
        $('.header').removeClass('header-last')
        $('.navbar').removeClass('navbar-show')
      }
    } 
    else {
      $('.scroll-top').show()
      $('.header').addClass('header-last')
    }
    setTocPosition()
  })
  function setTocPosition() {
    var top = $(document).scrollTop()
    hrefItems.forEach((ele, index) => {
      if(ele.offsetTop - top <= 4) {
        tocItems.forEach((eleItem) => {
          if(eleItem.className.includes(' toc-li-active')) {
            eleItem.className = eleItem.className.replace(' toc-li-active', '')
          }
        })
        tocItems[index].className = tocItems[index].className + ' ' + 'toc-li-active'
      }
    })
  }
})