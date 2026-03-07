import { MdStarPurple500, TbBrandCSharp, BiLogoJava, GrReactjs, TbBrandJavascript, BsFillDatabaseFill, FaGithub, FaBootstrap, DiJqueryLogo, SiJira, DiVisualstudio, VscVscode, CgMoreO, ImArrowRight } from "../icons";
import { JourneyComponent, CodingMilestones, Counter, SectionHeader } from "../sub-components/About";
const About = () => {

  return (
    <>
      <section className="grid grid-rows-3 gap-2 p-3 border border-gray-600 mx-auto my-10 max-w-6xl h-auto rounded-lg">
        <div className="grid gap-2 place-items-center rounded-lg p-2">
          <div className="flex flex-col justify-center items-center">
            <img src={`${process.env.PUBLIC_URL}/images/profile.webp`} alt="Profile" loading="lazy" className="flex-auto w-[278px] h-[278px] rounded-lg hover:scale-105 transition-transform duration-300" />
            <span className="text-white px-2 py-4 text-center text-2xl font-semibold" style={{ "fontFamily": "Courgette, Comic Sans MS" }}>Abhishek Kumar</span>
            <span className="block text-sm bg-[#b2bec3] rounded-lg px-4 py-2 text-gray-800 font-semibold  mt-1">Full Stack Developer</span>
          </div>
        </div>
        <div className="rounded-lg px-6 py-8">
          <h1 className="text-4xl mb-5 font-semibold text-purple-500">Digital Identity</h1>
          <p className="text-gray-400 mb-4 text-base text-justify ">
            <span className="text-4xl text-[#ffc048]">I</span>'m <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-[#EA2027] transition-colors ease-in-out duration-300">Abhishek Kumar</span>, a dynamic Full Stack Software Engineer and technology based in Delhi NCR, India, driven by a passion for building scalable, impactful solutions that solve real-world problems.
          </p>
          <p className="text-gray-400 mb-4 text-base text-justify">
            With a graduation degree from the
            <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-sky-500 transition-colors ease-in-out duration-300 mx-1">
              Veer Bahadur Singh Purvanchal University, Jaunpur, UP, India
            </span>
            and years of experience at
            <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-[#ea8685] transition-colors ease-in-out duration-300 mx-1">
              Flentis Corporation and Landis+Gyr
            </span>
            as an Associate Software Engineer/.NET Developer since 2023, he brings a rare blend of technical depth, innovation, and strategic thinking.
          </p>
          <p className="text-gray-400 mb-4 text-base text-justify">
            My journey reflects resilience, curiosity, and a relentless drive to innovate.professional identity is defined by a balance of engineering rigor and creative problem-solving, making a trusted contributor to high-impact projects and a thought leader in modern software development.
          </p>
          <p className="text-gray-400 mb-4 text-base text-justify">
            Full Stack Developer with hands-on experience in <TbBrandCSharp className="inline-block mr-1 size-5" />, <BiLogoJava className="inline-block mr-1 size-5" />, <GrReactjs className="inline-block mr-1 size-5" />, <TbBrandJavascript className="inline-block mr-1 size-5" />, and <BsFillDatabaseFill className="inline-block mr-1 size-5" />. Skilled in building scalable web applications using ASP.NET, Web API, and responsive UI with <GrReactjs className="inline-block mr-1 size-5" />, <DiJqueryLogo className="inline-block mr-1 size-5" />, and <FaBootstrap className="inline-block mr-1 size-5" />.
            I’ve contributed to company websites and enterprise apps, working across both front-end and back-end. Proficient with tools like <FaGithub className="inline-block mr-1 size-5" />, <SiJira className="inline-block mr-1 size-4" />, <DiVisualstudio className="inline-block mr-1 size-5" />, and <VscVscode className="inline-block mr-1 size-5" />.
            With a B.Tech in IT, I'm focused on growing as a full stack developer and creating clean, efficient digital solutions.
          </p>
        </div>
        <div className="px-6 py-8 border-t border-gray-600">
          <h1 className="flex items-center text-3xl mb-5 font-semibold text-purple-500 group"><MdStarPurple500 className="items-center mr-2 size-8 animate-pulse group-hover:text-[#ffa801] transition-colors duration-300" />Highlights & Successes</h1>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <Counter end={8} duration={1500} label="YEARS OF EXPERIENCE" />
            <Counter end={15} duration={2000} label="PROJECTS COMPLETED" />
            <Counter end={10} duration={1800} label="CERTIFICATIONS & AWARDS" />
          </div>
          <div className="mt-6">
            <h1 className="flex items-center text-3xl mb-5 font-semibold text-purple-500 group"><CgMoreO className="items-center mr-2 size-6 animate-pulse group-hover:text-[#ffa801] transition-colors duration-300" />Extra Curricular Activities</h1>
            <span className="text-gray-400 mb-4 text-base text-justify">Apart from developement, some things I like are :</span>
            <ul className="text-gray-400 pt-4 text-base text-justify">
              <li className="mb-2 group"><ImArrowRight className="inline-block mr-2 size-5 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[#ffa801]" />Gym freak and technophile  </li>
              <li className="mb-2 group"><ImArrowRight className="inline-block mr-2 size-5 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[#ffa801]" />Problem Solving & Coding Challenges on multiple platforms like HackerRank, LeetCode, CodeChef</li>
              <li className="mb-2 group"><ImArrowRight className="inline-block mr-2 size-5 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[#ffa801]" />Traveling and exploring new places.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Journey section start */}
      <section className="flex flex-col gap-3 p-2 border border-gray-600 mx-auto my-10 max-w-6xl h-auto rounded-lg">        
        <SectionHeader title="the journey" subtitle="Humble beginnings to mastering tech: my evolving path" description="This timeline highlights a clear progression from early curiosity in coding to professional expertise in full stack development.It showcases key milestones in education, hands‑on projects, and industry roles, reflecting consistent growth, adaptability, and a commitment to building scalable, innovative solutions." imgSrc={`${process.env.PUBLIC_URL}/gifs/journey.gif`} />
        <div className="w-full mx-auto space-y-4 my-4">
          <JourneyComponent year="2015" headerText="Class 10th" descriptionText="Growing up, I was always curious about technology, but it was in 10th grade, through my cousins, that I was introduced to coding. They sparked my interest, and that’s when I decided to explore Python. Since then, I’ve been hooked, diving deeper into the world of coding and development." />
          <JourneyComponent year="2018" headerText="Class 12th" descriptionText="In 12th grade, I deepened my understanding of programming concepts and began working on more complex projects. My interest in web development grew, and I started exploring frameworks like React and Node.js." />
          <JourneyComponent year="2019" headerText="B.Tech First Year" descriptionText="In my first year of B.Tech, I dove into the fundamentals of programming by learning the C language through the PPS subject. Soon after, I discovered my favorite language, C++, and began my Data Structures and Algorithms journey." />
          <JourneyComponent year="2022" headerText="B.Tech Final Year" descriptionText="In my Final year of B.Tech, I explored more advanced topics in Data Structures and Algorithms. I also started working on personal projects to apply my knowledge practically." />
          <JourneyComponent year="2023" headerText="Professional Journey" descriptionText="In 2023, I embarked on my professional journey as an Associate Software Engineer at Flentis Corporation, where I honed my skills in .NET development. Later in 2025, I joined Landis+Gyr, further expanding my expertise in full stack development and contributing to impactful projects." />
          <JourneyComponent year="2026" headerText="Building the Future" descriptionText="With experience in Full Stack Development and UI libraries, I have successfully built this portfolio website using a modern stack that includes Reactjs. My journey continues as I aim to create scalable and innovative solutions." />
        </div>
      </section>
      {/* Journey section end */}

      {/* Coding Milestones start */}
      <section className="grid grid-rows-2 gap-2 p-3 border border-gray-600 mx-auto my-10 max-w-6xl h-auto rounded-lg">
        <SectionHeader title="Coding Milestones" subtitle="Validated skills through coding challenges and contests" description="A showcase of my journey through leading coding platforms, where consistent practice and competitive challenges have validated my problem‑solving skills. From tackling algorithmic puzzles on LeetCode, earning badges on HackerRank, and competing in CodeChef contests, to exploring concepts on GeeksforGeeks — each milestone reflects dedication, growth, and a commitment to mastering the craft of programming.This timeline highlights a clear progression from early curiosity in coding to professional expertise in full stack development.It showcases key milestones in education, hands‑on projects, and industry roles, reflecting consistent growth, adaptability, and a commitment to building scalable, innovative solutions." imgSrc={`${process.env.PUBLIC_URL}/gifs/coding.gif`} />
        <div className="grid grid-cols-4 gap-2 p-3 w-full mx-auto">
          <CodingMilestones alt="LeetCode" src={`${process.env.PUBLIC_URL}/images/leetcode.webp`} link="https://leetcode.com/u/abhishek1445747/" />
          <CodingMilestones alt="HackerRank" src={`${process.env.PUBLIC_URL}/images/hackerrank.webp`} link="https://www.hackerrank.com/profile/mp1445747" />
          <CodingMilestones alt="CodeChef" src={`${process.env.PUBLIC_URL}/images/codechef.webp`} link="https://www.codechef.com/users/codermjo123" />
          <CodingMilestones alt="GeeksforGeeks" src={`${process.env.PUBLIC_URL}/images/geeksforgeeks.webp`} link="https://www.geeksforgeeks.org/profile/abhishekdeveloper" />
        </div>
      </section>
      {/* Coding Milestones end */}

    </>
  );
};

export default About;