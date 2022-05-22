import { getOIndiaOfficesData, OfficeAcquiredData } from "./index"

describe("Offices data acquiring.", () => {
  test("India offices data is acquired correctly.", () => {
    expect(getOIndiaOfficesData()).toEqual<OfficeAcquiredData[]>([
      { city: "Bangalore", phone: "+91 80 4064 9570" },
      { city: "Chennai", phone: "+91 44 660 44766" },
    ])
  })
})
