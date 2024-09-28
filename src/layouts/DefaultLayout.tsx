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
                <meta name="description" content="Introducing PartnerPal: Effortlessly grow your Discord server while ensuring a natural, organic experience." />
                <meta property="og:description" content="Introducing PartnerPal: Effortlessly grow your Discord server while ensuring a natural, organic experience." />
                <meta property="og:title" content={ title } />
                <meta name="theme-color" content="#3498db" />
            </Head>
            <Layout>
                { children }
            </Layout>
        </>
    );
};

export default DefaultLayout;
