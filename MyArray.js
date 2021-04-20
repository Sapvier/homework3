export class MyArray {
    constructor(...array) {
        this.array = array
    }
    static push(item) {
        this.array = [...this.array, item]
        return this.array.length + 1
    }
}