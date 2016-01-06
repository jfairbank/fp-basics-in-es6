const processWord =
  compose(hyphenate, reverse, toUpperCase);



const processWordExplicit = (word) => {
  return hyphenate(reverse(toUpperCase(word)));
};
