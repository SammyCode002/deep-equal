'use strict';
// Don't add or change anything above this comment.

/* 
* Samuel Dameg
*/

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    // Case 1 & 4: If strictly equal (same primitives or same object reference)
    if (val1 === val2) {
        return true;
    }

    // Case 2 & 3: If either is null, they're not deep equal (I already checked === above)
    // Note: typeof null returns 'object', so I handle null separately
    if (val1 === null || val2 === null) {
        return false;
    }

    // Get types
    const type1 = typeof val1;
    const type2 = typeof val2;

    // Case 2 & 3: Different types are not deep equal
    if (type1 !== type2) {
        return false;
    }

    // Case 2: Both are primitives but not strictly equal
    if (type1 !== 'object') {
        return false;
    }

    // Case 5: Both are objects (and not null, and not same reference)
    
    // Case 5.3: One is array and one is not - not deep equal
    const isArray1 = Array.isArray(val1);
    const isArray2 = Array.isArray(val2);

    if (isArray1 !== isArray2) {
        return false;
    }

    // Case 5.2: Both are arrays
    if (isArray1) {
        // Arrays must have same length
        if (val1.length !== val2.length) {
            return false;
        }
        // Elements must be deep equal in the same order
        for (let i = 0; i < val1.length; i++) {
            if (!deepEqual(val1[i], val2[i])) {
                return false;
            }
        }
        return true;
    }

    // Case 5.1: Both are non-array objects
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    // Must have same number of properties
    if (keys1.length !== keys2.length) {
        return false;
    }

    // All properties must exist in both and have deep equal values
    for (const key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        if (!deepEqual(val1[key], val2[key])) {
            return false;
        }
    }

    return true;
}

// Don't add or change anything below this comment.
module.exports = deepEqual;
