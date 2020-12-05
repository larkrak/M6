class ProductType{

    //Properties definition
    _ID;
    _type;

/**
 * Creates an instance of Person.
 * @param {*} pID
 * @param {*} pType
 * @memberof ProductType
 */
constructor(pID, pType) {
        this._ID = pID;
        this._type = pType;
	}

get ID(){
    return this._ID;
}

set ID(pID){
    this._ID = pID;
}

get Type(){
    return this._type;
}

set Type(pType){
    this._type = pType;
}


}