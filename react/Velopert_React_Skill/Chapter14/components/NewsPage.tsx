import Categories from './Categories';
import NewsList from './NewsList';
import { RouteChildrenProps } from 'react-router-dom';
import { category } from './Categories';

interface MatchParams {
  category: category;
}

function NewsPage({ match }: RouteChildrenProps<MatchParams>) {
  const category = match?.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
