class Person{

    //Properties definition
    _DNI;
    _name;
    _surname;
    _phone;
    _birthdate;

/**
 * Creates an instance of Person.
 * @param {*} pDNI
 * @param {*} pName
 * @param {*} pSurname
 * @param {*} pPhone
 * @param {*} pBirthdate
 * @memberof Person
 */
constructor(pDNI, pName, pSurname, pPhone, pBirthdate) {
        this._DNI = pDNI;
        this._name = pName;
        this._surname = pSurname;
        this._phone = pPhone;
        this._birthdate = pBirthdate;
	}

get DNI(){
    return this._DNI;
}

set DNI(pDNI){
    this._DNI = pDNI;
}

get Name(){
    return this._name;
}

set Name(pName){
    this._Name = pName;
}

get Surname(){
    return this._surname;
}

set Surname(pSurname){
    this._surname = pSurname;
}

get Phone(){
    return this._phone;
}

set Phone(pPhone){
    this._phone = pPhone;
}

get Birthdate(){
    return this._birthdate;
}

set Birthdate(pBirthdate){
    this._birthdate = pBirthdate;
}


}