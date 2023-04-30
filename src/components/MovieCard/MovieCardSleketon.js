import ContentLoader from 'react-content-loader';

const MovieCardSleketon = props => (
  <ContentLoader
    speed={2}
    width={800}
    height={400}
    viewBox="0 0 1000 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="182" cy="164" r="8" />
    <rect x="20" y="20" rx="0" ry="0" width="200" height="300" />
    <rect x="240" y="50" rx="0" ry="0" width="100" height="10" />
    <rect x="240" y="20" rx="0" ry="0" width="150" height="20" />
    <rect x="240" y="80" rx="0" ry="0" width="130" height="20" />
    <rect x="240" y="110" rx="0" ry="0" width="200" height="10" />
    <rect x="240" y="130" rx="0" ry="0" width="200" height="10" />
    <rect x="240" y="159" rx="0" ry="0" width="130" height="20" />
    <rect x="240" y="190" rx="0" ry="0" width="200" height="10" />
    <rect x="20" y="370" rx="0" ry="0" width="50" height="10" />
    <rect x="20" y="340" rx="0" ry="0" width="130" height="20" />
    <rect x="20" y="390" rx="0" ry="0" width="50" height="10" />
  </ContentLoader>
);

export default MovieCardSleketon;
