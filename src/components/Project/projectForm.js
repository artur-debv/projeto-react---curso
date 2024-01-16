import styles from "./projectForm.module.css";
import Input from "../form/input";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="home do projeto"
        name="name"
        placeholder="insira o nome do projeto"
      />
      <div>
        <input type="number" placeholder="insira o orçamento total"></input>
      </div>
      <div>
        <select name="category_id">
          <option disabled>selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="criar projeto"></input>
      </div>
    </form>
  );
}

export default ProjectForm;
