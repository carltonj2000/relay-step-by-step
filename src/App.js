import React from "react";
import "./App.css";
import fetchGraphQL from "./fetchGraphQL";

const { useState, useEffect } = React;

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }
        const data = response.data;
        setName(data.repository.name);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{name != null ? `Repository: ${name}` : "Loading"}</p>
      </header>
    </div>
  );
}

export default App;
