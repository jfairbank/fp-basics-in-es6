import reduce from '../iteration/reduce';
const placeholder = Object.create(null);

function partial(fn, ...args) {
  return (...otherArgs) => {
    const newArgs = reduce(args, (memo, arg) => {
      if (arg === placeholder) {
        return [
          memo[0].concat(memo[1].slice(0, 1)),
          memo[1].slice(1)
        ];
      }

      return [
        memo[0].concat([arg]),
        memo[1]
      ];
    }, [[], otherArgs]);

    const argsToPass = newArgs[0].concat(newArgs[1]);

    return fn(...argsToPass);
  };
}

export default partial;
export const _ = placeholder;
