import { postJson } from "./client";

/**
 * @param {1 | 2 | 3 | 4 | 5} step
 */
export async function recordVisitStep(step) {
  await postJson("/portal-visit", {
    step,
    company: window.location.href,
    botCheck: true,
  });
}
