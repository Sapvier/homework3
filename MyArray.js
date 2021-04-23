export class MyArray {
    constructor(...args) {
        let index = 0;
        args.forEach(argument => {
            this[index] = argument
            index++;
        });
    }

    myPush(...items) {
        let itemsObj = {};
        let length = this.getLength(this);
        items.forEach(argument => {
            itemsObj[length] = argument
            length++;
        });

        Object.assign(this, itemsObj);

        return length;
    }

    myPop() {
        let length = this.getLength(this);
        let lastItem = this[length - 1];
        delete this[length - 1]
        return this.getLength(this);
    }

    myMap(func) {
        let index = 0;
        let newArrayObj = {};
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)
        for (let item in this) {
            newArrayObj[index] = func(this[item])
            index++;
        }
        return newArrayObj;
    }

    myForEach(func) {
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)

        for (let item in this) {
            this[item] = func(this[item], item, this)
        }
    }

    myReduce(func, initialValue) {
        let accumulator = initialValue || this[0];
        let index = initialValue === undefined ? 1 : 0;
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)

        for (; index < this.getLength(this); index++) {
            accumulator = func(accumulator, this[index], index, this)
        }
        return accumulator;
    }

    myFilter(func) {
        let index = 0;
        let newArrayObj = {};
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)
        for (let item in this) {
            if (func(this[item])) {
                newArrayObj[index] = this[item]
                index++;
            }
        }
        return newArrayObj;
    }

    mySort(func) {
        if (func === undefined) {
            return this.defaultComparator()
        }
        else if (typeof func !== 'function') {
            throw new Error(`${func} is not a function`)
        }
        else return func(this);
    }

    myToString() {
        let string = '';
        for (let item in this) {
            (item === '0') ? string += this[item] : string += "," + this[item]
        }
        return string;
    }

    myFrom(arrayLike, func) {
        let newObj = {};
        let i = 0;
        for (let item in arrayLike) {
            if (func === undefined) {
                newObj[i] = this.defaultFunction(arrayLike[item])
                i++;
            }
            else if (typeof func !== 'function') {
                throw new Error(`${func} is not a function`)
            }
            else {
                newObj[i] = func(arrayLike[item]);
                i++;
            }

        }
        return newObj;
    }

    *[Symbol.iterator] () {
        for (let item in this) {
            yield this[item]
        }
    }

    getLength(obj) {
        let length = 0;
        for (const item in obj) {
            length++;
        }
        return length;
    }

    defaultComparator() {
        let n = this.getLength(this), i = 1, j = 2;
        while (i < n) {
            if (this[i-1] + "" < this[ i ] + "") {
                i = j;
                j++;
            }
            else {
                let t = this[i-1];
                this[i-1] = this[ i ];
                this[ i ] = t;
                i--;
                    if (i === 0) {
                        i = j;
                        j++;
                    }
            }
        }
        return this;
    }
    defaultFunction(item) {
        return item;
    }
}

