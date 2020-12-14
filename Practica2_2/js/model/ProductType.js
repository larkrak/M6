

/**
 * @description Class to save ID and Type, just for the class Product.
 * @author Ismael Collado 
 * @class ProductType
 */
class ProductType{

    //Properties definition
    _ID;
    _type;

/**
 * Creates an instance of ProductType.
 * @author Ismael Collado
 * @param  {number} pID 
 * @param  {string} pType 
 * @memberof ProductType
 */
constructor(pID, pType) {
        this._ID = pID;
        this._type = pType;
	}
/**
 * @description Getting the ID from the object
 * @param {none}
 * @return {number} - {this._ID}
 * @memberof ProductType
 */
get ID(){
    return this._ID;
}
/**
 * @description Changing the ID from the object
 * @param {string} pID
 * @return {void}
 * @memberof ProductType
 */
set ID(pID){
    this._ID = pID;
}
/**
 * @description Getting the Type from the object
 * @param {none}
 * @return {string} - {this._type}
 * @memberof ProductType
 */
get Type(){
    return this._type;
}
/**
 * @description Changing the Type from the object
 * @param {string} pType
 * @return {void}
 * @memberof ProductType
 */
set Type(pType){
    this._type = pType;
}


}