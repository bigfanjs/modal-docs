import React, { useState, useEffect } from 'react'
import Title from 'react-titles/Title1'
import clsx from 'clsx'

import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './styles.module.css'

let timeout

const effects = [
  'FADE',
  'POP UP',
  'SLIDE LEFT',
  'SLIDE RIGHT',
  'SLIDE UP',
  'SLIDE DOWN',
  'HORIZONTAL FLIP',
  'VERTICALE FLIP',
  'ROTATE',
  'SPRING'
]

const features = [
  {
    title: 'Smart',
    imageUrl: 'img/smart.svg',
    description: (
      <>
        ability to automaticaly close modals and to open any modal from anywhere
        throughout your app.
      </>
    )
  },
  {
    title: 'Scalable',
    imageUrl: 'img/scalable.svg',
    description: (
      <>
        scalable, loosely coupled, and easily maintainable modal library that
        saves you time and energy when having many modals.
      </>
    )
  },
  {
    title: 'Animated',
    imageUrl: 'img/animated.svg',
    description: <>Comes with 10+ modal effects plus an animated overlay </>
  },
  {
    title: 'Customizable',
    imageUrl: 'img/customize.svg',
    description: (
      <>the freedom to add custom effects, customize modals and much more.</>
    )
  }
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={styles.featureWrapper}>
      <div className='container'>
        <div className={clsx('', styles.feature)}>
          {imgUrl && (
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          )}
          <div className={styles.featureInfo}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Home () {
  const [text, setText] = useState('')

  const context = useDocusaurusContext()

  const { siteConfig = {} } = context

  useEffect(() => {
    clearTimeout(timeout)

    const index = effects.indexOf(text)
    const length = effects.length - 1

    timeout = setTimeout(
      () => setText(effects[index < length ? index + 1 : 0]),
      index <= -1 ? 500 : 2000
    )

    return () => clearTimeout(timeout)
  }, [text])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={clsx('hero shadow--lw', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <Link
            className={clsx(
              'button button--secondary button--lg',
              styles.getStarted
            )}
            to={useBaseUrl('docs/')}
          >
            Get Started
          </Link>
        </div>
      </header>
      <main>
        <div className={styles.effects}>
          <div className={clsx('container', styles.effectsContent)}>
            <div className={styles.effectsTitle}>
              <span>10+</span>Super smooth and slick Modal Effects
            </div>
            {text && (
              <>
                <div className={styles.effectNamesDesktop}>
                  <Title size={600} text={text} open={true} />
                </div>
                <div className={styles.effectNamesTablet}>
                  <Title size={450} text={text} open={true} />
                </div>
                <div className={styles.effectNamesMobile}>
                  <Title size={350} text={text} open={true} />
                </div>
              </>
            )}
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
