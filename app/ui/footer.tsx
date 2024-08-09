import { inter, teko } from "../fonts";

export default function Footer() {
  return (
    <footer
      className={
        `${inter.className} ` +
        "w-full bg-base-content text-primary-content p-4 text-center"
      }
    >
      &copy; {new Date().getFullYear()} contertverse.in
      <div className="text-center m-1">
        Made with <span className="text-xl">☕</span> by{" "}
        <span className={teko.className}>Prateek Reddy</span>
      </div>
    </footer>
  );
}
