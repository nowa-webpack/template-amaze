// answer for page
exports.answers = function(answers, abc) {
  answers.name = answers.name.replace(/[\W_]+(.)/g, function(p, p1) {
    return p1.toUpperCase();
  }).replace(/^./, function(p) {
    return p.toUpperCase();
  });
  return answers;
};
