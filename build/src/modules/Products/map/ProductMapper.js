"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../domain/Product"));
class ProductMapper {
    static toDomain(product) {
        return new Product_1.default({
            code: product.code,
            status: product.status,
            imported_t: product.imported_t,
            url: product.url,
            creator: product.creator,
            created_t: product.created_t,
            last_modified_t: product.last_modified_t,
            product_name: product.product_name,
            quantity: product.quantity,
            brands: product.brands,
            categories: product.categories,
            labels: product.labels,
            cities: product.cities,
            purchase_places: product.purchase_places,
            stores: product.stores,
            ingredients_text: product.ingredients_text,
            traces: product.traces,
            serving_size: product.serving_size,
            serving_quantity: product.serving_quantity,
            nutriscore_score: product.nutriscore_score,
            nutriscore_grade: product.nutriscore_grade,
            main_category: product.main_category,
            image_url: product.image_url,
        });
    }
}
exports.default = ProductMapper;
