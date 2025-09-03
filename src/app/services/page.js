import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavBar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function About() {
  const services = [
    {
      title: "Web & Application Development",
      desc: "Web and application development is the craft of turning ideas into interactive digital experiences that solve real-world problems. As a developer, I focus on creating responsive, secure, and standards-compliant solutions that adapt seamlessly across devices and platforms. From structuring clean, maintainable code to integrating APIs and optimizing performance, my goal is to build applications that not only work — but work well.",
    },
    {
      title: "Backend Development",
      desc: "Backend development is where logic lives and performance matters. I build reliable, secure, and scalable server-side systems that power seamless user experiences. From database design to API architecture, I focus on clean code, fast responses, and rock-solid functionality that just works.",
    },
    {
      title: "Frontend Development",
      desc: "I don’t just write code — I craft experiences. My frontend development approach combines clean UI design with thoughtful interaction to create web applications that not only look great, but feel intuitive and engaging. From the first pixel to the last breakpoint, I focus on performance, accessibility, and scalability. I translate Wireframes and Sketch designs into pixel-perfect, responsive interfaces.",
    },
  ];
  return (
    <>
      <NavBar />

      <section id="services" className="services">
        <div className="max-w-6xl mx-auto py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Services
          </h1>
          <div className="flex flex-col md:flex-row p-4 justify-around gap-4">
            {services.map((service, index) => (
              <div key={index}>
                <Card className="p-2">
                  <CardContent>
                    <Typography variant="h5" sx={{ paddingBottom: "10px" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2">{service.desc}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
