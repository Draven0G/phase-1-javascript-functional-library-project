// myEach function
function myEach(collection, callback) {
    for (const key in collection) {
        callback(collection[key]);
    }
    return collection;
}

// myMap function
function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
        result.push(callback(item));
    });
    return result;
}

// myReduce function
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    
    if (Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i]);
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        for (let i = startIndex; i < keys.length; i++) {
            const key = keys[i];
            accumulator = callback(accumulator, collection[key], key);
        }
    }
    
    return accumulator;
}


// myFind function
function myFind(collection, predicate) {
    for (const key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

// myFilter function
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

// mySize function
function mySize(collection) {
    let size = 0;
    myEach(collection, function() {
        size++;
    });
    return size;
}

// myFirst function
function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
}

// myLast function
function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
}

// myKeys function
function myKeys(object) {
    return Object.keys(object);
}

// myValues function
function myValues(object) {
    return Object.values(object);
}
