import { Link } from 'react-router-dom';
import { IUser } from '../modules/users';

interface IProps {
  users: null | IUser[];
}

function Users({ users }: IProps) {
  if (!users) return null;
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
