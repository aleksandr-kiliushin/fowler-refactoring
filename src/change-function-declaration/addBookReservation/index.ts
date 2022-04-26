class Book {
  private _reservations: { customerName: string; hasPriority: boolean }[]

  constructor() {
    this._reservations = []
  }

  addReservation(aCustomer: string) {
    this.NEW_addReservation({ customerName: aCustomer, hasPriority: false })
  }

  NEW_addReservation({
    customerName,
    hasPriority,
  }: {
    customerName: string
    hasPriority: boolean
  }) {
    this._reservations.push({ customerName, hasPriority })
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
