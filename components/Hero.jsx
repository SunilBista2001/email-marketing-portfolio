import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/bibek.jpeg"
        className="profile-img"
        width={300}
        height={300}
        alt="Bibek's personal headshot"
      />
      <div className="hero-text">
        <h1>
          Hey, I'm Bibek Bhandari <span className="">👋🏻</span>{" "}
        </h1>

        <p>
          I am a copywriter and content strategist with over a year of
          experience writing high-converting copy for{"  "}
          <strong>DTC brands, </strong> currently living in Ontario, Canada.
          <br />
          <span className="italic mx-1 max-w-full  ">
            I specialize in writing copy for emails, ads, and websites,
          </span>
          guaranteeing you a <strong>15-20% increase</strong> in conversion.{" "}
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
            href="https://www.linkedin.com/in/bibek-bhandari-3832a1301/"
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
