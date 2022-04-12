import React from 'react'
import './portfolio.css'
import Secrets from '../../assets/secrets.png'
import Keeper from '../../assets/keeper.png'
import Eoj from '../../assets/eoj.png'

const data = [
  {
    id: 1,
    image: Secrets,
    title: 'Secrets',
    description: 'A pseudo social media app where each user gets one secret to share.',
    sourceLink: 'https://github.com/gjersing/encryption-levels',
    demoLink: 'https://secrets-csg.herokuapp.com/'
  },
  {
    id: 2,
    image: Keeper,
    title: 'Keeper',
    description: 'A React recreation of Google Keep: a stylized, animated note taking app.',
    sourceLink: 'https://codesandbox.io/s/google-keep-clone-5ohiw2',
    demoLink: 'https://5ohiw2.csb.app/'
  },
  {
    id: 3,
    image: Eoj,
    title: 'Easy Open Journal',
    description: 'A persistent public journal app with dynamic URL and post generation.',
    sourceLink: 'https://github.com/gjersing/eo-journal-public',
    demoLink: 'https://easy-open-journal.herokuapp.com/'
  }
]

const Portfolio = () => {
  return(
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, sourceLink, demoLink}) => {
            return (
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <h5 class='text-light'>{description}</h5>
                <div className='portfolio__item-cta'>
                  <a href={sourceLink} className='btn' target='_blank' rel='noreferrer'>Source Code</a>
                  <a href={demoLink} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  );
}

export default Portfolio;
