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
            <li className="list-disc my-2">
              Can help write high converting email content.
            </li>
            <li className="list-disc my-2">
              Can help optimize your landing page for high conversion rate.
            </li>
            <li className="list-disc my-2">
              Can help write high conversion (meta) ads.
            </li>
            <li className="list-disc my-2">
              Can help content and implement new strategy.
            </li>
          </ul>
        </div>
        <div
          className="about-img md:block hidden"
          style={{ borderRadius: "50%" }}
        >
          <Image
            src="/sunil.svg"
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
