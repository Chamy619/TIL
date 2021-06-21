import styled from 'styled-components';
import axios from 'axios';
import NewsItem, { Article } from './NewsItem';
import { category } from './Categories';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

interface NewsLitsProps {
  category: category;
}

function NewsList({ category }: NewsLitsProps) {
  //   const [articles, setArticles] = useState<Article[] | null>(null);
  //   const [loading, setLoading] = useState(false);
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8333f18b588f43d9ac2d6dd7180aa76f`);
  }, [category]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       try {
  //         const response = await axios.get(
  //           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8333f18b588f43d9ac2d6dd7180aa76f`,
  //         );
  //         setArticles(response.data.articles);
  //         setLoading(false);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     fetchData();
  //   }, [category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  const articles: Article[] = response.data.articles as Article[];

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
