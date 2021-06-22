import HomePage from '../src/components/pages/HomePage/HomePage';

export default HomePage;

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
