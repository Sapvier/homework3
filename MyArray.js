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
        let index = 0
        let newArrayObj = {}
        if (typeof func !== 'function') throw new Error('Please add function')
        for (let item in this) {
            newArrayObj[index] = func(this[item])
            index++
        }
        return newArrayObj
    }

    myForEach(func) {
        if (typeof func !== 'function') throw new Error('Please add function')
        for (let item in this) {
            this[item] = func(this[item], item)
        }
    }

    myReduce(func, initialValue) {
        let accumulator = initialValue || 0

        if (typeof func !== 'function') throw new Error('Please add function')

        for (let item in this) {
            accumulator = func(accumulator, this[item], item, this)
        }
        return accumulator
    }

    getLength(array) {
        let length = -1
        for (const item in array) {
            length++
        }
        return length;
    }
}

