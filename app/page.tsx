import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main
      className="flex w-full min-h-screen flex-col items-center"
      style={{ marginTop: "-5rem" }}
    >
      <div>
        <Spline scene="https://prod.spline.design/61ficUp7YUaVYv-y/scene.splinecode" />
      </div>
    </main>
  );
}
