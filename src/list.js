function List() {
	// private variables
	var _pos = 0;
	var _listSize = 0;
	var _dataStore = [];

	// privileged(public) methods
	this.append = function (element) {
		_dataStore[_listSize++] = element;
	}

	this.toString = function() {
		return _dataStore;
	}

	this.length = function() {
		return _dataStore.length;
	}

	// removes a given element from the list, returns false if the element is not present in the first place
	this.remove = function(element) {
		var elementIndex = this.find(element);
		if (elementIndex > -1) {
			_dataStore.splice(elementIndex, 1);
			--_listSize;
			return true;
		}
		return false;
	}

	// get the index of an element in the list, returns -1 if the element is not present
	this.find = function(element) {
		var dataSize = _dataStore.length;
		for (var i = 0; i < dataSize; ++i) {
			if (_dataStore[i] == element) {
				return i;
			}
		};
		return -1;
	}

	// clear all elements from the list
	this.clear = function() {
		delete _dataStore;
		_dataStore = [];
		_listSize = _pos = 0;
	}

	// insert new element after an existing element
	this.insert = function(element, after) {
		var insertPos = this.find(after);
		if (insertPos > -1) {
			_dataStore.splice(insertPos + 1, 0, element);
			++_listSize;
			return true;
		}
		return false;
	}

	//check if the list contains an element
	this.contains = function(element) {
		for (var i = 0; i < _listSize; i++) {
			if (_dataStore[i] == element) {
				return true;
			}
		};
		return false;
	}

	// set current position to the first element of the list
	this.start = function() {
		_pos = 0;
	}

	// set current position to the last element of the list
	this.end = function() {
		_pos = _listSize - 1;
	}

	// move current position back one element
	this.prev = function() {
		if (_pos > 0) {
			--_pos;
		}
	}

	// move current position forward one element
	this.next = function() {
		if (_pos < _listSize) {
			_pos += 1;
		}
	}

	// returns current position in list
	this.current = function() {
		return _pos;
	}

	// move current position to a given position
	this.moveTo = function(newPos) {
		_pos = newPos;
	}

	// get the current element in the list
	this.getCurrentElement = function() {
		return _dataStore[_pos];
	}
};


// usage
var numbers = new List();
console.log('Starting to add elements to the list...');
console.log('---------------------------------------')
for (var i = 0; i < 10; i++) {
	console.log('Adding ' + i + ' to the list.');
	numbers.append(i);
}

console.log('The list is: ' + numbers.toString());
console.log('The length of the list is: ' + numbers.length());

// iterating through the list
console.log();
console.log('Iterating through the list: ');
console.log('--------------------------- ');
for (numbers.start(); numbers.current() < numbers.length(); numbers.next()) {
	console.log('current element = ' + numbers.getCurrentElement());
}
console.log();
console.log('Does the list contain 2? ' + numbers.contains(2));
console.log('Removing 3 from the list ...');
numbers.remove(3);
console.log('Does the list contain 3? ' + numbers.contains(3));
console.log();
console.log('Clearing the list...');
numbers.clear();
console.log('The list after clearing is: ' + numbers.toString());