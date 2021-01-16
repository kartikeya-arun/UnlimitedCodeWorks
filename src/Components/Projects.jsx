import React, { useEffect, useState } from 'react';
import Project from './Project';
import '../assets/stylesheets/projects.css'
// import '../assets/stylesheets/banner.css';

export default function Projects(){
    const [isLoaded,setIsLoaded]=useState(false);
    const [error,setError]=useState(null);
    const [projects,setProjects]=useState([]);
    
    useEffect(() => {
        fetch("https://unlimited-code-works-server.herokuapp.com/api/projects")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setProjects(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setError(error)
            console.log(error)
            }
          )
      }, [])
      if (error) {
        return <div className='destinations'>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='destinations'>Loading...</div>;
      } else {
        return (
          <section className='projects'>
            <h3 className='title'>Some of my Work:</h3>
            {/* <p>Check out my Work.</p> */}
            <hr></hr>
            <div>
              <ul className='grid'>
                {projects.map(project => (
                  <li key={project._id}>
                    <Project title={project.title} text={project.description} url={project.url} thumbnail={project.thumbnail} more={project.readMore} />
                  </li>
                ))}              
              </ul>
            </div>
          </section>
        );
      }
}