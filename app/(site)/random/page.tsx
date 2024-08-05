export default function Random() {
  return (
    <div
      className="flex flex-col gap-5 p-10"
      style={{ margin: "0 auto", width: "fit-content" }}
    >
      {/* time */}
      <div className="flex gap-2 items-center">
        <div>{"Time"}</div>
        <div>
          <input type="text" className="input input-sm input-bordered" />
        </div>
      </div>
      {/* date */}
      <div className="flex gap-2 items-center">
        <div>{"Date"}</div>
        <div>
          <input type="text" className="input input-sm input-bordered" />
        </div>
      </div>
      {/* button */}
    </div>
  );
}
