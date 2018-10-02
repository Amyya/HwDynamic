$(document).ready(function(){

  $('div.detail-block p:nth-child(4)').hide();

	$('div.intro-block').delay(1000).animate({
    'margin-top': '-275px',},500
  );

  $('div.picture-block').delay(1000).animate({
    'margin-top': '-275px',},500
  );

  $('div.picture-block a:first-child').delay(1500).animate({
    'margin-left': '-475px',},500
  );

  $('div.picture-block a:nth-child(2)').delay(1500).animate({
    'margin-left': '-475px',},500
  );

  $('div.picture-block a:nth-child(3)').delay(1500).animate({
    'margin-left': '-475px',},500
  );

  $('div.picture-block a:first-child').delay(1000).animate({
    'margin-left': '0px',},500
  );

  $('div.picture-block a:nth-child(2)').delay(1000).animate({
    'margin-left': '0px',},500
  );

  $('div.picture-block a:nth-child(3)').delay(1000).animate({
    'margin-left': '0px',},500
  );

  $('div.picture-block').delay(3500).animate({
    'margin-top': '-950px',},500
  );

  $('div.detail-block').delay(5000).animate(
    {'margin-top': '50px',},500
  );

  $('div.detail-block p:nth-child(2)').delay(5500).queue(function(next){
		$(this).css('color','rgb(225,225,225)');
		next();
	});

	$('div.Landform-block a:nth-child(3)').delay(5500).animate({
    'margin-left': '625px',},1000
  );

  $('.counter1').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).delay(5500).animate({
        countNum: countTo
      },
      {

        duration: 1000,
        easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });
  $('.counter2').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).delay(5500).animate({
        countNum: countTo
      },
      {

        duration: 1000,
        easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });
  $('.counter3').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).delay(5500).animate({
        countNum: countTo
      },
      {

        duration: 500,
        easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

  $('div.detail-block p:nth-child(5)').click(function(){
    $('div.detail-block p:nth-child(4)').show();
    $('div.detail-block p:nth-child(5)').hide();
  });


});
