"use client";

import { Navs } from "@/config/Navigations";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="lg:hidden">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 cursor-pointer text-zinc-700"
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            <>
              {Navs.map((item) => {
                return (
                  <>
                    <li>
                      <Link
                        onClick={() =>
                          closeOnCurrent(`/category/${item?.slug}`)
                        }
                        className="flex items-center w-full font-semibold"
                        href="/dashboard"
                      >
                        {item.name}
                      </Link>
                    </li>
                    <li className="my-3 h-px w-full bg-gray-300" />
                    <li></li>
                  </>
                );
              })}
            </>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
