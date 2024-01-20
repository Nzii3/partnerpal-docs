import React from 'react';
import RedirectComponent from '../components/RedirectComponent';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedirectPage: React.FC = () => {
  return (
    <div>
      {/* Include the RedirectComponent for automatic redirection */}
      <RedirectComponent url="https://discord.com/oauth2/authorize?response_type=code&client_id=999132132754600016&scope=bot%20applications.commands&permissions=1497736146166&redirect_uri=https%3A%2F%2Fsentry.nziie.xyz"/>
    </div>
  );
};

export default RedirectPage;