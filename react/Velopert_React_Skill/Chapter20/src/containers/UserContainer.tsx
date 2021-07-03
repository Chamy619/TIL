import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { usePreloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';
import { RootState } from '../modules';

interface IUserContainerProps {
  id: string;
}

function UserContainer({ id }: IUserContainerProps) {
  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(parseInt(id))));

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(parseInt(id)));
  }, [dispatch, id, user]);

  if (!user) {
    return null;
  }

  return <User id={user.id} email={user.email} username={user.username} name={user.name} />;
}

export default UserContainer;
