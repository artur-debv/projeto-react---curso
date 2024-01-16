import styles from "./projects.module.css"
import ProjectForm from "../components/Project/projectForm"

function Projects (){
    return (
        <div className={styles.projects_container}>
            <h1>Criar projeto</h1>
            <p>crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default Projects