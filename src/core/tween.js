
export function tween({
  from = 0,
  to = 100,
  duration = 1,
  ease = t => t,
  onUpdate,
  onComplete
}) {
  let startTime = null;
  let frameId;
  let stopped = false;

  function animate(time) {
    if (stopped) return;
    if (startTime === null) startTime = time;

    const elapsed = (time - startTime) / 1000;
    const progress = duration <= 0
      ? 1
      : Math.min(elapsed / duration, 1);

    const eased = ease(progress);
    const value = from + (to - from) * eased;

    onUpdate?.(value);

    if (progress < 1) {
      frameId = requestAnimationFrame(animate);
    } else {
      onComplete?.();
    }
  }

  frameId = requestAnimationFrame(animate);

  return {
    kill() {
      stopped = true;
      cancelAnimationFrame(frameId);
    }
  };
}
