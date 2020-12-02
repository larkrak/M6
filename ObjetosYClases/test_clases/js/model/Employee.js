class Employee extends Person{
    _salari;

    constructor(pDNI, pName, pSurname, pPhone, pBirthdate, pSalary){
        super(pDNI, pName, pSurname, pPhone, pBirthdate);

        this._salary = pSalary;

    }

    get Salary(){
        return this._salary;
    }

    set Salary(Salary){
        this._salary = Salary;
    }

}

