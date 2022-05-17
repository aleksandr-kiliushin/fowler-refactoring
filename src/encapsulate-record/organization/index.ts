import R from "ramda"

type IOrganization = {
  countryId: string
  name: string
}

class Organization {
  #countryId: IOrganization["countryId"]
  #name: IOrganization["name"]
  constructor(anOrganization: IOrganization) {
    const { countryId, name } = R.clone(anOrganization)

    this.#countryId = countryId
    this.#name = name
  }
  get countryId() {
    return this.#countryId
  }
  set countryId(newCountryId: IOrganization["countryId"]) {
    this.#countryId = newCountryId
  }
  get name() {
    return this.#name
  }
  set name(newName: IOrganization["name"]) {
    this.#name = newName
  }
}

const organization = new Organization({ countryId: "GB", name: "Acme Gooseberries" })

const getOrganization = (): Organization => {
  return organization
}

export default getOrganization
