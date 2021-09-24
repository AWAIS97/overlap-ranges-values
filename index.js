module.export.validateRangesValues = (newRange, preRange) => {
  let n_start = parseFloat(newRange.startValue);
  let n_end = parseFloat(newRange.endValue);
  let p_start = parseFloat(preRange.startValue);
  let p_end = parseFloat(preRange.endValue);

  if (n_start <= p_start && p_start <= n_end) return true;

  if (n_start <= p_end && p_end <= n_end) return true;

  if (p_start < n_start && n_end < p_end) return true;

  return false;
};
