import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code will run after the component has rendered
    // Example of fetching data from a JSONPlaceholder API endpoint
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(result => setData(result));
     // Clean-up function (optional) - runs before the next effect or when the component unmounts
    return () => {
      // Perform clean-up, like canceling network requests or cleaning subscriptions
    };
  }, []); // The empty dependency array means this effect will only run once, equivalent to componentDidMount

  return (
    <div>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ExampleComponent;
