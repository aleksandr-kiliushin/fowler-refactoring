import stringifyUserInfo, { IUser } from "./index"

describe("User info is stringified correctly", () => {
  test.each<{ aUser: IUser; stringifiedUser: string }>([
    {
      aUser: { balance: 100, brothers: [123, 445, 5], isActive: true, name: "Carl", sisters: [] },
      stringifiedUser: "User Carl has 3 siblings.",
    },
    {
      aUser: { balance: 100, brothers: [], isActive: false, name: "Carl", sisters: [] },
      stringifiedUser: "User Carl has no siblings.",
    },
  ])("$name user.", ({ aUser, stringifiedUser }) => {
    expect(stringifyUserInfo({ aUser })).toEqual(stringifiedUser)
  })
})
