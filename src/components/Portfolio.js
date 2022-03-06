function Portfolio() {
  // return JSX with 6 of my applications with deployed and github links
  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="container">
        <img src="/weather-dashboard.png" alt="Weather Dashboard Preview"></img>
        <div className="container-text">
          <a href="https://cewright98.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a>
          <a href="https://github.com/cewright98/weather-dashboard" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <img src="/note-taker.png" alt="Note Taker Preview"></img>
        <div className="container-text">
          <a href="https://glacial-plateau-16713.herokuapp.com/" target="_blank">Express Note Taker</a>
          <a href="https://github.com/cewright98/express-note-taker" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <img src="/GamePlaylist.png" alt="GamePlaylist Preview"></img>
        <div className="container-text">
          <a href="https://cewright98.github.io/GAMEPLAYlist/" target="_blank">GamePlaylist</a>
          <a href="https://github.com/cewright98/GAMEPLAYlist" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <img src="/StarGazr.png" alt="StarGazr Preview"></img>
        <div className="container-text">
          <a href="https://sleepy-beyond-47602.herokuapp.com/" target="_blank">StarGazr</a>
          <a href="https://github.com/erinnaschneider/stargazr" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <img src="/work-day-scheduler.png" alt="Work Day Scheduler Preview"></img>
        <div className="container-text">
          <a href="https://cewright98.github.io/work-day-scheduler//" target="_blank">Work Day Scheduler</a>
          <a href="https://github.com/cewright98/work-day-scheduler" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <img src="/e-commerce-database.png" alt="E-Commerce Database Preview"></img>
        <div className="container-text">
          <a href="https://github.com/cewright98/e-commerce-database" target="_blank">Express Note Taker</a>
          <a href="https://github.com/cewright98/e-commerce-database" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;