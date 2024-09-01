import Link from "next/link";
import { cormorantGaramond, inter, teko } from "../fonts";

const FooterContent = () => {
  return (
    <div className="w-full flex justify-between">
      <span className="text-left">
        &copy; {new Date().getFullYear()} contertverse.in
      </span>
      <div>
        <span className="text-xl">Made with ☕</span> by{" "}
        <span className={teko.className}>
          <Link
            href={"https://www.linkedin.com/in/prateekreddy"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Prateek Reddy
          </Link>
        </span>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer
      className={
        `${cormorantGaramond.className} ` +
        "relative p-2 bg-base-content text-primary-content text-right"
      }
    >
      <FooterContent />
    </footer>
  );
}
