import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return(
    <section id='experience'>
    <h2>Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='text-bright experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
