import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Usercontext from "../../context/Usercontext";

function Userpage() {
  const { albom } = Usercontext();
  const { id } = useParams();

  const userAlboms = albom.filter((element) => element.userId == id);

  console.log(userAlboms)

  return (
    <div>
      <ul>
        {userAlboms.map((element) => (
          <div key={element.id}>
            <li>{element.title}</li>
            <button type="button">
              <Link to={`albomphoto/${element.userId}`}>Photo</Link>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Userpage;
