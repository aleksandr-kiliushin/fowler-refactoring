type Owner = { name: string; surname: string }

let defaultOwner: Owner = { name: "Martin", surname: "Fowler" }

export const getDefaultOwner = () => {
  return defaultOwner
}

export const setDefaultOwner = (newOwner: Owner): void => {
  defaultOwner = newOwner
}
