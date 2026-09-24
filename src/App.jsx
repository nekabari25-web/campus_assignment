import React from 'react'
import logo from './assets/media/logo.png'
import london from './assets/media/london.png'
import newyork from './assets/media/newyork.png'
import washington from './assets/media/washington.png'
import library from './assets/media/library.png'
import basketball from './assets/media/basketball.png'
import cafeteria from './assets/media/cafeteria.png'
import user1 from './assets/media/user1.jpg'
import user2 from './assets/media/user2.jpg'


const App = () => {
  const showMenu = () => {
    document.getElementById('navLinks').style.right = '0'
  }

  const hideMenu = () => {
    document.getElementById('navLinks').style.right = '-200px'
  }

  return (
    <div>
      <section className="header">
        <nav>
          <a href="index.html">
            <img src={logo} alt="University logo" />
          </a>

          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/">ABOUT</a></li>
              <li><a href="/">COURSE</a></li>
              <li><a href="/">BLOG</a></li>
              <li><a href="/">CONTACT</a></li>
            </ul>
          </div>

          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h1>World&apos;s Biggest University</h1>
          <p>
            Making website is now one of the easiest things in the world.
            <br /> You just need to learn HTML, CSS, Javascript and you are good to go.
          </p>
          <a href="/" className="hero-btn">Visit Us To Know More</a>
        </div>
      </section>

      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          {['Intermediate', 'Degree', 'Post Graduate'].map((course) => (
            <div className="course-col" key={course}>
              <h3>{course}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam alias ab temporibus sed, laborum enim unde quae voluptatem
                aspernatur saepe culpa odio, asperiores labore quibusdam dolorum nobis
                velit ad! Quasi.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          {[
            [london, 'LONDON'],
            [newyork, 'NEW YORK'],
            [washington, 'WASHINGTON'],
          ].map(([image, name]) => (
            <div className="campus-col" key={name}>
              <img src={image} alt={name} />
              <div className="layer">
                <h3>{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

        <div className="row">
          {[
            [library, 'World Class Library'],
            [basketball, 'Largest Play Ground'],
            [cafeteria, 'Tasty and Healthy Food'],
          ].map(([image, title]) => (
            <div className="facilities-col" key={title}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Non quisquam ducimus soluta? Nesciunt, corrupti aut?
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h1>What Our Students Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          {[
            [user1, 'Geteera Nekabari', 'fa-star-o'],
            [user2, 'Geteera Daniel', 'fa-star-half-o'],
          ].map(([image, name, lastStar]) => (
            <div className="testimonial-col" key={name}>
              <img src={image} alt={name} />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus ipsa reiciendis dignissimos molestias omnis
                  commodi ducimus porro deleniti aspernatur laudantium?
                </p>
                <h3>{name}</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className={`fa ${lastStar}`}></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h1>
          Enroll For Our Various Online Courses
          <br /> Anywhere From The World
        </h1>
        <a href="/" className="hero-btn">CONTACT US</a>
      </section>

      <section className="footer">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut est
          distinctio, adipisci quasi <br /> doloribus.
        </p>

        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>

        <p>
          Made with <i className="fa fa-heart-o"></i> by Easy Tutorials
        </p>
      </section>
    </div>
  )
}

export default App