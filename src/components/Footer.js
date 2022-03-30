function Footer() {
  // return JSX for links to my github, linkedin, and other profiles
  return (
    <section className="footer">
      <ul>
        <li>
          <a href="https://github.com/cewright98/" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/claire-wright-965bba13b/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Footer;