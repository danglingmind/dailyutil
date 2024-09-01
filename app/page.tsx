import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main
      className="flex w-full min-h-screen flex-col items-center"
      style={{ marginTop: "-5rem", background: "#121212" }}
    >
      <div className="absolute top-0 left-0 h-lvh w-full">
        <Spline scene="https://prod.spline.design/61ficUp7YUaVYv-y/scene.splinecode" />
      </div>
    </main>
  );
}
