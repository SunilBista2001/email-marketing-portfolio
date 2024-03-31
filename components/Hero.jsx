import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/sunil-cover.jpeg"
        className="profile-img"
        width={300}
        height={300}
        alt="Sunil's personal headshot"
      />
      <div className="hero-text">
        <h1>
          Hey, I'm Sunil <span className="wave">👋🏻</span>{" "}
        </h1>

        <p>
          I’m a copywriter and content strategist with over a year experience,
          currently living in Kathmandu, Nepal.{" "}
          <span className="italic">
            {" "}
            I write professional-grade copy that focuses on{" "}
          </span>
          <strong>selling stuff</strong>. Oftentimes small tweaks in words and
          layout can result in <strong>huge</strong> changes in sales.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/itsbista/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>

          <a
            href="https://www.linkedin.com/in/sunil-bista-4079a8245/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
