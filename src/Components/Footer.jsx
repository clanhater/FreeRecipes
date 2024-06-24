function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <h5>Contact Information</h5>
            <p className="text-white-50">
              Address: Dept. 97104, University of Computer Sciences
            </p>
            <p className="text-white-50">Email: ernegonzalvar@gmailcom</p>
            <p className="text-white-50">Phone: +53 51341261</p>
          </div>
          <div className="col-4"></div>
          <div className="col-4 ">
            <h5>Social networks</h5>
            <ul className="list-unstyled list-inline row p-3">
              <li className="me-3 col-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="fa-stack fa-2x"
                >
                  <i class="fab fa-facebook-f facebook-icon"></i>
                </a>
              </li>
              <li className="me-3 col-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="fa-stack fa-2x"
                >
                  <i class="fab fa-instagram instagram-icon"></i>
                </a>
              </li>
              <li className="me-3 col-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="fa-stack fa-2x"
                >
                  <i class="fab fa-twitter twitter-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Free Recipes. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
