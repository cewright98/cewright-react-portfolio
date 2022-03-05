function Resume() {
  // return JSX for downloadable resume link and my proficiencies
  return (
    <section>
      <h1>Resume</h1>
      <a href='/resume.pdf' download='Claire Wright Resume'>
        Click to download my resume
      </a>
      <div>
        <h2>Front-End Proficiencies</h2>
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
        <h2>Back-End Proficiencies</h2>
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