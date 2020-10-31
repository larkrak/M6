window.onload = function(){

    //Estoy usando visibility porque con este atributo el elemento si que está como tal en la pagina, asi que 
    //al mostrarlo no me moveria otros elementos de la misma.

    /*document.getElementById("textResult").style.visibility="hidden";
    document.getElementById("textResultRandom").style.visibility="hidden";
    document.getElementById("numbersPlayed").style.visibility = "hidden";
    document.getElementById("attempts").style.visibility="hidden";
    document.getElementById("resetM").style.visibility="hidden";
    document.getElementById("textResultC").style.visibility = "hidden"
    document.getElementById("warning").style.visibility = "hidden"*/

    //En los comentarios anteriores estaba ocultando todos los parrafos o cajas donde se me fueran a mostrar elementos
    //Abajo lo he hecho de forma mas eficiente ocultando directamente la clase padre.

    primeNumbers = document.getElementsByClassName("primeNumbers");
    randomNumber = document.getElementsByClassName("randomNumber");
    primes13 = document.getElementsByClassName("mult13");
    calcu = document.getElementsByClassName("calculator");
    primeNumbers[0].style.display = "none";
    randomNumber[0].style.display = "none";
    primes13[0].style.display = "none";
    calcu[0].style.display = "none";

    //Estas constantes son para el ejercicio 2. Una indica el maximo de turnos jugables de una vez, y la otra la he
    //definido para marcar CUANDO se puede jugar y cuando no. Por ejemplo, en caso de que introduzcas 3 veces valores
    //inutiles, he puesto que acabe el juego.

    MAX_TURN = 50;
    JUGABLE = 0;
    randomNumberToGuess = parseInt(Math.random() * (500 - 1) + 1)
}
/**
 * @desc Show div of first exercice and hide the others
 * @param  {} none;
 * @todo Change css atributes to show first div and hide the others.
 * 
 */
function showEx1(){

    document.getElementById("number").value = "";
    document.getElementById("textResult").innerText = "";

    //Primero reinicio los valores y textos de los divs que hubiera (por si estuvieran visibles)
    //Luego muestro el div del ejercicio que se clicka y se ocultan los demas

    primeNumbers[0].style.display = "flex";
    randomNumber[0].style.display = "none";
    primes13[0].style.display = "none";
    calcu[0].style.display = "none";

}

/**
 * @desc Show div of second exercice and hide the others
 * @param  {} none;
 * @todo Change css atributes to show second div and hide the others.
 * @todo Calls @function resetRandom()
 * 
 */

function showEx2(){

    document.getElementById("numberIn").value = "";
    
    primeNumbers[0].style.display = "none";
    randomNumber[0].style.display = "flex";
    primes13[0].style.display = "none";
    calcu[0].style.display = "none";

    document.getElementById("textResultRandom").innerText = "";
    
    document.getElementById("attempts").innerText = "";

    resetRandom();
    
}

/**
 * @desc Show div of second exercice and hide the others
 * @param  {} none;
 * @todo Change css atributes to show second div and hide the others.
 * @todo Get <p> to clear them all.
 * 
 */

function showEx3(){
    randomNumber[0].style.display = "none";
    primeNumbers[0].style.display = "none";
    primes13[0].style.display = "flex";
    calcu[0].style.display = "none";

    listP = document.querySelectorAll(".mult13 .validate p");

    for(i = 0; i < listP.length; i++){
        listP[i].innerText = "";
    }

    document.getElementById("resetM").style.visibility = "hidden"

    
}

/**
 * @desc Show div of second exercice and hide the others
 * @param  {} none;
 * @todo Change css atributes to show second div and hide the others.
 * @todo Get <input> to clear them all
 */

function showEx4(){
    randomNumber[0].style.display = "none";
    primeNumbers[0].style.display = "none";
    primes13[0].style.display = "none";
    calcu[0].style.display = "flex";

    document.getElementById("warning").style.visibility = "hidden"
    document.getElementById("textResultC").innerText = "";
    c = document.querySelectorAll(".calculator input");

    for(i = 0; i<c.length; i++){
        c[i].value =  "";
    }

}

/**
 * 
 * @desc Checks the introduced value to see if its a prime number or not
 * @param  {} none;
 * @todo Receive a number and operate with it and show the result.
 * 
 */


function validatePrime(){

    number = document.getElementById("number").value;
    
    //Cojo el valor que me introducen. Si me introducen mas de un valor, separados por comas, directamente se requerira otro valor

    if (number.toString().trim() == '') {
        document.getElementById("textResult").innerText = "Please, introduce a number";
        document.getElementById("textResult").style.color="red";
        document.getElementById("textResult").style.visibility="visible";
    }else{
        if(isNaN(number)){
            document.getElementById("textResult").innerText = "Please, introduce a valid number";
            document.getElementById("textResult").style.color="red";
            document.getElementById("textResult").style.visibility="visible";
            //Si no fuera numerico, se requerira otro.
        }else{

            isP = false;
            countP = 0;

            //Aqui hago la simple comprobacion de si es primo o no. Cuando el contador de primos es dos, es que ha encontrado los dos divisores
            //n y 1.

            for (x = number; x != 0; x--) {
                
                res = number % x ;

                if (res == 0){
                    countP+=1;
                }
            }

            if(countP == 2){
                document.getElementById("textResult").style.visibility="visible";
                document.getElementById("textResult").style.color="green";
                document.getElementById("textResult").innerText = "Yeah! The number "+number+" is prime!!";
            }else{
                document.getElementById("textResult").style.visibility="visible";
                document.getElementById("textResult").style.color="red";
                document.getElementById("textResult").innerText = "Nope! The number "+number+" is not prime!!";
            }

            //Muestro el resultado

        }
    }
}

count = 0;
countNaN = 0;

/**
 * 
 * @desc Generate a random number(1-500) and make the user guess it
 * @param  {} none;
 * @todo Show if the user number its higher or lower, with 50 tries. 
 * @todo Stop the game at 50 tries or guessing the number. Calls @function getPercent()
 * @todo To get the proximity to turn 0
 * 
 */

function validateRandom(){
    
    document.getElementById("textResultRandom").innerHTML = "";
    document.getElementById("textResultRandom").style.visibility="visible";
    document.getElementById("attempts").style.visibility="visible";
    document.getElementById("numbersPlayed").style.visibility = "visible";
    nPlayed = document.getElementById("numbersPlayed");
    
    numberIn = document.getElementById("numberIn").value;    
    
    if(isNaN(numberIn && JUGABLE == 0)){
        document.getElementById("textResultRandom").innerText = "Please, introduce a number!!";
        
        //Aqui unicamente se entra cuando se introduce un valor no numerico y jugable es 0 (se puede seguir jugando)
        //Llamo a getPercent para mostrar igualmente los intentos, ya que seguira habiendo los que hubieran durante 3 intentos erroneos

        getPercent();

    }else{

        if(numberIn != "" && JUGABLE == 0){
        //Como no ha entrado en la condicion anterior, ya solo me queda ver que realmente ha introducido algo, pues ese algo ha de ser un numero
        //Jugable ha de ser 0 para seguir jugando. Sumo el contador para ir restando turnos.
            count += 1;

            if(numberIn >= 0 && numberIn < 500){
                //Si el numero sale del rango
                if(count < MAX_TURN && JUGABLE == 0){
                    //Si se han acabado los turnos
                    percent = (count * 100 / MAX_TURN);
                        
                    if(percent < 60){
                        nPlayed.innerText = nPlayed.innerText + "[" +numberIn+"]";
                        document.getElementById("attempts").innerHTML = "<p style='color:green'>"+(MAX_TURN - count)+" attempts left!!</p>";
                    }
                    if(percent >= 60 && percent < 80){
                        document.getElementById("attempts").innerHTML = "<p style='color:orange'>"+(MAX_TURN - count)+" attempts left!!</p>";
                    }
                    if(percent >= 80 && percent < 90){
                        document.getElementById("attempts").innerHTML = "<p style='color:red'>"+(MAX_TURN - count)+" attempts left!!</p>";
                    }
                    if(percent >= 90){
                        document.getElementById("attempts").innerHTML = "<p style='color:white;background-color: #cd043b'>"+(MAX_TURN - count)+" attempts left!!</p>";
                    }
                    
                }else{
                    //Si los turnos han acabado, hacemos jugable a 1 (que NO se puede seguir jugando) y reiniciamos los contadores
                    count = 0;
                    countNaN = 0;
                    JUGABLE = 1;
                    document.getElementById("random").style.display = "hidden";
                    document.getElementById("textResultRandom").innerText = "";
                    document.getElementById("numbersPlayed").innerText = "Sorry the number was: ["+randomNumberToGuess+"]";
                    document.getElementById("attempts").innerHTML = "<span style='color:red'>You lost the game </span><button style='border:none;padding:10px' onclick='resetRandom()'>Reset</button>";
                }
        
        
                if(numberIn > randomNumberToGuess){
                    document.getElementById("textResultRandom").innerText = "The number you are looking for is smaller than yours!!";
                }else{
                    document.getElementById("textResultRandom").innerText = "The number you are looking for is bigger than yours!!";
                }

                //Comprobaciones de si el numero es mayor o menor
        
                if(numberIn == randomNumberToGuess){
                    count = 0;
                    countNaN = 0;
                    document.getElementById("textResultRandom").innerHTML = "<p style='color:green'>Congratulations!! That's the number</p>";
                    document.getElementById("attempts").innerHTML = "<button style='border:none;padding:10px' onclick='resetRandom()'>Reset</button>";
                }

                //Si se acierta

            }else{
                document.getElementById("textResultRandom").innerText = "Number out of range";
                getPercent();

                //Si te pasas de rango. Llamo a getPercent para que se muestre igual con colores y el numero de turnos restantes
            }

        }else{
            if(JUGABLE == 1){
                document.getElementById("textResultRandom").innerText = "";
            }else{
                document.getElementById("textResultRandom").innerText = "Please, introduce a number!!";
                getPercent();

                //Aqui solo entrara si jugable vale 0 (que SI se puede jugar) pero no se ha introducido nada

            }
            
        }

    }
}

/**
 * 
 * @desc Checks how close user is to turn 0
 * @param  {} none;
 * @todo Depending of the percentage, show a message with a color.
 * 
 */

function getPercent(){
    percent = (count * 100 / MAX_TURN);
            
    if(percent < 60 && JUGABLE == 0){
        document.getElementById("attempts").innerHTML = "<p>You have to introduce a number to play</p><p style='font-size:15px;color:green'>("+(MAX_TURN - count)+" attempts left!!)</p>";
    }
    if(percent >= 60 && percent < 80 && JUGABLE == 0){
        document.getElementById("attempts").innerHTML = "<p>You have to introduce a number to play</p><p style='color:orange'>("+(MAX_TURN - count)+" attempts left!!)</p>";
    }
    if(percent >= 80 && percent < 90 && JUGABLE == 0){
        document.getElementById("attempts").innerHTML = "<p>You have to introduce a number to play</p><p style='color:red'>("+(MAX_TURN - count)+" attempts left!!)</p>";
    }
    if(percent >= 90 && JUGABLE == 0){
        document.getElementById("attempts").innerHTML = "<p>You have to introduce a number to play</p><p style='color:white;background-color: #cd043b'>("+(MAX_TURN - count)+" attempts left!!)</p>";
    }
    countNaN += 1;

    if(countNaN >= 3){
        JUGABLE = 1;
        document.getElementById("attempts").innerHTML = "<span style='color:red'>You lost the game </span><button style='border:none;padding:10px' onclick='resetRandom()'>Reset</button>";
    }
}


/**
 * 
 * @desc Get the multiples of 13 until 2000
 * @param  {} none;
 * @todo Calculate the multiples, the sumation of them and the multiplication untill it gets infinity
 * 
 */


function multiples(){

    mult = 0;
    totalS = 0;
    indexM = 0;
    totalM = 1;
    multICanGet = 1;
    arr = [];
    document.getElementById("titleMultiples").innerText = "These are the multiples of 13: " ;
    document.getElementById("titleMultiples").style.color = "#0088a9";
    document.getElementById("titleSum").innerText = "This is the addition of all the multiples: ";
    document.getElementById("titleSum").style.color = "#0088a9";
    document.getElementById("titleM").innerText = "This is the multiplication of all the multiples: ";
    document.getElementById("titleM").style.color = "#0088a9";

    document.getElementById("resetM").style.visibility = "visible";

    document.getElementById("contentMultiples").innerText = "";

    //Por el rango que se requiere, 2000, voy recogiendo los multiples e introdiciendolos en un array, ademas de mostrarlos
    //e ir haciendo la suma para mas adelante mostrarla, asi como la multiplicacion
    //Para conseguir el ultimo valor calculable, he necesitado el array. Cuando el resultado de la multiplicacion es INFINITO
    //es cuando recojo el valor que tiene ese multiple, lo guardo en una variable para luego recorrer el array hasta ese valor
    //

    for (index = 1; mult < 2000; index++) {

        mult = 13 * index;
        arr.push(mult)
        paragraph = document.getElementById("contentMultiples");
        if(mult <= 2000){
            paragraph.innerText = paragraph.innerText + " ["+mult+"] ";
        }
        totalS = totalS + mult;

        if(isFinite(totalM)){
            totalM = totalM * mult;
            if(isFinite(totalM) == false){
                indexM = mult;
            }
        }
    } 
    for (index = 0; index < arr.indexOf(indexM); index++) {
        multICanGet = multICanGet * arr[index];
    }

    if(isFinite(totalM)){
        document.getElementById("contentM").innerText = " ["+totalM+"] ";
    }else{
        document.getElementById("contentM").innerText = "Sorry, the value im getting is -> ["+totalM+"] <-. Cannot calculate it! But, this is the last number I could get: " +multICanGet;
    }

    document.getElementById("contentSum").innerText = " ["+totalS+"] ";
    
}

/**
 * 
 * @desc Simple mathematical calculation in 2 <input>
 * @param  {} none;
 * @todo Get both numbers, the operator, and show the result
 * 
 */

function validateC(){

    numbers = document.getElementsByClassName("numberIn");
    operator = document.getElementById("operator").value;

    document.getElementById("warningC").innerText = "";
    document.getElementById("textResultC").style.visibility = "visible";
    document.getElementById("warning").style.visibility = "visible";

    n1 = numbers[0].value;
    n2 = numbers[1].value;

    if(!isNaN(n1) && !isNaN(n2)){

        //Switch dependiendo del operador

        switch(operator){

            case '+':

                if(isNaN(parseFloat(n1) + parseFloat(n2))){
                    document.getElementById("textResultC").innerText = "Couldnt calculate";
                    document.getElementById("warningC").innerText = "";
                    break;
                }else{
                    document.getElementById("warningC").innerText = "";
                    document.getElementById("warningOperator").innerText = "";
                    document.getElementById("textResultC").innerText = "Result= " + (parseFloat(n1) + parseFloat(n2));
                    break;
                }
            case '-':
                if(isNaN(parseFloat(n1) - parseFloat(n2))){
                    document.getElementById("textResultC").innerText = "Couldnt calculate";
                    document.getElementById("warningC").innerText = "";
                    break;
                }else{
                    document.getElementById("warningC").innerText = "";
                    document.getElementById("warningOperator").innerText = "";
                    document.getElementById("textResultC").innerText = "Result= " + (parseFloat(n1) - parseFloat(n2));
                    break;
                }
            case '*':

                if(isNaN(parseFloat(n1) * parseFloat(n2))){
                    document.getElementById("textResultC").innerText = "Couldnt calculate";
                    document.getElementById("warningC").innerText = "";
                    break;
                }else{
                    document.getElementById("warningC").innerText = "";
                    document.getElementById("warningOperator").innerText = "";
                    document.getElementById("textResultC").innerText = "Result= " +(parseFloat(n1) * parseFloat(n2));
                    break;
                }
            case '/':

                if(isNaN(parseFloat(n1) / parseFloat(n2))){
                    document.getElementById("textResultC").innerText = "Couldnt calculate";
                    document.getElementById("warningC").innerText = "";
                    break;
                }else{
                    document.getElementById("warningC").innerText = "";
                    document.getElementById("warningOperator").innerText = "";
                    document.getElementById("textResultC").innerText = "Result= " +(parseFloat(n1) / parseFloat(n2));
                    break;
                }
            case '%':
                if(isNaN(parseFloat(n1) % parseFloat(n2))){
                    document.getElementById("textResultC").innerText = "Couldnt calculate";
                    document.getElementById("warningC").innerText = "";
                    break;
                }else{
                    document.getElementById("warningC").innerText = "";
                    document.getElementById("warningOperator").innerText = "";
                    document.getElementById("textResultC").innerText = "Result= " +(parseFloat(n1) % parseFloat(n2));
                    break;
                }

            default:
                document.getElementById("warningC").innerHTML = "<p>ERROR! Operator not found!!</p>";
                break;

        }
        if(!n1){
            document.getElementById("textResultC").innerText = "";
            document.getElementById("warningC").innerText = "ERROR, nothing found in first field!!";
            if(!n1 && !n2){
                document.getElementById("warningC").innerText = "ERROR, nothing found in both fields!!";
            }
        }
        if(!n2){
            document.getElementById("textResultC").innerText = "";
            document.getElementById("warningC").innerText = "ERROR, nothing found in second field!!";
            if(!n1 && !n2){
                document.getElementById("warningC").innerText = "ERROR, nothing found in both fields!!";
            }
        }



    }else{

        document.getElementById("warningC").style.color = "red";
        document.getElementById("warningC").innerText = "Please, introduce numbers!!"
    }

    

}

/**
 * 
 * @desc Generate another random number
 * @param  {} none;
 * @todo Unshow the elements and clear them and get another random number
 * 
 */

function resetRandom(){

    //Cuando se acaba el juego, para que se genere un nuevo numero aleatorio.

    count = 0;
    countNaN = 0;
    JUGABLE = 0;
    randomNumberToGuess = parseInt(Math.random() * (500 - 1) + 1)
    document.getElementById("numberIn").value = "";
    document.getElementById("textResultRandom").innerText = "";
    document.getElementById("numbersPlayed").innerText = "";
    document.getElementById("attempts").innerText = "";
    document.getElementById("numbersPlayed").style.visibility = "hidden";
    document.getElementById("textResultRandom").style.visibility = "hidden";
    document.getElementById("attempts").style.visibility = "hidden";
    //La linea de arriba, con visibility hidden en lugar de display none, no se porque, tenia cierto retraso al esconderse el boton por eso uso display
}

/**
 * 
 * @desc clear the <p> tag of the multiples div.
 * @param  {} none;
 * 
 */

function resetM(){

    childs = document.querySelectorAll(".showMultiples p");

    for(i = 0; i < childs.length; i++){
        childs[i].innerText = "";
    }

    //Para limpiar la caja del ejercicio de los multiples de 13

    document.getElementById("resetM").style.visibility = "hidden";

}

/**
 * 
 * @desc Clear the calculator
 * @param  {} none;
 * 
 */

function resetC(){

    col = document.querySelectorAll(".validateC input");

    for(i = 0; i < col.length; i++){
        col[i].value = "";
    }

    //Para limpiar la calculadora

    document.getElementById("warning").style.visibility = "hidden";
    document.getElementById("textResultC").style.visibility = "hidden";
    document.getElementById("textResultC").innerText = "";

}
