import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// Implement the launch sequence function here and export it as the default export.
export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  liftoff();
  deployPayload();
}
