import styles from './Home.module.css'
import porcos  from '../img/logos.png'
import LinkButton from '../components/layout/linkButton'


function Home (){
    return(
        <section className={styles.home_container}>
            <h1>bem vindo <span>costs</span></h1>
            <p>comece a gerenciar seus projetos agora mesmo</p>
            <LinkButton to='/projects' text='criar projeto'/>
            <img src={porcos} alt='porco'></img>
        </section>
    )
}
export default Home