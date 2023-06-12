window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".videoloop__frame", {
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

  lax.addElements("#specialty__text-container", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 0.7, 0],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, -100],
      ]
    }
  });

  lax.addElements("#media-container__vid", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 0.7, 0],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, -100],
      ]
    }
  });

  lax.addElements("#media-container__img", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 0.7, 0],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, +100],
      ]
    }
  });

  lax.addElements(".break__frame", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 1],
      ],
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0.3, 1],
      ],
    },
  });

};

