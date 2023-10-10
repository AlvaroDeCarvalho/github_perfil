import { useState } from "react"

const Formulario = () => {
    //o useState retornara um valor e uma função para alterar esse valor
    // para isso, usaremos uma desestruturação de array (o let [valor, setValor])
    let numAnteior = 0; 
    function exemplo(evento) {
    let numAtual = evento.target.value; 
    let resultado = numAtual + numAnteior;
    numAnteior = numAtual; 
    return console.log(resultado); 
    }

    return (
        <>
        <form>
        <input type="number" placeholder="Digite seu numero " onChange={exemplo} />
        </form>
        </>
    )
}