import React from 'react';
import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../css/custom.css';

interface DefaultLayoutProps {
    title?: string,
    description?: string,
    children?: any,
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
  const context = useDocusaurusContext();
  const siteConfig = context.siteConfig;
    return (
      
        <>
            <Head>
                <title>{ title } - { siteConfig.tagline }</title>
                <meta name="description" content={ description } />
                <meta property="og:description" content={ description } />
                <meta property="og:title" content={ title } />
                <meta name="theme-color" content="#5865f2" />
            </Head>
            <Layout>
                { children }
            </Layout>
        </>
    );
};

export default DefaultLayout;
