
/**
 * @description a final Product receiving id and type from ProductType
 * @author Ismael Collado
 * @class Product
 * @extends ProductType
 */
class Product {
    _name;
    _code;
    _tested;
    _entryDate;

/**
 * Creates an instance of Product.
 * @author Ismael Collado Cala
 * @param  {number} pID 
 * @param  {string} pType 
 * @param  {string} pName 
 * @param  {string} pCode 
 * @param  {boolean} pTested 
 * @param  {Date} pEntryDate 
 * @memberof Product
 */
constructor(pName, pCode, pTested, pEntryDate, pProductType) {
        //super(pID, pType);
        this.ProductType = pProductType;
        this._name = pName;
        this._code = pCode;
        this._tested = pTested;
        this._entryDate = pEntryDate;
    }
    /**
     * @description Getting the name from the object
     * @param {none}
     * @return {string} - {this._name}
     * @memberof Product
     */
    get Name(){
        return this._name;
    }
    /**
     * @description Changing the name from the object
     * @param {string} pName
     * @return {void}
     * @memberof Product
     */
    set Name(pName){
        this._name = pName;
    }
    /**
     * @description Getting the Code from the object
     * @param {none}
     * @return {string} - {this._code}
     * @memberof Product
     */
    get Code(){
        return this._code;
    }
    /**
     * @description Changing the Code from the object
     * @param {string} pCode
     * @return {void}
     * @memberof Product
     */
    set Code(pCode){
        this._code = pCode;
    }
    /**
     * @description Getting the Tested value from the object
     * @param {none}
     * @return {boolean} - {this._tested}
     * @memberof Product
     */
    get Tested(){
        return this._tested;
    }
    /**
     * @description Changing the Tested value from the object
     * @param {boolean} pTested
     * @return {void}
     * @memberof Product
     */
    set Tested(pTested){
        this._tested = pTested;
    }
    /**
     * @description Getting the Date from the object
     * @param {none}
     * @return {Date} - {this._entryDate}
     * @memberof Product
     */
    get Date(){
        return this._entryDate;
    }
    /**
     * @description Changing the Date from the object
     * @param {Date} pEntryDate
     * @return {void}
     * @memberof Product
     */
    set Date(pEntryDate){
        this._entryDate = pEntryDate;
    }
}