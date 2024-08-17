import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

export function GASend(hitType: string, title: string) {
  ReactGA.send({
    hitType: hitType,
    page: usePathname(),
    title: title,
  });
}
