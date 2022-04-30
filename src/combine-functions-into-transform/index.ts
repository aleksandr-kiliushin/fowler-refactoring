export type IUser = {
  balance: number
  brothers: number[]
  isActive: boolean
  name: string
  sisters: number[]
}

const hasUserSiblings = ({ aUser }: { aUser: IUser }) => {
  return aUser.brothers.length + aUser.sisters.length > 0
}

const countUserSiblings = ({ aUser }: { aUser: IUser }) => {
  return aUser.brothers.length + aUser.sisters.length
}

const stringifyUserInfo = ({ aUser }: { aUser: IUser }) => {
  return `User ${aUser.name} has ${
    hasUserSiblings({ aUser }) ? countUserSiblings({ aUser }) : "no"
  } siblings.`
}

export default stringifyUserInfo
