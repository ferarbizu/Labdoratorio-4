var entrada = process.openStdin();

entrada.addListener("data", function(d) {
    let content = d.toString().trim();
    if(valido(content)){
        console.log("Valido");
    }else{
        console.log("No Valido");
    }
})

function valido (valor) {
    let pila = [];
    let signo = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    //Recorre todo el contenido de lo que se ingreso
    for (let i = 0; i < valor.length; i++) {
        if(valor[i] === '(' || valor[i] === ')' 
        || valor[i] === '{' || valor[i] === '}' 
        || valor[i] === '['  || valor[i] === ']'){
            if (valor[i] === '(' || valor[i] === '{' || valor[i] === '[' ) {
                pila.push(valor[i]);
            }
            else {
                let ul = pila.pop();
                //Esto solo es para ver si el signo con el que se abre la expresion coincide con la de cierre.
                if (valor[i] !== signo[ul]) {return false};
            }
        }
    }
        if (pila.length !== 0) {return false};

    return true;
}