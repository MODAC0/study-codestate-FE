import { graphql } from "@octokit/graphql";
import { useEffect, useState } from "react";
import Output from "./Output";

function App() {
  const token = process.env.REACT_APP_TOKEN;
  const [repo, setRepo] = useState({});

  const getRepo = async () => {
    const { repository } = await graphql(
      `
        {
          repository(owner: "codestates-seb", name: "agora-states-fe") {
            discussions(first: 10) {
              edges {
                node {
                  id
                  title
                  createdAt
                  author {
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      `,
      {
        headers: {
          authorization: `token ${token}`,
        },
      }
    );
    return repository;
  };

  useEffect(() => {
    getRepo()
      .then((data) => setRepo(data))
      .catch((error) => console.log(Error, error));
  }, []);

  return (
    <div className="App">
      <Output repo={repo} />
    </div>
  );
}

export default App;
