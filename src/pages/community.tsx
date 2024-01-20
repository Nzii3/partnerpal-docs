import React from 'react';

import styles from './community.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Community() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Support" description="Where to ask questions and find your soul mate">
      <header className="hero">
        <div className="container text--center">
          <h1>Support</h1>
          <div className="hero--subtitle">
          <p>
                Sentry offers a community and support staff ready to help with any questions, bugs, or feature requests. Give our <a href="https://r.nziie.xyz/sentry-support">support server</a> a shot for assistance. For inquries that may need faster and quicker attention (such as <strong>premium</strong>), feel free to create a ticket in the <code>#premium</code> channel. Support tickets are <strong>only for premium inquries!</strong>
                </p>
          </div>
          <img className={styles.headerImg} src="img/logo-yellow.png" />
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