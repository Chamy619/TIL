import { RouteComponentProps } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

interface IPerson {
  name: string;
  description: string;
}

interface IData {
  chamy: IPerson;
  velopert: IPerson;
  [key: string]: IPerson;
}

const data: IData = {
  chamy: {
    name: '양채훈',
    description: '리액트를 배우는 개발자',
  },
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
};

interface IMatch {
  username: string;
}

const Profile = ({ match }: RouteComponentProps<IMatch>) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
