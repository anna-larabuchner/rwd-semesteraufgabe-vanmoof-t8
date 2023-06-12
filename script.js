window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".selector", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0.3, 1, 1],
      ],
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [0.3, 1, 1],
      ],
    },
  });

  lax.addElements(".frame", {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        {
          599: [1, 1, 0.8],
          600: [1, 1, 0.5],
        }
      ],
    },
  });

  lax.addElements(".animation__fadeIn", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 1],
      ],
    },
  });
};

