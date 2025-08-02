"use client";

import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";
import { NavBar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

import Link from "next/link";

const projects = [
  {
    title: "Xe-xchanger Web Application",
    description:
      "A simple and intuitive currency converter that helps users convert values between different world currencies in real-time.",
    image: "/images/xe-xchange-screenshot.png?height=300&width=500",
    tags: ["HTML5", "JavaScript.js", "CSS"],
    demo: "https://xe-xchanger.netlify.app",
  },
  {
    title: "Blueseedfinance Online Banking Web application",
    description:
      "A sleek and responsive online banking interface, built to showcase essential design and fullstack development skills.",
    image: "/images/blueseed-screenshot.png?height=300&width=500",
    tags: ["PHP", "TailwindCSS", "HTML5", "PHPMailer", "MySQL", "Third-party API"],
    demo: "#",
  },
  {
    title: "Outrest Web Application",
    description:
      "A simple sleep outside website that provide you with everything you need to sleep outside comfortably at an affordable price..",
    image: "/images/outrest-screenshot.png?height=300&width=500",
    tags: ["CSS", "HTML5", "JavaScript", "Vite"],
    demo: "https://outrest.netlify.app/",
  },
  {
    title: "Cryptocurrency Exchange",
    description:
      "A simple and user-friendly web application that allows users to sell their cryptocurrency and receive instant payouts. The platform features real-time pricing, and a seamless selling process for popular coins like Bitcoin, Ethereum, and Bitcoin Cash.",
    image: "/images/tip.png?height=300&width=500",
    tags: ["PHP", "API Integration", "Bootstrap", "CSS", "MySQL"],
    category: "Web App",
    demo: "https://tomcrypto.wuaze.com/",
  },
  {
    title: "Crypto Investment Web Application",
    description:
      "Crypto investment web application tailored at seamless investment plans with ROI. While not connected to a real crypto backend, the website showcases the core design and implementation of fullstack development.  ",
    image: "/images/whitesky-screenshot.png?height=300&width=500",
    tags: ["HTML5", "JavaScript.js", "TailwindCSS", "MySQL"],
    category: "Analytics",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <StarBorderIcon sx={{ fontSize: "20px" }} />
            Featured Work & Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-(--text-color) mb-6">
            My Creative
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Project Portfolio
            </span>
          </h1>
          <p className="text-xl text-(--text-color) mb-8 max-w-2xl mx-auto">
            Explore a collection of my full-stack web applications. Each project
            represents a unique challenge and creative solution.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group border-0 overflow-hidden">
                <CardMedia
                  component="img"
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <CardContent className="space-y-4">
                  <div className="text-xl font-bold text-(--foreground)">
                    {project.title}
                  </div>
                  <div className="text-gray-600 line-clamp-3">
                    {project.description}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center transition-color duration-200 bg-blue-400 hover:bg-blue-500 rounded-md font-normal py-2 px-4 text-(--text-color) no-underline text-center"
                    >
                      <Image
                        src="/images/external_link_line.png"
                        width={30}
                        alt="Open demo"
                        height={30}
                        className="w-4 h-4 mr-2"
                      />
                      Live Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
