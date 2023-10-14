import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button, buttonVariants } from "../ui/button";

import { ArrowRight } from "lucide-react";

import MobileNav from "./MobileNav";
import { blogCategories } from "@/config/data";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 border-b top-0 z-30 w-full  border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-zinc-200">
          <Link href="/" className="flex text-xl z-40 font-semibold">
            <span>
              Affiflate <span className="text-green-500">Blogging.</span>
            </span>
          </Link>

          <MobileNav />

          <div className="hidden items-center justify-end gap-x-4 lg:flex">
            {blogCategories.map((item) => {
              return (
                <Button
                  variant="ghost"
                  className="text-sm"
                  key={item + "itemkey"}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;