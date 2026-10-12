export const easings = {
  linear: t => t,
  easeIn: t => t * t * t,
  easeOut: t => 1 - (1 - t) ** 3,
  easeInOut: t =>
    t < 0.5
      ? 4 * t ** 3
      : 1 - (-2 * t + 2) ** 3 / 2
};