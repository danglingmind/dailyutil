import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center gap-5 p-24">
      <div>
        <Spline scene="https://prod.spline.design/61ficUp7YUaVYv-y/scene.splinecode" />
      </div>
      <div className="text-2xl">Welcome to the ultimate converter tool.</div>
      <div className="text-xl">Bookmark it</div>
      <div className="text-3xl">Happy conversion</div>
    </main>
  );
}
