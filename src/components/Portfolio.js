import photo1 from '../assets/weather-dashboard.png';
import photo2 from '../assets/note-taker.png';
import photo3 from '../assets/GamePlaylist.png';
import photo4 from '../assets/StarGazr.png';
import photo5 from '../assets/work-day-scheduler.png';
import photo6 from '../assets/Roadie.png';

function Portfolio() {
  // return JSX with 6 of my applications with deployed and github links
  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className='row'>
        <div className="container">
          <img src={photo1} alt="Weather Dashboard Preview"></img>
          <div className="container-text">
            <a href="https://cewright98.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a>
            <br />
            <a href="https://github.com/cewright98/weather-dashboard" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={photo2} alt="Note Taker Preview"></img>
          <div className="container-text">
            <a href="https://glacial-plateau-16713.herokuapp.com/" target="_blank">Express Note Taker</a>
            <br />
            <a href="https://github.com/cewright98/express-note-taker" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={photo3} alt="GamePlaylist Preview"></img>
          <div className="container-text">
            <a href="https://cewright98.github.io/GAMEPLAYlist/" target="_blank">GamePlaylist</a>
            <br />
            <a href="https://github.com/cewright98/GAMEPLAYlist" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="container">
          <img src={photo4} alt="StarGazr Preview"></img>
          <div className="container-text">
            <a href="https://sleepy-beyond-47602.herokuapp.com/" target="_blank">StarGazr</a>
            <br />
            <a href="https://github.com/erinnaschneider/stargazr" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={photo5} alt="Work Day Scheduler Preview"></img>
          <div className="container-text">
            <a href="https://cewright98.github.io/work-day-scheduler/" target="_blank">Work Day Scheduler</a>
            <br />
            <a href="https://github.com/cewright98/work-day-scheduler" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={photo6} alt="Roadie Preview"></img>
          <div className="container-text">
            <a href="https://on-the-roadie.herokuapp.com/" target="_blank">Roadie</a>
            <br />
            <a href="https://github.com/Osamadahnoun/roadie" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;