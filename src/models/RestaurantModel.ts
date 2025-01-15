class RestaurantModel {
  _title: string
  _description: string
  _image: string
  _category: string
  _rating: number
  _products?: object
  _id: number

  constructor(
    _id: number,
    _title: string,
    _description: string,
    _image: string,
    _category: string,
    _rating: number
  ) {
    this._id = _id
    this._title = _title
    this._description = _description
    this._image = _image
    this._category = _category
    this._rating = _rating
  }
}

export default RestaurantModel
