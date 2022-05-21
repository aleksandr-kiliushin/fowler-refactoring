type AccountData = {
  daysOverdrawn: number
  overdraftCharge: number
  type: {
    isPremium: boolean
  }
}

class Account {
  private _data: AccountData
  constructor(data: AccountData) {
    this._data = data
  }
  get bankCharge() {
    let result = 4.5
    if (this._data.daysOverdrawn > 0) {
      result += this._data.overdraftCharge
    }
    return result
  }
  get overdraftCharge() {
    if (this._data.type.isPremium) {
      const baseCharge = 10
      if (this._data.daysOverdrawn <= 7) return baseCharge
      return baseCharge + (this._data.daysOverdrawn - 7) * 0.85
    }
    return this._data.daysOverdrawn * 1.75
  }
}

const account1 = new Account({
  daysOverdrawn: 12,
  overdraftCharge: 123,
  type: {
    isPremium: true,
  },
})

const account2 = new Account({
  daysOverdrawn: 3,
  overdraftCharge: 321,
  type: {
    isPremium: false,
  },
})

export const getAccount1 = (): Account => {
  return account1
}

export const getAccount2 = (): Account => {
  return account2
}
