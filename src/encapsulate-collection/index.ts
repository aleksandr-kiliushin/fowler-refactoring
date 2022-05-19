import R from "ramda"

export type ICourse = {
  isAdvanced: boolean
  name: string
}

export type IPerson = {
  name: string
  courses: ICourse[]
}

class Course {
  #data: ICourse
  constructor(data: ICourse) {
    this.#data = data
  }
  get rawData() {
    return R.clone(this.#data)
  }
  get isAdvanced() {
    return this.#data.isAdvanced
  }
  get name() {
    return this.#data.name
  }
  set isAdvanced(newValue) {
    this.#data.isAdvanced = newValue
  }
  set name(newValue) {
    this.#data.name = newValue
  }
}

class Person {
  #data: IPerson
  constructor(data: IPerson) {
    this.#data = data
  }
  get rawData() {
    return R.clone(this.#data)
  }
  get courses() {
    return R.clone(this.#data.courses)
  }
  get name() {
    return this.#data.name
  }
}

export { Course, Person }
