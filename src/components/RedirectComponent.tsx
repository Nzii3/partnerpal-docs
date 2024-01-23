import React, { useEffect } from 'react';

interface RedirectComponentProps {
  url: string;
}

const RedirectComponent: React.FC<RedirectComponentProps> = ({ url }) => {
  useEffect(() => {
    // Redirect to the specified URL
    window.location.replace(url);
  }, [url]); // Include 'url' in the dependency array to react to changes in the URL prop

  // You can render a message or loading indicator here if needed
  return (
    null
  );
};

export default RedirectComponent;