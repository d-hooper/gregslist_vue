import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }

  setActiveHouse(houseId) {
    const houses = AppState.houses
    const activeHouse = houses.find(house => house.id == houseId)
    AppState.activeHouse = activeHouse
  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    const house = new House(response.data)
    AppState.houses.push(house)
  }

  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    logger.log(response.data)
    const houseToDelete = AppState.houses.findIndex(house => house.id == houseId)
    AppState.houses.splice(houseToDelete, 1)
  }

}
export const housesService = new HousesService()