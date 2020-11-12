import * as R from "rambda";

export const rChain = (fn) => {
  return R.ifElse(R.isNil, R.always(""), fn);
};

export const rDoIfTrue = (x) => {
  return R.ifElse(R.equals(true), R.always(), R.always(x));
};
