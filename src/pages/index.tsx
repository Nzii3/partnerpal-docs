import React from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player/youtube'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import CodeBlock from "@theme/CodeBlock";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { DiscordMessage, DiscordMessages } from '@pycord/discord-message-components-react'
import '@pycord/discord-message-components-react/dist/style.css'

const features = [
  {
    title: 'Moderation',
    imageUrl: 'img/tools-transparent.png',
    description: (
      <>
        Sentry's customizable moderation system gives you all the power you need to moderate your server, or allow other moderators to do so seamlessly.
        <br/>
        <br/>
        <DiscordMessages>
			                  <DiscordMessage bot author="Sentry" avatar="img/logo.png">
				                  Hello, World!
			                  </DiscordMessage>
		                  </DiscordMessages>
      </>
    ),
  },
  {
    title: 'Well Connected',
    imageUrl: 'img/Blobborg.svg',
    description: (
      <>
        <p>
          Benthos is able to glue a wide range of <a href="/docs/components/inputs/about">sources</a> and <a href="/docs/components/outputs/about">sinks</a> together and hook into a variety of <a href="/docs/components/processors/sql">databases</a>, <a href="/docs/components/processors/cache">caches</a>, <a href="/docs/components/processors/http">HTTP APIs</a>, <a href="/docs/components/processors/aws_lambda">lambdas</a> and <a href="/docs/components/processors/about">more</a>, enabling you to seamlessly drop it into your existing infrastructure.
        </p>
        <p>
          Working with disparate APIs and services can be a daunting task, doubly so in a streaming data context. With Benthos it's possible to break these tasks down and automatically parallelize them as <a href="/cookbooks/enrichments">a streaming workflow</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Create, Test and Deploy Configs Visually',
    imageUrl: 'img/Blobartist.svg',
    description: (
      <>
        <p>Declarative YAML is great for seamlessly integrating with version control tools, but creating and editing large configs can become a right bother.</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://studio.benthos.dev">Benthos Studio</a> is a visual web application that allows you to create/import configs, edit, test, share and deploy them. It's so fun you'll be making configs just for the heck of it! Loser.</p>
      </>
    ),
  },
  {
    title: 'Reliable and Operationally Simple',
    imageUrl: 'img/Blobscales.svg',
    description: (
      <>
        <p>
          Delivery guarantees <a href="https://youtu.be/QmpBOCvY8mY">can be a dodgy subject</a>. Benthos processes and acknowledges messages using an in-process transaction model with no need for any disk persisted state, so when connecting to at-least-once sources and sinks it's able to guarantee at-least-once delivery even in the event of crashes, disk corruption, or other unexpected server faults.
        </p>
        <p>
          This behaviour is the default and free of caveats, which also makes deploying and scaling Benthos much simpler. However, simplicity doesn't negate the need for observability, so it also exposes <a href="/docs/components/metrics/about">metrics</a> and <a href="/docs/components/tracers/about">tracing</a> events to targets of your choice.
        </p>
      </>
    ),
  },
  {
    title: 'Extendable',
    imageUrl: 'img/Blobextended.svg',
    description: (
      <>
        <p>
          Sometimes the components that come with Benthos aren't enough. Luckily, Benthos has been designed to be easily plugged with whatever components you need.
        </p>
        <p>
          You can either write plugins <a href="https://pkg.go.dev/github.com/benthosdev/benthos/v4/public">directly in Go (recommended)</a> or you can have Benthos run your plugin as a <a href="/docs/components/processors/subprocess">subprocess</a>.
        </p>
      </>
    ),
  },
];

interface FeatureArgs {
  imageUrl?: string;
  title?: string;
  description: JSX.Element;
};

function Feature({imageUrl, title, description}: FeatureArgs) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6')}>
      {imgUrl && (
        <div className="text--center">
          <img className={classnames('padding-vert--md', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const siteConfig = context.siteConfig;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--primary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('/getting_started')}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/logo_hero.png" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* <div className="container">
            <div className={classnames(`${styles.pitch}`)}>
              <h1 className="text--center">Sentry's Features</h1>
                <Tabs className="tabs tabs--block">
                    <TabItem value="Moderation">
                      Sentry's customizable moderation system gives you all the power you need to moderate your server, or allow other moderators to do so seamlessly.
                      <br />
                      <br />
                      <DiscordMessages>
			                  <DiscordMessage bot author="Sentry" avatar="img/logo.png">
				                  Hello, World!
			                  </DiscordMessage>
		                  </DiscordMessages>
                    </TabItem>
                    <TabItem value="Custom Punishments">
                    Through Custom Punishments, you can specify the actions Sentry should take when a member accumulates a specific set of warnings. Whether it involves muting, kicking, or banning a user based on warning levels, Sentry provides extensive customization choices tailored to your unique requirements.
                  </TabItem>
                  <TabItem value="Applications">
                    Sentry's application introduces unique and unprecedented functionalities for designing, overseeing, and gauging user interactions within application systems. It offers various question formats, including multiple-choice options, yes/no responses, long text, short text, and more. Sentry empowers you with complete authority over application creation, allowing for extensive customization as per your needs.
                  </TabItem>
                </Tabs>
            </div>
        </div> */}
        {features && features.length && (
          <section className={styles.features}>
            <div className="container margin-vert--md">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.loveSection}>
          <div className="container">
            <div className="row">
              <div className={classnames('col col--6')}>
                <h3 id="sponsored-by">Sponsored by the following heroes</h3>
                <div className="container">
                  <div>
                    <a href="https://synadia.com"><img className={styles.synadiaImg} src="/img/sponsors/synadia.svg" /></a>
                  </div>
                  <div className={classnames(styles.sponsorsBox)}>
                    <a href="https://www.meltwater.com/"><img src="/img/sponsors/mw_logo.png" /></a>
                    <a href="https://www.humansecurity.com"><img src="/img/sponsors/HUMAN_logo.png" /></a>
                    <a href="https://community.com/"><img src="/img/sponsors/community.svg" /></a>
                    <a href="https://www.optum.com/"><img src="/img/sponsors/optum_logo.png" /></a>
                    <a href="https://aurora.dev/"><img src="/img/sponsors/aurora.svg" /></a>
                    <a href="https://www.opala.com"><img src="/img/sponsors/opala.svg" /></a>
                    <a href="https://formance.com"><img src="/img/sponsors/formance.svg" /></a>
                    <a href="https://www.umh.app/"><img src="/img/sponsors/umh_logo.png" /></a>
                  </div>
                </div>
              </div>
              <div className={classnames('col col--6', styles.loveSectionPlea)}>
                <div>
                  <a href="https://github.com/sponsors/Jeffail">
                    <img className={styles.loveImg} src="img/blobheart.svg" alt="Blob Heart" />
                  </a>
                </div>
                <Link
                  className={classnames('button button--danger')}
                  to="https://github.com/sponsors/Jeffail">
                  Become a sponsor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
