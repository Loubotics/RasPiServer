// Generated by CoffeeScript 1.7.1
$(document).ready(function() {
  if ($('#roomsContainer').height() > 0) {
    return setInterval(function() {
      var getRoom1, getRoom2, getRoom3, getRoom4, getRoom5;
      getRoom1 = function() {
        var room1Promise;
        room1Promise = $.Deferred();
        $.ajax({
          url: '/getCurrent',
          data: {
            data: 'room1'
          },
          type: 'get',
          timeout: 3000,
          success: function(json) {
            return room1Promise.resolve(json);
          },
          error: function(error) {
            return room1Promise.reject(error);
          }
        });
        return room1Promise;
      };
      getRoom2 = function() {
        var room2Promise;
        room2Promise = $.Deferred();
        $.ajax({
          url: '/getCurrent',
          data: {
            data: 'room2'
          },
          type: 'get',
          timeout: 3000,
          success: function(json) {
            return room2Promise.resolve(json);
          },
          error: function(error) {
            return room2Promise.reject(error);
          }
        });
        return room2Promise;
      };
      getRoom3 = function() {
        var room3Promise;
        room3Promise = $.Deferred();
        $.ajax({
          url: '/getCurrent',
          data: {
            data: 'room3'
          },
          type: 'get',
          timeout: 3000,
          success: function(json) {
            return room3Promise.resolve(json);
          },
          error: function(error) {
            return room3Promise.reject(error);
          }
        });
        return room3Promise;
      };
      getRoom4 = function() {
        var room4Promise;
        room4Promise = $.Deferred();
        $.ajax({
          url: '/getCurrent',
          data: {
            data: 'room4'
          },
          type: 'get',
          timeout: 3000,
          success: function(json) {
            return room4Promise.resolve(json);
          },
          error: function(error) {
            return room4Promise.reject(error);
          }
        });
        return room4Promise;
      };
      getRoom5 = function() {
        var room5Promise;
        room5Promise = $.Deferred();
        $.ajax({
          url: '/getCurrent',
          data: {
            data: 'room5'
          },
          type: 'get',
          timeout: 3000,
          success: function(json) {
            return room5Promise.resolve(json);
          },
          error: function(error) {
            return room5Promise.reject(error);
          }
        });
        return room5Promise;
      };
      return $.when(getRoom1(), getRoom2(), getRoom3(), getRoom4(), getRoom5()).then(function(printThis, printThat, printThese, printThose, printBla) {
        $('#room1Reading').text(printThis.reading);
        $('#room1ReadingTime').text(printThis.updated_at);
        $('#room2Reading').text(printThat.reading);
        $('#room3Reading').text(printThese.reading);
        $('#room4Reading').text(printThose.reading);
        return $('#room5Reading').text(printBla.reading);
      });
    }, 10000);
  }
});
