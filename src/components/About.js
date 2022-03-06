function About() {
  // return JSX with my photo and short bio
  return (
    <section className="about">
      <h2>About Me</h2>
      {/* insert photo here */}
      <img src="/about-me-photo.png" alt="photo of Claire Wright"></img>
      <p>
        Hi! My name is Claire Wright and I am a web developer currently enrolled in the UNC Coding Boot Camp. 
        I graduated from UNC-Chapel Hill in May 2020 with a double major in Political Science and Women's and Gender Studies.              
        Although I am now primarily focused on coding, I would love to incorporate this interdisciplinary background into a web development role.
        
        <br />
        <br />

        Throughout my time at the UNC Boot Camp I have developed skills primarily in JavaScript. 
        I am experienced with frameworks such as Node and React, as well as with databases including MySQL and NoSQL.
        I am also very comfortable working with tools like jQuery, Bootstrap, and Git.
      </p>
    </section>
  )
}

export default About;