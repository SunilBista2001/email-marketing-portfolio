import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <div className="flex flex-col md:flex-row  items-center justify-between">
        <div>
          <h2 className="text-lg">
            Here’s a few things I’m good at, and can help you with:
          </h2>
          <ul className="pl-8">
            <li className="list-disc my-1">
              Can help write promotional emails.
            </li>
            <li className="list-disc my-1">Can write full sales pages.</li>
            <li className="list-disc my-1">
              Can help write autoresponder series.
            </li>
            <li className="list-disc my-1">
              Can help content and implement new strategy.
            </li>
          </ul>
        </div>
        <div className="about-img md:block hidden">
          <Image
            src="/sunil-bitmoji.png"
            className="profile-img"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
