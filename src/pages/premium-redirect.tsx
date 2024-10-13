import React from 'react';
import RedirectComponent from '../components/RedirectComponent';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedirectPage: React.FC = () => {
  return (
    <div>
      {/* Include the RedirectComponent for automatic redirection */}
      <RedirectComponent url="https://partnerpal.mysellix.io/product/partnerpal-basic-premium-670c2a769fd31"/>
    </div>
  );
};

export default RedirectPage;
