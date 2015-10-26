module.exports = function thisToArg( fn ) {
	return function combiningThisWithArgs() {
		var args = Array.prototype.slice.call( arguments )
		args.unshift(this)
		return fn.apply( this, args )
	}
}