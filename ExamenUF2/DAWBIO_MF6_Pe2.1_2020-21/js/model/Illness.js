class Illness{

    _id;
    _name;

    /**
     * 
     * @param {*} pId 
     * @param {*} pName 
     */
    
    constructor(pId, pName){
        this._id = pId;
        this._name = pName;
    }

    get Id(){
        return this._id;
    }

    set Id(pId){
        this._id = pId;
    }

    get Name(){
        return this._name;
    }

    set Name(pName){
        this._name = pName;
    }

}