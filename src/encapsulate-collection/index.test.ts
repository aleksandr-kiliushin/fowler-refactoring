import { Course, ICourse, IPerson, Person } from "./index"

describe("Person and Course.", () => {
  test("A course is created and modified properly.", () => {
    const aCourse = new Course({ isAdvanced: false, name: "React" })

    expect(aCourse.rawData).toEqual<ICourse>({ isAdvanced: false, name: "React" })
    expect(aCourse.isAdvanced).toEqual<ICourse["isAdvanced"]>(false)
    expect(aCourse.name).toEqual<ICourse["name"]>("React")

    expect(() => {
      aCourse.rawData = { isAdvanced: true, name: "Angular" }
    }).toThrowError()

    aCourse.isAdvanced = true
    aCourse.name = "Angular"

    expect(aCourse.rawData).toEqual<ICourse>({ isAdvanced: true, name: "Angular" })
  })

  test("A person is created and modified properly.", () => {
    const aPerson = new Person({ courses: [], name: "Joe" })

    expect(aPerson.name).toEqual<IPerson["name"]>("Joe")
    expect(aPerson.courses).toEqual<IPerson["courses"]>([])
    expect(aPerson.rawData).toEqual<IPerson>({ courses: [], name: "Joe" })

    // Does not have an effect because we mutate a copy.
    aPerson.rawData.courses = [{ isAdvanced: true, name: "JavaScript" }]
    expect(aPerson.courses).toEqual<IPerson["courses"]>([])

    expect(() => {
      aPerson.courses = [{ isAdvanced: true, name: "JavaScript" }]
    }).toThrowError()

    // Does not have an effect because we mutate a copy.
    aPerson.courses.push({ isAdvanced: true, name: "JavaScript" })
    expect(aPerson.courses).toEqual<IPerson["courses"]>([])

    aPerson.addCourse({ isAdvanced: true, name: "Angular" })
    expect(aPerson.courses).toEqual<IPerson["courses"]>([{ isAdvanced: true, name: "Angular" }])
    aPerson.addCourse({ isAdvanced: false, name: "React" })
    expect(aPerson.courses).toEqual<IPerson["courses"]>([
      { isAdvanced: true, name: "Angular" },
      { isAdvanced: false, name: "React" },
    ])

    aPerson.removeCourse({ aCourseName: "React" })
    expect(aPerson.courses).toEqual<IPerson["courses"]>([{ isAdvanced: true, name: "Angular" }])
  })
})
