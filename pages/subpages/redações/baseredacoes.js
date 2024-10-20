function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }
  
  var bannerTimer = setInterval(bannerSwitcher, 5000);
  
  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll("#textAnimation p");
  
    paragraphs.forEach(function(paragraph, index) {
      setTimeout(function() {
        paragraph.style.opacity = 1;
      }, index * 5000); 
    });
  });