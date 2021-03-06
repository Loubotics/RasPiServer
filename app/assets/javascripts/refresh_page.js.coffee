$(document).ready ->
	if $('#roomsContainer').height() > 0
		setInterval ->
			getRoom1 = () ->
				room1Promise = $.Deferred()
				$.ajax
					url:'/getCurrent'
					data: { data: 'room1'}
					type:'get'
					timeout:3000
					success: (json) ->
						room1Promise.resolve json
					error: (error) ->
						room1Promise.reject error

				return room1Promise

			getRoom2 =() ->
				room2Promise = $.Deferred()
				$.ajax
					url:'/getCurrent'
					data: { data: 'room2'}
					type: 'get'
					timeout:3000
					success: (json) ->
						room2Promise.resolve json
					error: (error) ->
						room2Promise.reject error
				return room2Promise

			getRoom3 = () ->
				room3Promise = $.Deferred()
				$.ajax
					url:'/getCurrent'
					data:{ data: 'room3'}
					type: 'get'
					timeout: 3000
					success: (json) ->
						room3Promise.resolve json
					error: (error) ->
						room3Promise.reject error
				return room3Promise


			getRoom4 = () ->
				room4Promise = $.Deferred()
				$.ajax
					url:'/getCurrent'
					data:{ data: 'room4'}
					type:'get'
					timeout: 3000
					success: (json) ->
						room4Promise.resolve json
					error: (error) ->
						room4Promise.reject error
				return room4Promise

			getRoom5 = () ->
				room5Promise = $.Deferred()
				$.ajax
					url:'/getCurrent'
					data:{ data: 'room5'}
					type:'get'
					timeout: 3000
					success: (json) ->
						room5Promise.resolve json
					error: (error) ->
						room5Promise.reject error
				return room5Promise




			$.when(getRoom1(), getRoom2(), getRoom3(), getRoom4(), getRoom5()).then (room1JSON, room2JSON, room3JSON, room4JSON, room5JSON) ->		
				$('#room1Reading').text(room1JSON.reading)
				$('#room1ReadingTime').text(room1JSON.updated_at)
				$('#room2Reading').text(room2JSON.reading)
				$('#room2ReadingTime').text(room2JSON.updated_at)
				$('#room3Reading').text(room3JSON.reading)
				$('#room3ReadingTime').text(room3JSON.updated_at)
				$('#room4Reading').text(room4JSON.reading)
				$('#room4ReadingTime').text(room4JSON.updated_at)
				$('#room5Reading').text(room5JSON.reading)
				$('#room5ReadingTime').text(room5JSON.updated_at)
		, 60000

	
