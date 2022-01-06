import {
  useQuery,
  gql
} from "@apollo/client";

const PROFILE_QUERY = gql`
  query SampleQueries  {
    posts {
        id
        data {
          title
          body {
            text
          }
        }
      }
    
  }
`;

const Profile = () => {
  const { client, loading, data } = useQuery(
    PROFILE_QUERY,
    { fetchPolicy: "network-only" }
  );

  if (loading) {
    return <p className="navbar-text navbar-right">Loading...</p>;
  }

  if (data) {
    return (
      <span>
        <p className="navbar-text navbar-right">
          &nbsp;
          <button
          >
            Log out
          </button>
        </p>
      </span>
    );
  }

  return (
    <p className="navbar-text navbar-right">
      <a href="/login/github">Log in with GitHub</a>
    </p>
  );
}

export default Profile;