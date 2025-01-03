import MainLayout from "@/components/main/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">About Navodit Bharat</h1>
        <p className="mb-4">
          Hello! I&apos;m <strong>Navodit Bharat</strong>, a passionate software
          engineer with a focus on building user-friendly applications and
          designing scalable systems. I have expertise in technologies such as
          JavaScript, React, Node.js, TypeScript, and more.
        </p>

        <p className="mb-4">
          Over the years, I&apos;ve worked on various exciting projects,
          including web and mobile apps, server-side applications, and
          distributed systems. I&apos;m always eager to learn and grow in the
          tech field, and I thrive in environments where I can solve complex
          problems with clean and efficient code.
        </p>

        <p className="mb-4">
          When I&apos;m not coding, you can find me exploring new technologies,
          attending meetups, or sharing my knowledge with others through
          tutorials and blog posts. I believe in continuous improvement and
          enjoy helping others reach their full potential.
        </p>

        <p className="mb-4">My expertise includes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Frontend Development with React, Next.js</li>
          <li>Backend Development using Node.js, Express</li>
          <li>Mobile Development with React Native</li>
          <li>Cloud & DevOps using AWS</li>
          <li>Database Management with MongoDB, PostgreSQL</li>
        </ul>

        <p className="mb-4">
          I am currently exploring ways to contribute to open-source projects
          and build software that can impact millions of people. You can find
          some of my work on{" "}
          <a
            href="https://github.com/navoditbharat"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
