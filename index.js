// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var particle;
    particle = $('<div>');
    return $('.block').on('click', function(e) {
      var del_ani, i, index;
      $('#ani').css({
        top: e.clientY + 'px',
        left: e.clientX + 'px'
      });
      for (index = i = 1; i <= 20; index = ++i) {
        $('#ani .particle:nth-child(' + index + ')').css({
          animation: 'fall_v' + index + ' 1s ease-in 1, fall_h' + index + ' 1s linear 1'
        });
      }
      del_ani = function() {
        var j, results;
        $('#ani').css({
          top: '-100px',
          left: '-100px'
        });
        results = [];
        for (index = j = 1; j <= 20; index = ++j) {
          results.push($('#ani .particle:nth-child(' + index + ')').css({
            animation: ''
          }));
        }
        return results;
      };
      return setTimeout(del_ani, 800);
    });
  });

}).call(this);

//# sourceMappingURL=index.js.map