function Contact() {
  // return JSX for a contact form with name, email, and message

  return (
    <section className='contact'>
      <header>
        <h2>Contact Me</h2>
      </header>
      <div className="container">
        <div className="email-contact">
          <a href='mailto:cewright1998@gmail.com'>
            <i class="fa-solid fa-envelope"></i>
            <p>cewright1998@gmail.com</p>
          </a>
        </div>
        <div className="phone-contact">
          <a href='tel:6503871810'>
            <i class="fa-solid fa-phone"></i>
            <p>(650) 387-1810</p>
          </a>
        </div>
        <div className="github-contact">
          <a href="https://github.com/cewright98/" target="_blank">
            <i className="fa fa-github"></i>
            <p>GitHub</p>
          </a>
        </div>
        <div className="linkedin-contact">
          <a href="https://www.linkedin.com/in/claire-wright-965bba13b/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );

}

export default Contact;