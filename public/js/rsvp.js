function rsvp() {
  $.ajax({
    url: window.location.pathname,
    type: 'POST',
    success: () => { _handleSuccess() },
    error: () => { _handleFailure() },
  });
  $.('.rsvp-info').css({'text-align':'left'});
}

function _handleSuccess() {
  $('#resp-msg').html('<h1>RSVP SUCCESSFUL!</h1>');
}

function _handleFailure() {
  $('#resp-msg').html('<p>RSVP failed. Please email info@vandyhacks.org</p>');
}
