import footerLogo from '../../img/footerLogo.png'


const Footer = () => {
    const footerWrapper = document.querySelector('#footerWrapper');
    const footer = `
    <div class="footer">
          <footer class="text-center text-lg-start border border-white mt-xl-5 pt-4">
          <!-- Grid container -->
          <div class="container p-4">
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
               

                <ul class="list-unstyled mb-4">
                  <li>
                    <a href="#!" class="text-white">SUSHIROYAL</a>
                  </li>
                  <br>
                  <li>
                  <img id="" src="${footerLogo}" alt="" style="width:40%; height:auto">
                </li>
                </ul>
              </div>
      
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-white">sushiroyal@gmail.com</a>
                  </li>
                  <br>
                  <li>
                  <a href="#!" class="text-white">Rue du soja 3, 1234 Corée du Sud</a>
                  </li>
                  <br>
                  <li>
                    <a href="#!" class="text-white">+32433333333</a>
                  </li>
                </ul>
              </div>
              <!--Grid column-->

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">Nos réseaux:</a>
                </li>
                <br>
                <li>
                <a href="#!" class="text-white">Facebook : sushiroyal</a>
                </li>
                <br>
                <li>
                <a href="#!" class="text-white">Instagram : sushiroyal</a>
                </li>
                <br>
         
              </ul>
            </div>
            <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Sign up to our newsletter</h5>

                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" class="form-control" />
                  <label class="form-label" for="form5Example2">Email address</label>
                </div>

                <button type="submit" class="footerButton">Subscribe</button>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
          </div>
          <!-- Grid container -->

          <!-- Copyright -->
          <div class="text-center p-3 border-top border-white">
            © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          <!-- Copyright -->
        </footer>
        </div>
    `;
    footerWrapper.innerHTML = footer;
  };
  
  export default Footer;