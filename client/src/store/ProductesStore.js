import {makeAutoObservable} from 'mobx';
export default class ProductesStore {
    constructor() {
        this._types = []
        this._categories = []
        this._productes = []
        this._selectedType = {}
        this._selectedCategory= {}
        makeAutoObservable(this);
    };

    setTypes(type) {
        this._types = type;
    }
    setCategories(categories) {
        this._categories = categories;
    }
    setProductes(product) {
        this._productes = product;
    }
    setSelectedType(type) {
        this._selectedType = type;
    } 
    setSelectedCategory(category) {
        this._selectedCategory = category;
    }
    
    get types() {
        return this._types;
    }
    get categories() {
        return this._categories;
    }
    get productes() {
        return this._productes;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedCategory() {
        return this._selectedCategory;
    }
}