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
          {/* <h2 className="text--center" id="bronze">Basic Premium</h2> */}
          <div className="row margin-vert--lg">
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-gem" style={{'fontSize': '3em'}} bounce />
                </div>
                <div className="card__header">
                <h2>Basic ($2.99/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Lower cooldowns for commands</li>
                  <li>Partner with 5 servers at once every 45 minutes <strong>automatically</strong> with <mention>/partner-mass</mention> (turn on in <mention>/settings</mention>)</li>
                  <li>Increased character limit for advertisement, <strong>4,000</strong> instead of <strong>2,000</strong> (use <mention>/settings</mention>)</li>
                  <li>Customizable advertisement banner (<strong>stand out more</strong>)</li>
                  <li>Customizable advertisement embed color (<strong>stand out more</strong>)</li>
                  <li>7 custom button actions instead of 3</li>
                  <li>7 custom menu option actions instead of 3</li>
                  <li>Other increased limits</li>
                  <li><a href="/support">Premium support</a></li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="https://partnerpal.mysellix.io/product/partnerpal-basic-premium-670c2a769fd31" className="button button--outline button--primary button--block">Subscribe</Link>
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
