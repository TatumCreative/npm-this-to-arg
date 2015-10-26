# this-to-arg

Convert the `this` object in a function to the first parameter for that function. The existing arguments will be shifted right. The reason for this module is for code clarity when writing code using packages and frameworks that assume you want to use the `this` object, or when `this` may need to be used in closures. Sometimes `this` can be a bit too magical in how it gets set. `this-to-arg` makes it more explicit.

# Example

This is a contrived example of using jQuery to create a link that turns into a timer.

## Before

	function startTimer( event ) {
		
		var element = this
		var seconds = 0
		
		setInterval(function() { element.innerHTML = seconds }, 1000)
		event.preventDefault()
	}
	
	jQuery('a').on('click', startTimer)


## After

	var ThisToArg = require('this-to-arg')
	
	function startTimer( element, event ) {
		
		var seconds = 0
		
		setInterval(function() { element.innerHTML = seconds }, 1000)
		event.preventDefault()
	}
	
	jQuery('a').on('click', ThisToArg( startTimer ))