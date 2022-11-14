import ProductStatusEnum from '../map/dto/ProductStatusEnum'

interface IProduct {
  _id: string
  code: number
  status: ProductStatusEnum
  imported_t: string
  url: string
  creator: string
  created_t: number
  last_modified_t: number
  product_name: string
  quantity: string
  brands: string
  categories: string
  labels: string
  cities?: string
  purchase_places: string
  stores: string
  ingredients_text: string
  traces: string
  serving_size: string
  serving_quantity: number
  nutriscore_score: number
  nutriscore_grade: string
  main_category: string
  image_url: string
}

export default class Product {
  private _id: string
  private code: number
  private status: ProductStatusEnum
  private imported_t: string
  private url: string
  private creator: string
  private created_t: number
  private last_modified_t: number
  private product_name: string
  private quantity: string
  private brands: string
  private categories: string
  private labels: string
  private cities?: string
  private purchase_places: string
  private stores: string
  private ingredients_text: string
  private traces: string
  private serving_size: string
  private serving_quantity: number
  private nutriscore_score: number
  private nutriscore_grade: string
  private main_category: string
  private image_url: string

  constructor({
    _id,
    code,
    status,
    imported_t,
    url,
    creator,
    created_t,
    last_modified_t,
    product_name,
    quantity,
    brands,
    categories,
    labels,
    cities,
    purchase_places,
    stores,
    ingredients_text,
    traces,
    serving_size,
    serving_quantity,
    nutriscore_score,
    nutriscore_grade,
    main_category,
    image_url,
  }: IProduct) {
    this._id = _id
    this.code = code
    this.status = status
    this.imported_t = imported_t
    this.url = url
    this.creator = creator
    this.created_t = created_t
    this.last_modified_t = last_modified_t
    this.product_name = product_name
    this.quantity = quantity
    this.brands = brands
    this.categories = categories
    this.labels = labels
    this.cities = cities
    this.purchase_places = purchase_places
    this.stores = stores
    this.ingredients_text = ingredients_text
    this.traces = traces
    this.serving_size = serving_size
    this.serving_quantity = serving_quantity
    this.nutriscore_score = nutriscore_score
    this.nutriscore_grade = nutriscore_grade
    this.main_category = main_category
    this.image_url = image_url
  }
}
