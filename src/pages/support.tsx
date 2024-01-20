import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import classnames from 'classnames';
import styles from './support.module.css';
import Admonition from '@theme/Admonition';

function Support() {
  return (
    <Layout title="Support" description="How to get Sentry support">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">Sentry Support</h1>
              <p className="hero__subtitle">When Benthos hands you lemons this page lists people to angrily throw them at.</p>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/logo-yellow.png" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container container-narrow padding-top--lg">
            <div className="row margin-bottom--lg">
              <div className="col col--12">
                <p>
                Sentry offers a community and support staff ready to help with any questions, bugs, or feature requests. Give our <a href="https://r.nziie.xyz/sentry-support">support server</a> a shot for assistance. For inquries that may need faster and quicker attention (such as <strong>premium</strong>), feel free to create a ticket in the <code>#premium</code> channel.
                </p>
                <Admonition type="warning">
                  <p>Support tickets are <strong>only</strong> for <strong>premium inquries</strong>, this includes redeeming premium and renewing premium for your server(s).</p>
                </Admonition>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container container-narrow padding-bottom--lg">
            <div className="row margin-bottom--lg">
              <div className="col col--12">
                <h3>Provide Context</h3>
                <p>
Things that a typical community member cannot do include mind-reading, assuming control of your PC (I hope) and time travelling into the past in order to obtain context of the problem on your behalf. In order to work around these limitations please make sure that when you are asking us for help regarding a problem you've had that at the very least you are able to give us any error messages/logs that were emitted by Benthos when it happened.
                </p>
                <h3>Never Direct Message</h3>
                <p>
Unless you are explicitly instructed to do so please never direct message maintainers or community members for support, and avoid directly pinging them. If you aren't receiving responses in a public support channel it is because they currently do not have time to address your issue, please be patient or consider a <a href="#paid-services">paid support option instead</a>. Direct messages only serve to add extra pressure on volunteers, and answering questions via direct messages denies other users the opportunity to read the answers for themselves.
                </p>
                <p>
If there is sensitive information within your question that you do not want to expose publicly then please take the time to scrub that information from the material you are sharing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Support;