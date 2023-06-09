$(window).on('load', function() {
  $('.message').children('p').text('ITS-I').delay(600).fadeOut(300, function() {
    $(this).text('이미지에서 텍스트로').show().delay(500).fadeOut(300, function() {
      $(this).text('텍스트에서 사운드로').show().delay(500).fadeOut(300, function() {
  	    $(this).text('사운드에서 이미지로').show().delay(500).fadeOut(300, function() {
            $(this).text('감각 언어로 번역하기').show().delay(1000).fadeOut(600, function() {
          		$(this).parent().fadeOut(800, function() {
            	   	setTimeout(function() {
              			 $('.button').removeAttr('disabled');
           			  }, 800);
              });
            });
          });
        });
      });
    });
});

const el = document.getElementById('folder');

setTimeout(function() {
  el.style.visibility = 'visible';
}, 3800);