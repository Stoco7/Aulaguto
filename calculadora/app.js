// SOMA
function soma(a,b){
    let total = parseFloat(a)+parseFloat(b)
    return total
}

document.getElementById("btnSoma").addEventListener("click", function() {
        let n1 = document.getElementById("n1").value
        let n2 = document.getElementById("n2").value
        document.getElementById("resultado").value = soma(n1,n2)
    })

// SUBTRAÇÃO
function subtracao(a,b){
    let total = parseFloat(a)-parseFloat(b)
    return total
}

document.getElementById("btnSubtrai").addEventListener("click", function() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    document.getElementById("resultado").value = subtracao(n1,n2)
})

// DIVISÃO
function divisao(a,b){
    let total = parseFloat(a)/parseFloat(b)
    return total
}

document.getElementById("btnDivide").addEventListener("click", function() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    document.getElementById("resultado").value = divisao(n1,n2)
})

// MULTIPLICAÇÃO
function multiplicacao(a,b){
    let total = parseFloat(a)*parseFloat(b)
    return total
}

document.getElementById("btnMultiplica").addEventListener("click", function() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    document.getElementById("resultado").value = multiplicacao(n1,n2)
})