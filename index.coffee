$ ->
  particle = $('<div>')
  $('.block').on 'click', (e) ->
    $('#ani').css({top: e.clientY + 'px', left: e.clientX + 'px'})
    for index in [1..20]
      $('#ani .particle:nth-child(' + index + ')').css({animation: 'fall_v' + index + ' 1s ease-in 1, fall_h' + index + ' 1s linear 1'})
    del_ani = ->
      $('#ani').css({top:'-100px',left:'-100px'})
      for index in [1..20]
        $('#ani .particle:nth-child(' + index + ')').css({animation: ''})

    setTimeout del_ani, 800



