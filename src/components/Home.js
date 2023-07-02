
import { useSelector } from "react-redux";
import Main from "./Main";
import "./context.css";

const Home = () => {
  const isLight = useSelector((state)=>state.isLight);

  return (
    <div className={isLight ? "light" : "dark"}>
      <Main />
      
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
        temporibus quasi dolor, velit commodi nostrum quas omnis id magnam
        soluta debitis ad necessitatibus aliquid quia recusandae voluptatem
        ipsa. Ullam quibusdam nemo ad commodi quidem nostrum, eius repudiandae
        iure! Natus nihil blanditiis ipsa perferendis delectus dolores
        obcaecati, ex modi eveniet, doloribus id laudantium, facere vitae?
        Incidunt, reiciendis quia nemo delectus obcaecati doloremque ab tempora,
        excepturi, corporis laborum totam distinctio est eveniet architecto
        nulla id! Nihil recusandae fuga beatae aut, iusto eum reprehenderit.
        Sapiente deserunt, molestias dolorum a veniam ut numquam dolorem
        similique officia quos, odio saepe sunt velit deleniti quis debitis?.
      </p>
    </div>
  );
};

export default Home;