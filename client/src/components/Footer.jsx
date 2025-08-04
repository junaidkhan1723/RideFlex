import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 mt-60 text-sm text-text-muted">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-border border-b ">
        <div>
          <span className="flex items-center cursor-pointer">
            <img src={assets.Favicon} alt="logo" className="sm:h-4 h-3" />
            <span className="text-lg sm:text-xl font-semibold ms-2">
              Ride<span className="text-primary">Flex</span>
            </span>
          </span>

          <p className="max-w-80 mt-3">
            Primiuum Car & Bike rental service with a wide selection of luxury and everyday vehicles for all 
            your driving needs.
          </p>
          <div className="flex items-center gap-4 mt-6">
  {/* GitHub */}
  <a
    href="https://github.com/junaidkhan1723"
    target="_blank"
    rel="noopener noreferrer"
    className="text-text hover:text-text-muted hover:scale-110 transition-all duration-300"
    aria-label="GitHub Profile"
  >
    <i className="bi bi-github text-2xl"></i>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/junaidkhan1723/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-text hover:text-blue-600 hover:scale-110 transition-all duration-300"
    aria-label="LinkedIn Profile"
  >
    <i className="bi bi-linkedin text-2xl"></i>
  </a>

  {/* Gmail */}
  <a
    href="mailto:patanjunaid7888@gmail.com"
    className="text-text hover:text-red-500 hover:scale-110 transition-all duration-300"
    aria-label="Send Email"
  >
    <i className="bi bi-envelope-at text-2xl"></i>
  </a>
</div>

        </div>

        <div>
          <h2 className="text-base font-medium text-text uppercase">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Vehicle</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            
          </ul>
        </div>

            <div>
          <h2 className="text-base font-medium text-text uppercase">Resources</h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>          
          </ul>
        </div>


            <div>
          <h2 className="text-base font-medium text-text uppercase">Contact</h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
                1234 Railway Station
            </li>
            <li>
                Hydrabad, INDIA 10001.
            </li>
            <li>
                +1 123456789
            </li>
            <li>
                RideFlex@gmail.com
            </li>
            
          </ul>
        </div>

      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="#">RideFlex</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li> <span> | </span>
          <li>
            <a href="#">Terms</a>
          </li> <span> | </span>
          <li>
            <a href="#">Cookies</a>
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Footer;
