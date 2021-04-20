export class MyArray {
    constructor(...args) {
        this.arrayObj = {}
        let index = 0
        args.forEach(argument => {
            this.arrayObj[index] = argument
            index++
        })
    }

    push(item) {
        let length = this.getLength(this.arrayObj)
        this.arrayObj[length + 1] = item
        return this.getLength(this.arrayObj)
    }


    getLength(array) {
        let length = -1
        for (const item in array) {
            length++
        }
        return length;
    }
}

