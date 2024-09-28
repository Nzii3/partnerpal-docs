import React from 'react';

import styles from './premium.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Community() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Premium" description="Check out PartnerPal premium to better enhance your server growth!">
      <header className="hero">
        <div className="container text--center">
          <h1 className='gold-cycle'>PartnerPal Premium</h1>
          <div className="hero--subtitle">
          <p>
          </p>
          </div>
          <img className={classnames(styles.headerImg)} src="img/partnerpal-beta-icon.png" />
        </div>
      </header>
      <main>
        <div className="container">
          <h2 className="text--center" id="bronze">Basic Premium</h2>
          <div className="row margin-vert--lg">
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-gem" style={{'fontSize': '3em'}} bounce />
                </div>
                <div className="card__header">
                <h2>Bronze ($2.99/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Lower cooldowns (5 minutes instead of 10 minutes for <mention>/partner</mention>)</li>
                  <li>Partner with 10 servers at once every 30 minutes with <mention>/partner-mass</mention></li>
                  <li>Customizable advertisement banner (stand out)</li>
                  <li>Customizable advertisement embed color (stand out)</li>
                  <li>7 custom button actions instead of 3</li>
                  <li>7 custom menu option actions instead of 3</li>
                  <li>Other increased limits</li>
                  <li><a href="/support">Premium support</a></li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="/premium" className="button button--outline button--primary button--block">Purchase</Link>
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
