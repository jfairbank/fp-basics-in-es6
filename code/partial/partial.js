// ES2015 version with arrow functions
// and rest parameters
function partial(fn, ...args) {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs);
  };
}

const placeholder = Object.create(null);

export default partial;
export const _ = placeholder;
