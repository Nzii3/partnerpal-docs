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
    <h2 className='center' style={{ textAlign: 'center' }}>
      Redirecting to <a href={url}>{url}</a>...
    </h2>
  );
};

export default RedirectComponent;
