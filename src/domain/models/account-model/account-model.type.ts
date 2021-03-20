import { StatementModel } from '../statement/statement-model'

export type AccountModel = {
  username: string
  money: string
  bitcoins: string
  britas: string
  statement: StatementModel[]
}
