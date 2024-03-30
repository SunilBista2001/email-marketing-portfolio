import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/sunil.svg"
        className="profile-img "
        width={300}
        height={300}
        alt="Sunil's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Sunil 👋</h1>

        <p>
          I’m a copywriter and content strategist with over a year experience,
          currently living in Kathmandu, Nepal. I write professional-grade copy
          that focuses on <strong>selling stuff</strong>. Oftentimes small
          tweaks in words and layout can result in <strong>huge</strong> changes
          in sales.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
