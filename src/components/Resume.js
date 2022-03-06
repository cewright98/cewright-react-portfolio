function Resume() {
  // return JSX for downloadable resume link and my proficiencies
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href='/resume.pdf' download='Claire Wright Resume'>
        <span>Download</span> my resume
      </a>
      <div>
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>APIs</li>
          <li>MySQL, NoSQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>

  )
}

export default Resume;