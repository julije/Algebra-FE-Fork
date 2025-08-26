export var exercise = (function () {
  var steps = 0;

  function increseteps() {
    steps++;
  }

  return {
    walk: function () {
      increseteps();
    },
    getTotalSteps: function () {
      return steps;
    },
  };
})();
