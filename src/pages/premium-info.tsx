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
          <h2 className="text--center" id="bronze">Basic Premium</h2>
          <div className="row margin-vert--lg">
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-gem" style={{'fontSize': '3em'}} bounce />
                </div>
                <div className="card__header">
                <h2>Bronze (1.99€/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Customizable server prefix</li>
                  <li>Message customization for the advertisement moderation extension</li>
                  <li>7 custom button actions instead of 3</li>
                  <li>7 custom menu option actions instead of 3</li>
                  <li>Other increased rate limits</li>
                  <li><a href="/support">Premium support</a></li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="/bronze" className="button button--outline button--primary button--block">Purchase</Link>
                </div>
              </div>
            </div>
            
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-sack-dollar" style={{'fontSize': '3em'}} bounce />
                </div>
                <div className="card__header">
                <h2>Donations</h2>
                </div>
                <div className="card__body">
                  We appreciate any donations! You will recieve the <strong style={{'color': '#5865f2'}}>Donator</strong> role in the support server to show our thanks :)
                </div>
                <div className="card__footer">
                  <Link to="https://r.nziie.xyz/donate" className="button button--outline button--primary button--block">Donate</Link>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text--center" id="custom-branding">Custom Branding</h2>
          <p className="text--center">Custom Branding allows you to fully customize Sentry to your needs. We offer a <strong style={{'color': '#5865f2'}}>custom bot name</strong>, <strong style={{'color': '#5865f2'}}>custom bot avatar</strong>, <strong style={{'color': '#5865f2'}}>custom bot status</strong>, and <strong style={{'color': '#5865f2'}}>full premium features</strong>. With even more control, you are allowed to create the bot application on the <a href="https://discord.dev">Discord Developer Portal</a>.</p>

          <div className="row margin-vert--lg">
          <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-medal" style={{'fontSize': '3em', 'color': '#C0C0C0'}} beat />
                </div>
                <div className="card__header">
                <h2>Silver (4.99€/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Customizable bot name</li>
                  <li>Customizable bot avatar</li>
                  <li>Customizable bot status</li>
                  <li>Customizable bot about me</li>
                  <li><strong style={{'color': '#ffd866'}}>Maximum of 1 server for the bot</strong></li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="/silver" className="button button--outline button--primary button--block">Purchase</Link>
                </div>
              </div>
            </div>
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-medal" style={{'fontSize': '3em', 'color': '#b68a07'}} beat />
                </div>
                <div className="card__header">
                <h2>Gold (7.99€/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Customizable bot name</li>
                  <li>Customizable bot avatar</li>
                  <li>Customizable bot status</li>
                  <li>Customizable bot about me</li>
                  <li><strong style={{'color': '#2ecc71'}}>Better performance</strong></li>
                  <li><strong style={{'color': '#ffd866'}}>Maximum of 5 servers for the bot</strong></li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="/gold" className="button button--outline button--primary button--block">Purchase</Link>
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