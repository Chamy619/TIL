import { IUser } from '../modules/users';

function User({ email, name, username }: IUser) {
  return (
    <div>
      <h1>
        {username} ({name})
      </h1>
      <p>
        <b>e-mail:</b> {email}
      </p>
    </div>
  );
}

export default User;
