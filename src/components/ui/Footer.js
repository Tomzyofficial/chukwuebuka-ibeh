import Link from "next/link";
import Image from "next/image";
export function Footer() {
  const socials = [
    {
      icon: "/images/instagram_line.svg",
      href: "https://www.instagram.com/_tomzyofficial/",
      altText: "Instagram Icon",
    },
    {
      icon: "/images/whatsapp_line.svg",
      href: "https://api.whatsapp.com/send?phone=2348167041738",
      altText: "Whatsapp Icon",
    },
    {
      icon: "/images/linkedin_line.svg",
      href: "https://www.linkedin.com/in/chukwuebuka-ibeh-2a7312239/",
      altText: "LinkedIn Icon",
    },
  ];

  return (
    <footer>
      <div className="my-30 flex justify-center items-center flex-col">
        <h5 className="font-semibold text-[20px] pb-5 text-(--text-color)">
          Ready to discuss your project?
        </h5>
        <Link
          href="/contact"
          className="text-[3rem] font-bold no-underline text-(--text-color) bg-[var(--foreground)] py-2 px-20"
        >
          Let's talk
        </Link>
      </div>

      <div className="flex justify-between px-5 md:px-8 mb-8">
        <div className="text-(--text-color)">
          Ibeh&copy;
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <Link href={social.href} key={index} target="_blank">
              <Image
                src={social.icon}
                width={40}
                height={40}
                alt={social.altText}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
