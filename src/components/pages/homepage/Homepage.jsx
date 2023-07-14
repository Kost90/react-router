import { Link } from 'react-router-dom';
import Usercontext from '../../context/Usercontext'


function Homepage() {
const {user} = Usercontext();


  return (
    <div>
      <ul>
      {user.map((u) => (
        <div key={u.div}>
        <li>{u.name}</li>
        <button type='button'><Link to={`user/${u.id}`}>Album</Link></button>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default Homepage