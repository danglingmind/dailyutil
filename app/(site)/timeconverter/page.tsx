"use client";
import { useEffect, useState } from "react";

export default function Time() {
  const timeZones: string[] = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Africa/Cairo",
    "Pacific/Auckland",
    "America/Chicago",
    "Europe/Paris",
    "Asia/Dhaka",
    "Australia/Perth",
  ];

  const [convertedTime, setConvertedTime] = useState("");
  const [convertedZone, setConvertedZone] = useState("");
  const [inputZone, setInputZone] = useState("");
  const [inputHH, setInputHH] = useState<number>();
  const [inputMM, setInputMM] = useState<number>();
  const [inputSS, setInputSS] = useState<number>();

  useEffect(() => {
    setConvertedTime(
      `${inputZone} : ${inputHH}/${inputMM}/${inputSS} : ${convertedZone}`
    );
  }, [inputHH, inputMM, inputSS, inputZone, convertedZone]);

  return (
    <div className="flex flex-col gap-20 items-center justify-center p-20">
      <div className="flex flex-col gap-5">
        <div>Origin Timezones</div>
        <div className="flex gap-2 flex-wrap">
          {timeZones.map((zone) => (
            <div
              key={zone}
              className={`badge ${
                inputZone === zone ? "badge-primary" : "badge-neutral"
              }`}
              role="button"
              onClick={() => setInputZone(zone)}
            >
              {zone}
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-row justify-center">
          <input
            type="numeric"
            className="input input-lg input-bordered w-24"
            placeholder="HH"
            onInput={(e) => setInputHH(e.currentTarget.valueAsNumber)}
          />
          <div style={{ fontSize: "40px" }}>:</div>
          <input
            type="numeric"
            className="input input-lg input-bordered w-24"
            placeholder="MM"
            onInput={(e) => setInputMM(e.currentTarget.valueAsNumber)}
          />
          <div style={{ fontSize: "40px" }}>:</div>
          <input
            type="numeric"
            className="input input-lg input-bordered w-24"
            placeholder="SS"
            onInput={(e) => setInputSS(e.currentTarget.valueAsNumber)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div>Converted Timezones</div>
        <div className="flex gap-2 flex-wrap">
          {timeZones.map((zone) => (
            <div
              key={zone}
              className={`badge ${
                convertedZone === zone ? "badge-primary" : "badge-neutral"
              }`}
              role="button"
              onClick={() => setConvertedZone(zone)}
            >
              {zone}
            </div>
          ))}
        </div>
        <div className="text-5xl border p-3 rounded-xl">{convertedTime}</div>
      </div>
    </div>
  );
}
