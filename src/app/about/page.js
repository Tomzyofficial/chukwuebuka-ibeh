"use client";
import Image from "next/image";
import { NavBar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CodeIcon from "@mui/icons-material/Code";

import { DownloadResume } from "@/components/utils";

export default function About() {
  const skills = [
    { name: "React", level: 60 },
    { name: "MySQL", level: 80 },
    { name: "Next.js", level: 70 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "TailwindCss", level: 80 },
    { name: "PHP", level: 50 },
    { name: "JavaScript", level: 70 },
  ];

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Triune Built-Tech Solutions",
      period: "2021 - 2022",
      description:
        "Collaborated with cross-functional team members in providing solutions and taught new interns on HTML, CSS, and jQuery.",
    },
    {
      title: "Freelancer",
      company: "Freelancing.",
      period: "2022 - Present",
      description:
        "Buiding cutting-edge web applications that stand out and exceeding clients' expectations.",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <NavBar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 p-5 md:py-32">
          {/* <div className="absolute inset-0" /> */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-(--text-color)">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Hi, I&apos;m <span>Chukwuebuka Cornelius Ibeh</span>
                </h1>
                <Typography className="text-xl mb-8" variant="body1">
                  A passionate <strong>Full Stack Developer</strong> with 3
                  years of experience creating digital experiences that make a
                  difference. I love turning complex problems into simple,
                  beautiful solutions.
                </Typography>
                <div className="flex mt-5">
                  <button
                    className="text-lg bg-(--text-color) text-(--foreground) p-5 cursor-pointer transition-color duration-200 hover:bg-stone-100 outline-none border-none"
                    onClick={() =>
                      DownloadResume("/docs/my-resume.pdf", "my-resume.pdf")
                    }
                  >
                    Download Resume
                  </button>
                </div>
              </div>
              <div className="relative w-80 h-80 md:mx-auto">
                <Image
                  loading="lazy"
                  src="/images/me.jpg"
                  alt="Chukwuebuka - Full Stack Developer"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 text-(--text-color) mx-auto">
          <div className="max-w-4xl mx-auto px-3 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Typography
                  variant="body1"
                  className="text-lg text-muted-foreground mb-6"
                >
                  Passionate about writing clean, functional code, I strive to
                  develop solutions that stand out. As a self-taught web
                  developer who understands the importance of a mobile-first
                  approach, I focus on writing reusable, efficient, and
                  standards-compliant code.
                </Typography>
                <Typography
                  variant="body1"
                  className="text-lg text-muted-foreground mb-6"
                >
                  My mission is to create solutions through code that make
                  people&apos;s lives easier and enhance their quality of life.
                  I&apos;m constantly seeking opportunities to grow—both
                  professionally and technically.
                </Typography>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CalendarMonthIcon sx={{ fontSize: "50px" }} />
                  <span>
                    <strong>3 years</strong> of hands-on experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CodeIcon sx={{ fontSize: "50px" }} />
                  <span>
                    <strong>8+ projects</strong> completed successfully
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-15 mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full rounded-full h-2">
                    <div
                      className="bg-green-100 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Experience
            </h4>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <Typography className="text-primary font-medium">
                          {exp.company}
                        </Typography>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-20">
          <div className="mx-auto px-4 max-w-4xl text-center">
            <h5 className="text-3xl md:text-4xl font-bold mb-12">
              Fun Facts About Me
            </h5>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl mb-2">💧</div>
                <div className="text-2xl font-bold text-primary mb-1">6+</div>
                <div className="text-muted-foreground">
                  Bottles of water daily
                </div>
              </div>
              <div>
                <div className="text-4xl mb-2">🌙</div>
                <div className="text-2xl font-bold text-primary mb-1">
                  1000+
                </div>
                <div className="text-muted-foreground">
                  Late night coding hours
                </div>
              </div>
              <div>
                <div className="text-4xl mb-2">📹</div>
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-muted-foreground">
                  Tutorial videos watched
                </div>
              </div>
              <div>
                <div className="text-4xl mb-2">🎵</div>
                <div className="text-2xl font-bold text-primary mb-1">Enya</div>
                <div className="text-muted-foreground">
                  Favorite coding music
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h6 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h6>
            <Typography variant="body4" className="text-xl opacity-90 mb-8 ">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi,
              I&apos;d love to hear from you!
            </Typography>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
