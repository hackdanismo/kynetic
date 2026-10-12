
import { tween } from "./core/tween.js";
import { easings } from "./utils/easings.js";

export const kynetic = {
  to(target, options) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      throw new Error("Kynetic: target not found");
    }

    const {
      x = 0,
      duration = 1,
      ease = "linear",
      onComplete
    } = options;

    return tween({
      from: 0,
      to: x,
      duration,
      ease: easings[ease] ?? easings.linear,

      onUpdate(value) {
        element.style.transform =
          `translateX(${value}px)`;
      },

      onComplete
    });
  }
};
