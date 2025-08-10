"use client";
import { useState } from "react";
import Image from "next/image";

import { NavBar } from "@/components/ui/Navbar";

import { Footer } from "@/components/ui/Footer";
import { useEffect } from "react";

export default function Home() {

  const mainContent = [
    {
      label: "Website/App Development",
      image: "/images/website-design.PNG",
      altText: "Website and app development",
    },
    {
      label: "E-commerce",
      image: "/images/responsive-site.PNG",
      altText: "E-commerce development",
    },
    {
      label: "Responsive Design",
      image: "/images/monitoring.png",
      altText: "Responsive Design",
    },
    {
      label: "Website/App Monitoring",
      image: "/images/monitoring.png",
      altText: "Website Monitoring",
    },
  ];

  const TextRotator = () => {
    const texts = [
      "We build modern web apps.",
      "Your success is our mission.",
      "Innovation starts here."
    ];
  }

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <NavBar />
      <section>
        {/* <!-- hero section --> */}
        <section>
          <div className="banner-content h-[60vh] md:h-[100vh]">
            <div className="wrapper-word">
              <h3 id="wrapper" className="text-pretty">
                I build quality, standards-driven websites and web applications
                that help businesses thrive.
              </h3>
            </div>
          </div>
        </section>

        {/*  Page content */}
        <main className="">
          <div className="block md:flex md:justify-between bg-black w-full p-5 md:p-10">
            <div className="w-full w-full md:w-2/5 py-10 text-(--text-color)">
              <p className="text-4xl md:text-[3rem] font-bold pb-5">
                Bring passion to <br />
                <span id="write-up">everything I do</span>
              </p>
              <div className="text-lg pb-5">
                <p id="demo-message" className="text-lg"></p>
                <p className="text-pretty">
                  We live in a digital world where perception precedes
                  everything in business. With the right online presence for
                  your business, you will sure have more customers than before.
                </p>
              </div>
              <div className="grid gap-4 grid-cols-2 gap-4">
                {mainContent.map((con) => (
                  <div key={con.label}>
                    <Image
                      src={con.image}
                      alt={con.altText}
                      width={50}
                      height={50}
                      style={{ height: "auto", width: "auto" }}
                    />
                    <span>{con.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                loading="lazy"
                aria-label="Image"
                src="/images/setting.jpg"
                id=""
                alt="Side article image"
                width={200}
                height={300}
                className="h-[50vh] md:h-[90vh] w-150"
              />
            </div>
          </div>
          <div className="my-30 text-(--text-color)">
            <p className="font-600 text-pretty text-[35px] leading-15 md:text-[45px] text-center mx-auto max-w-[90%] md:w-[50%]">
              I craft professional web applications with a focus on clean
              design, scalable architecture, and real-world impact—helping
              businesses turn ideas into measurable success.
            </p>
          </div>
        </main>
        {/* <!-- contact section --> */}
        <Footer />
      </section>
    </>
  );
}
