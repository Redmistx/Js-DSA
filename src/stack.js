function Stack() {
	// private variables
	var _dataStore = [];	//an array to store the data
	var _top = 0;

	// add an element to the stack
	this.push = function(element){
		_dataStore[_top++] = element;
	}

	// get the top element from the stack and remove it
	this.pop = function() {
		return _dataStore[--_top];
	}

	// get the top element from the stack without removing it
	this.peek = function() {
		return _dataStore[_top - 1];
	}

	// remove all elements from the stack
	this.clear = function() {
		_top = 0;
	}

	// length of the stack
	this.length = function() {
		return _top;
	}
};

// usage
var stack = new Stack();
stack.push('John');
stack.push('Jane');
stack.push('June');
console.log('The top of the stack is: ' + stack.peek());
console.log('---------------------------');
console.log('If we pop we get: ' + stack.pop());
console.log('---------------------------');
console.log('The length of the stack is: ' + stack.length());
console.log('The new top of the stack is: ' + stack.peek());