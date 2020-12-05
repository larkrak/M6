class Product extends ProductType {
    _name;
    _code;
    _tested;
    _entryDate;

    constructor(pID, pType, pName, pCode, pTested, pEntryDate) {
        super(pID, pType);

        this._name = pName;
        this._code = pCode;
        this._tested = pTested;
        this._entryDate = pEntryDate;
    }
    
    get Name(){
        return this._name;
    }

    set Name(pName){
        this._name = pName;
    }

    get Code(){
        return this._code;
    }

    set Code(pCode){
        this._code = pCode;
    }

    get Tested(){
        return this._tested;
    }

    set Tested(pTested){
        this._tested = pTested;
    }

    get Date(){
        return this._entryDate;
    }

    set Date(pEntryDate){
        this._entryDate = pEntryDate;
    }
}