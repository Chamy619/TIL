import { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';
import { RootState } from '../modules';

interface ISampleContainerProps {
  getPost: any;
  getUsers: any;
  post: any;
  users: any;
  loadingPost: boolean;
  loadingUsers: boolean;
}

function SampleContainer({ getPost, getUsers, post, users, loadingPost, loadingUsers }: ISampleContainerProps) {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return <Sample loadingPost={loadingPost} loadingUsers={loadingUsers} post={post} users={users} />;
}

const mapStateToProps = (state: RootState) => ({
  post: state.sample.post,
  users: state.sample.users,
  loadingPost: state.loading['sample/GET_POST'],
  loadingUsers: state.loading['sample/GET_USERS'],
});

export default connect(mapStateToProps, { getPost, getUsers })(SampleContainer);
