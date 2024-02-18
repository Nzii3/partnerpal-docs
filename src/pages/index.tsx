import React from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player/youtube'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import DefaultLayout from "../layouts/DefaultLayout";

const features = [
  {
    title: 'Moderation',
    imageUrl: 'img/tools-transparent.png',
    description: (
      <>
        Sentry's incredibly adaptable moderation system not only empowers you with a comprehensive set of tools but also bestows upon you the highest degree of control in effectively administering your Discord server. Whether you choose to personally supervise moderation or delegate this task to specifically appointed moderators, Sentry guarantees a seamlessly efficient moderation experience, contributing to the optimal management of your server.
        <br/>
        <br/>
        
      </>
    ),
  },
  {
    title: 'Custom Punishments',
    imageUrl: 'img/fire.png',
    description: (
      <>
        Through Custom Punishments, you can specify the actions Sentry should take when a member accumulates a specific set of warnings. Whether it involves muting, kicking, or banning a user based on warning levels, Sentry provides extensive customization choices tailored to your unique requirements.
        <br/>
        <br/>
      </>
    ),
  },
  {
    title: 'Applications',
    imageUrl: 'img/clipboard.png',
    description: (
      <>
        Sentry's application introduces unique and unprecedented functionalities for designing, overseeing, and gauging user interactions within application systems. It offers various question formats, including multiple-choice options, yes/no responses, long text, short text, and more. Sentry empowers you with complete authority over application creation, allowing for extensive customization as per your needs.
        <br/>
        <br/>
      </>
    ),
  },
  {
    title: 'Permits (Custom Permissions)',
    imageUrl: 'img/key.png',
    description: (
      <>
        Utilizing Sentry's robust permissions system, you can guarantee that the appropriate members in your server are granted access to the commands you deem suitable for their use. Permits provide bot-specific permissions to roles of your choice.
        <br/>
        <br/>
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
    <DefaultLayout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
        
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title blurple-cycle">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--primary button--lg'
                  )}
                  to={useBaseUrl('/getting-started')}>
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
        <hr style={{'backgroundColor': '#5865f2', 'opacity': '90%'}}/>
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
        <section className={styles.CallToActionSection}>
          <div className="container">
            <div className="row">
              <div className="center">
                <h1 id="call-to-action" style={{'textAlign': 'center'}}>What are you waiting for?</h1>
              </div>
            </div>
            <div className="row">
              <div className={classnames('center', styles.CallToAction)}>
                <div>
                  <img className={styles.CallToActionImg} src="img/logo.png" alt="Sentry Logo" />
                </div>
                <Link
                  className={classnames(
                    'button button--dark button--lg'
                  )}
                  to="invite">
                  Invite
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}

export default Home;
