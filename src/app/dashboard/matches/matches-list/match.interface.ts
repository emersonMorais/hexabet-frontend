import { Resultado } from './Resultado'

export interface Match {
  id: number,
  date: Date,
  result: Resultado,
  firstTeam: {
            id: number,
            countryName: string,
            imgFlagUrl: null,
            groupId: {
                id: number,
                name: string
            }
        },
        secondTeam: {
            id: number,
            countryName: string,
            imgFlagUrl: string,
            groupId: {
                id: number,
                name: string
            }
        },
        active: boolean
    }

