import { useState, useEffect } from "react";

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')
    

    useEffect(() => {

        console.log('o estado nome mudou ')
    }, [nome])
    /*tudo dentro do array apos a virgula sera usado como referencia quando o estado se alterar.
    ou seja, o bloco de execução da arrryFuncion sera executado quando algum elemento
     do array se alterar */


    useEffect(() => {
        console.log('materia A mudou para ' +materiaA)
    },[materiaA])
    

    const alteraNome = (evento) => {
        setNome(evento.target.value)
        /* 
        setNome(estadoAnterior => {
            
            console.log(estadoAnterior) exibindo o estado anterior ao evento que acabou de acontecer

            IMUTABILIDADE 

            o estado anterior é o estado que a variavel nome estava antes da atualização
            aqui nos nao alteramos nenhum valor, ou criamos um novo valor,
            nos estamos basicamente zerando um valor e adicionando o valor novo, no caso o valor 
            anterior (SUBSTITUIÇÃO TOTAL DO VALOR)=> PURE FUNCTION 

            retornando o novo valor

            return evento.target.value
        }) 
        */
    }
    
    const renderizaFormulario = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma/3

        if(media >= 7){
            return (
                <>
                <p>ola {nome}, voce foi aprovado</p>
                </>
            )
        }else{
            return (
                <>
                <p>ola {nome}, voce foi reprovado, otario</p>
                </>
            )
        }
    }

    return(
        <form>
            {
                /* 
                
                teremos que utilizar o .map, porque ele passa por cada item e 
                faz o retorno de cada elemento do array. no caso a baixo eu crio uma
                aronFunction dentro do parametro MAP onde ele retornarar um item, que é
                um elemento do array, dentro de um <li> </li>
                */
                
                [1,2,3,4,5].map(item =>(
                    <li>{item}</li>
                    
                    ))
        }


            <input type="text" placeholder="seu nome" onChange ={alteraNome}/>
            <input type="number" placeholder="nota A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="nota B" onChange={(evento) => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota C" onChange={(evento) => setMateriaC(parseInt(evento.target.value))   } />
            
            {
                renderizaFormulario()
            }
        </form>
    )
}

export default Formulario 