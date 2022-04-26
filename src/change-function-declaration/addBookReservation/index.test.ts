import Book from "./index"

describe("Book `addReservation` metod works correctly ().", () => {
  test("Logs into console correctly.", () => {
    const book1 = new Book()
    book1.addReservation("Peter")
    expect(book1.reservations).toEqual([
      {
        customerName: "Peter",
        hasPriority: false,
      },
    ])
    book1.addReservation("John")
    expect(book1.reservations).toEqual([
      { customerName: "Peter", hasPriority: false },
      { customerName: "John", hasPriority: false },
    ])
    book1.addReservation("Petty")
    expect(book1.reservations).toEqual([
      { customerName: "Peter", hasPriority: false },
      { customerName: "John", hasPriority: false },
      { customerName: "Petty", hasPriority: false },
    ])

    const book2 = new Book()
    book2.addReservation("Mary")
    expect(book2.reservations).toEqual([
      {
        customerName: "Mary",
        hasPriority: false,
      },
    ])

    expect(book1.reservations).toEqual([
      { customerName: "Peter", hasPriority: false },
      { customerName: "John", hasPriority: false },
      { customerName: "Petty", hasPriority: false },
    ])
  })
})
