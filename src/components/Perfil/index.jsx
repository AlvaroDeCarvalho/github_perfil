// criamos uma função com aronFunction ou com o propio funcrion
import styles from './Perfil.module.css';
//export default () => {
const Perfil = ({nomeUsuario }    /*props*/ ) => {
//                                  const {endereco,nome} = props
return (
    <>
    {/* JSON.stringfy(props) */}
        
        <header className={styles.header}>
        <img src={`https://github.com/${nomeUsuario}.png`} className={styles.perfil}/>
        <h1 className={styles.titulo}>{nomeUsuario}</h1>
        
        </header>
        </>
    )
}
export default Perfil 
