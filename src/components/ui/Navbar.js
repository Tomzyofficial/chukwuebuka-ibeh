"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  useEffect(() => {
    // Handle header scrolldown effect
    const navbarEffect = () => {
      if (typeof window != "undefined") {
        const wind = window.addEventListener("scroll", () => {
          var header = document.querySelector("header");
          header.classList.toggle("sticky", window.scrollY > 300);
        });

        return () => removeEventListener(wind);
      }
    };
    navbarEffect();

    // Handle navigation links
    const menu = document.querySelector(".menu-option");
    const navList = document.querySelector(".nav-list");

    if (!menu || !navList) return;

    // Only allow one toggle at a time, and close menu on navigation
    const toggleNav = (e) => {
      e.stopPropagation();
      navList.classList.toggle("show");
    };

    menu.addEventListener("click", toggleNav);

    // Cleanup
    return () => {
      menu.removeEventListener("click", toggleNav);
    };
  }, []);

  const menuOptions = [
    {
      label: "Home",
      href: "/",
      icon: <HomeRoundedIcon sx={{ fontSize: "1.3rem" }} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <Person2RoundedIcon sx={{ fontSize: "1.3rem" }} />,
    },
    {
      label: "Services",
      href: "/services",
      icon: <HandymanRoundedIcon sx={{ fontSize: "1.3rem" }} />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <BusinessCenterRoundedIcon sx={{ fontSize: "1.3rem" }} />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <PermPhoneMsgRoundedIcon sx={{ fontSize: "1.3rem" }} />,
    },
  ];

  return (
    <>
      <header className="bg-white w-full transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 h-[12vh] flex items-center">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  alt="Company Logo"
                  width={120}
                  height={50}
                  priority
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="nav-list transition-all duration-300 block md:flex space-x-8">
              {menuOptions.map((option) => (
                <Link
                  key={option.label}
                  href={option.href}
                  className={`${
                    pathname === option.href ? "text-blue-400" : "text-black"
                  } md:rounded-md font-semibold text-lg md:text-md md:border transition-color duration-300 md:flex md:items-center md:justify-center transition-colors duration-300 md:hover:bg-gradient-to-r md:from-black/50 md:via-iron-900 md:to-zinc-300 md:hover:text-(--text-color)`}
                  style={{
                    textDecoration: "none",
                    height: "48px",
                    minWidth: "120px",
                  }}
                >
                  <span className="flex items-center justify-center">
                    {option.icon}
                  </span>
                  <span className="flex items-center justify-center">
                    {option.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="menu-option p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                aria-label="Open menu"
              >
                <LinearScaleOutlinedIcon
                  sx={{ fontSize: "2.5rem", color: "#1c2b33" }}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
