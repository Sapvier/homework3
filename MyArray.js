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
        let lastItem = this[length - 1]
        delete this[length - 1]
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
        if (func === undefined) {
            return this.defaultComparator()
        }
        else if (typeof func !== 'function') {
            throw new Error(`${func} is not a function`)
        }
        else return func(this)
    }

    myToString() {
        let string = ''
        for (let item in this) {
            (item === '0') ? string += this[item] : string += "," + this[item]
        }
        return string
    }
    // myFrom(arrayLike, func) {
    //     // if (typeof func !== 'function') throw new Error(`${func} is not a function`)
    //     let newObj = {}
    //     let i = 0
    //     for (let item in arrayLike) {
    //         arrayLike[i] = newObj[item]
    //         console.log()
    //         i++
    //     }
    //     let index = 0
    //     let newArrayObj = {}
    //     for (let item in newObj) {
    //         newArrayObj[index] = func(newObj[item])
    //         index++
    //     }
    //     return newArrayObj
    // }

    getLength(obj) {
        let length = 0
        for (const item in obj) {
            length++
        }
        return length;
    }

    defaultComparator() {
        let n = this.getLength(this), i = 1, j = 2;
        while (i < n) {
            if (this[i-1] + "" < this[ i ] + "") {
                i = j; j++;
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
}

