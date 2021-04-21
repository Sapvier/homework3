export class MyArray {
    constructor(...args) {
        let index = 0
        args.forEach(argument => {
            this[index] = argument
            index++
        })
    }

    myPush(item) {
        let length = this.getLength(this)
        this[length + 1] = item
        return this.getLength(this)
    }

    myPop() {
        let length = this.getLength(this)
        let lastItem = this[length]
        delete this[length]
        return lastItem
    }

    myMap(func) {
        //map
        let index = 0
        let newArrayObj = {}
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)
        for (let item in this) {
            newArrayObj[index] = func(this[item])
            index++
        }
        return newArrayObj
    }

    myForEach(func) {
        //forEach
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)

        for (let item in this) {
            this[item] = func(this[item], item)
        }
    }

    myReduce(func, initialValue) {
        let accumulator = initialValue || 0
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)

        for (let item in this) {
            accumulator = func(accumulator, this[item], item, this)
        }
        return accumulator
    }

    myFilter(func) {
        let index = 0
        let newArrayObj = {}
        if (typeof func !== 'function') throw new Error(`${func} is not a function`)
        for (let item in this) {
            if (func(this[item])) {
                newArrayObj[index] = this[item]
                index++
            }
        }
        return newArrayObj
    }

    mySort(func) {
        let comparator = func || this.defaultComparator()
        // if (typeof func !== 'function') throw new Error(`${func} is not a function`)
        return this
    }
    myToString() {
        let string = ''
        for (let item in this) {
            (item === '0') ? string += this[item] : string += "," + this[item]
        }
        return string
    }

    getLength(array) {
        let length = -1
        for (const item in array) {
            length++
        }
        return length;
    }

    defaultComparator(obj) {
        if (this.getLength(obj) < 2) return obj;
        let pivot = obj[0] + "";
        const left = {};
        const right = {};

        for (let i = 1; i < this.getLength(obj); i++) {
            if ((obj[i] + "") < pivot) left[i] = obj[i];
            else right[i] = obj[i];
        }
        return Object.assign({}, this.defaultComparator(left), this.defaultComparator(right))

    }
}

