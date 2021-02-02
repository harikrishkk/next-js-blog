import { server } from '../config';
import ArticleList from '../components/ArticleList';
const Home = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

// getStaticProps fetch data at build time, getServerSideProps
// fetch data on every request, getStaticPaths - dynamically
// generate paths based on data we fetch

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
