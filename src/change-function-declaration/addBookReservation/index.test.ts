import Book from "./index"

describe("Book `addReservation` metod works correctly ().", () => {
  test("Logs into console correctly.", () => {
    const book1 = new Book()
    book1.addReservation("Peter")
    expect(book1.reservations).toEqual(["Peter"])
    book1.addReservation("John")
    expect(book1.reservations).toEqual(["Peter", "John"])
    book1.addReservation("Petty")
    expect(book1.reservations).toEqual(["Peter", "John", "Petty"])

    const book2 = new Book()
    book2.addReservation("Petty")
    expect(book2.reservations).toEqual(["Petty"])

    expect(book1.reservations).toEqual(["Peter", "John", "Petty"])
  })
})
