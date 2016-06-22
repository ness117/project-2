$(document).ready(function() {

  // Show title of country when images are clicked
  var $clickCan = $('#can');
  var $showCan = $('#can-name');

  $clickCan.on('click', function() {
    $showCan.toggle(500, function(){
    });

  });

  var $clickHk = $('#hk');
  var $showHk = $('#hk-name');

  $clickHk.on('click', function() {
    $showHk.toggle(500, function(){
    });

  });

  var $clickUs = $('#us');
  var $showUs = $('#us-name');

  $clickUs.on('click', function() {
    $showUs.toggle(500, function(){
    });

  });

  var $clickDr = $('#dr');
  var $showDr = $('#dr-name');

  $clickDr.on('click', function() {
    $showDr.toggle(500, function(){
    });

  });

  var $clickMac = $('#macau');
  var $showMac = $('#mac-name');

  $clickMac.on('click', function() {
    $showMac.toggle(500, function(){
    });

  });


  var $form = $('#contact-form');
  var $sendButton = $('#send-button');
  var $thankYouMessage = $('#thank-you');

  $sendButton.on('click', function() {
    // Prevent page from refreshing when user clicks "Send" button
    event.preventDefault();

    // Show Thank You message after user hits send
    $thankYouMessage.removeClass('hide-ty');

  });

});
