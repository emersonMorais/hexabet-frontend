import { Resultado } from './Resultado'

export interface bet {
  createdAt: Date,
  guess: Resultado,
  matchId: {
      id: number
  },
  userId: {
      id: number
  }
}
