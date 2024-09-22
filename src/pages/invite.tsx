import React from 'react';
import RedirectComponent from '../components/RedirectComponent';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedirectPage: React.FC = () => {
  return (
    <div>
      {/* Include the RedirectComponent for automatic redirection */}
      <RedirectComponent url="https://discord.com/oauth2/authorize?client_id=1275655805093281863&permissions=563227583180017&integration_type=0&scope=bot+applications.commands"/>
    </div>
  );
};

export default RedirectPage;
