import ProductStatusEnum from './ProductStatusEnum'

export type ProductDTO = {
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

export type ProductBodyDTO = {
  status?: ProductStatusEnum
  url?: string
  creator?: string
  product_name?: string
  quantity?: string
  brands?: string
  categories?: string
  labels?: string
  cities?: string
  purchase_places?: string
  stores?: string
  ingredients_text?: string
  traces?: string
  serving_size?: string
  serving_quantity?: number
  nutriscore_score?: number
  nutriscore_grade?: string
  main_category?: string
  image_url?: string
}
