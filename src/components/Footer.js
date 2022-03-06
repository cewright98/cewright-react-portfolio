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
        <li>
          <a href="https://stackoverflow.com/users/16845365/claire-wright" target="_blank">
            <i className="fa-brands fa-stack-overflow"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Footer;