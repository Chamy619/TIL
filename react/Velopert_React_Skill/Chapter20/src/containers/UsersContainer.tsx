import { useEffect } from 'react';
import { connect } from 'react-redux';

import Users from '../components/Users';
import { RootState } from '../modules';
import { getUsers, IUser } from '../modules/users';
import { Preloader } from '../lib/PreloadContext';

interface IProps {
  users: null | IUser[];
  getUsers: () => void;
}

function UsersContainer({ users, getUsers }: IProps) {
  useEffect(() => {
    if (users) {
      return;
    }
    getUsers();
  }, [getUsers, users]);

  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
}

const mapStateToProps = (state: RootState) => ({ users: state.users.users });

export default connect(mapStateToProps, { getUsers })(UsersContainer);
