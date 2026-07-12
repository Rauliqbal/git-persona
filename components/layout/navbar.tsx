import { GitGraph } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">

        <div className="flex items-center gap-2">
          <GitGraph className="h-5 w-5" />
          <span className="font-bold text-xl">
            GitProfileGen
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#">Generator</a>
          <a href="#">Addons</a>
          <a href="#">About</a>
          <a href="#">Support</a>
        </nav>

        <Link href="https://github.com/Rauliqbal/git-persona" target="_blank">
          <Button>
            Star on GitHub
          </Button>
          </Link>
      </div>
    </header>
  );
}