"use client";

import { NavBar } from "@/components/ui/Navbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const socials = [
    {
      image: "/images/instagram_line.svg",
      href: "https://www.instagram.com/_tomzyofficial/",
      altText: "Instagram image",
    },
    {
      image: "/images/whatsapp_line.svg",
      href: "https://api.whatsapp.com/send?phone=2348167041738",
      altText: "Whatsapp image",
    },
    {
      image: "/images/linkedin_line.svg",
      href: "https://www.linkedin.com/in/chukwuebuka-ibeh-2a7312239/",
      altText: "LinkedIn image",
    },
    {
      image: "/images/github_line.png",
      href: "https://github.com/Tomzyofficial/Tomzyofficial/",
      altText: "GitHub image",
    },
  ];

  return (
    <>
      <NavBar />

      <section className="max-w-2xl mx-auto py-25 px-4">
        <section>
          <div className="mb-6">
            <h1 className="font-bold text-3xl md:text-6xl">Contact me</h1>
            <h2 className="font-normal text-2xl md:text-4xl">Hire me</h2>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <Typography variant="text-xl md:text-2xl">
              Reach out on my socials
            </Typography>
            <Typography>
              I'm always excited to collaborate on innovative projects. Whether
              you have a clear vision or just an idea, let's bring it to life
              together.
            </Typography>
          </div>
          <div>
            <Typography>
              Thank you for finding me — I truly appreciate your interest. You
              can expect a response within 24 business hours.
            </Typography>
            <div className="flex gap-4 mt-4">
              {socials.map((social, index) => (
                <Typography key={index}>
                  <Link href={social.href} target="_blank">
                    <Image
                      src={social.image}
                      width={40}
                      height={40}
                      alt={social.altText}
                    />
                  </Link>
                </Typography>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
