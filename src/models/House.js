export class House {
  
  constructor(data) {
    this.id = data.id
    this.year = data.year
    this.price = data.price
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.creator = data.creator
  }
}