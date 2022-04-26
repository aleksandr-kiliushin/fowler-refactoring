class Book {
  private _reservations: string[]
  constructor() {
    this._reservations = []
  }
  addReservation(customer: string) {
    this._reservations.push(customer)
  }
  get reservations() {
    return this._reservations
  }
}

const book1 = new Book()
book1.addReservation("Peter")
book1.addReservation("John")
book1.addReservation("Petty")

const book2 = new Book()
book2.addReservation("Anna")
book2.addReservation("Julia")
book2.addReservation("Rebecca")
book2.addReservation("Peter")
book2.addReservation("Leo")

const book3 = new Book()
book3.addReservation("Judi")
book3.addReservation("Claudia")
book3.addReservation("Suzan")

export default Book
