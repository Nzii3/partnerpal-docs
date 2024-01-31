import React from 'react';

import styles from './premium.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Community() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Premium" description="Check out Sentry+ and some options to better enhance your server">
      <header className="hero">
        <div className="container text--center">
          <h1>Sentry+ (Premium)</h1>
          <div className="hero--subtitle">
          <p>
          </p>
          </div>
          <img className={classnames(styles.headerImg)} src="img/logo-yellow.png" />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row margin-vert--lg">
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                  <i className={classnames(styles.icon, styles.discord)}></i>
                </div>
                <div className="card__body">
                  <p>Join the official Sentry discord server</p>
                </div>
                <div className="card__footer">
                  <Link to="https://r.nziie.xyz/sentry-support" className="button button--outline button--primary button--block">Join</Link>
                </div>
              </div>
            </div>

            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                  <i className={classnames(styles.icon, styles.twitter)}></i>
                </div>
                <div className="card__body">
                  <p>Follow &#64;4realnziie (Head Developer) on Twitter (X)</p>
                </div>
                <div className="card__footer">
                  <Link to="https://twitter.com/4realnziie" className="button button--outline button--primary button--block">Follow &#64;4realnziie</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Community;