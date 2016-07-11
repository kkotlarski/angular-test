// CHARACTERS IN STRINGS

function search(str1, str2) {
    var len1 = str1.length,
        len2 = str2.length,
        i1, i2,
        result = '';

    for (i1 = 0; i1 < len1; ++i1) {
        for (i2 = 0; i2 < len2; ++i2) {
            if (str1[i1] === str2[i2]) {
                result += str1[i1];
                break;
            }
        }
    }

    return result;
}

function search2(str1, str2) {
    var len = str2.length,
        i,
        tmp = {},
        result = '';

    for (i = 0; i < len; ++i) {
        tmp[str2[i]] = true;
    }

    len = str1.length;
    for (i = 0; i < len; ++i) {
        if (tmp[str1[i]]) {
            result += str1[i];
        }
    }

    return result;
}

// ARRAY COMPACTION

function compaction(arr) {
    var i = arr.length;

    while (i-- > 1) {
        if (arr[i] === arr[i - 1]) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

function compactionImmutable(arr) {
    var result = [],
        len = arr.length,
        i;

    for (i = 0; i < len; ++i) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}

// ROTATING AN ARRAY

function rotate(arr, n) {
    while (n--) {
        arr.unshift(arr.pop());
    }

    return arr;
}

function rotateImmutable(arr, n) {
    var result = [],
        len = arr.length,
        start = len - n,
        i;

    for (i = 0; i < len; ++i) {
        result.push(arr[(start + i) % len])
    }

    return result;
}

// LEAST COMMON MULTIPLE

function clm(arr) {
    var max = Math.max.apply(null, arr),
        clm = max,
        len = arr.length,
        i;

    for (i = 0; i < len; ++i) {
        if (clm % arr[i] !== 0) {
            i = -1;
            clm += max;
        }
    }

    return clm;
}
