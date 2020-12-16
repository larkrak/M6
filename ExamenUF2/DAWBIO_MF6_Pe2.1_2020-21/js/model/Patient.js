/**
 * @description 
 * @author Ismael Collado
 * @class Patient
 */
class Patient {
    _id;
    _illness;
    _analysisType;
    _fullName;
    _DNACode;
    _age;

    /**
     * 
     * @param {*} pId 
     * @param {*} pIllness 
     * @param {*} pAnalysisType 
     * @param {*} pFullName 
     * @param {*} pDNACode 
     * @param {*} pAge 
     */

constructor(pId, pIllness, pAnalysisType, pFullName, pDNACode, pAge) {
        this._id = pId;
        this._illness = pIllness;
        this._analysisType = pAnalysisType;
        this._fullName = pFullName;
        this._DNACode = pDNACode;
        this._age = pAge;
    }

    get Id(){
        return this._id;
    }

    set Id(pId){
        this._id = pId;
    }

    get Illness(){
        return this._illness;
    }

    set Illness(pIllness){
        this._illness = pIllness;
    }

    get AnalysisType(){
        return this._analysisType;
    }

    set AnalysisType(pAnalysisType){
        this._analysisType = pAnalysisType;
    }

    get FullName(){
        return this._fullName;
    }

    set FullName(pFullName){
        this._fullName = pFullName;
    }

    get DNACode(){
        return this._DNACode;
    }

    set DNACode(pDNACode){
        this._DNACode = pDNACode;
    }

    get Age(){
        return this._age;
    }

    set Age(pAge){
        this._age = pAge;
    }
}