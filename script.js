window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".slogan__frame", {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        {
          992: [1, 1, 0.8],
          993: [1, 1, 0.5],
        },
      ],
    },
  });

  lax.addElements(".slogan__text-container", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, 1],
      ],
    },
  });

  lax.addElements(".presentation__heading-container", {
    scrollY: {
      scale: [
        ["elCenterY+500", "elCenterY+900"],
        [1, 0.7],
      ],
      opacity: [
        ["elCenterY+900", "elCenterY+1100", "elCenterY+1400"],
        [1, 1, 0],
      ],
    },
  });

  lax.addElements(".presentation__highlight", {
    scrollY: {
      opacity: [
        ["elInY+100", "elCenterY+100", "elOutY+100"],
        [1, 1, 0],
      ],
    },
  });

  lax.addElements(".presentation__highlight-big", {
    scrollY: {
      opacity: [
        ["elCenterY+500", "elCenterY+600", "elCenterY+1100"],
        [0, 0, 1],
      ],
      translateY: [
        ["elCenterY+500", "elCenterY+600", "elCenterY+1100"],
        [+100, -100, -600],
      ],
    },
  });

  lax.addElements("#specialty__text-container", {
    scrollY: {
      opacity: [
        ["elCenterY+900", "elCenterY+1100"],
        {
          768: [1, 1],
          769: [1, 0],
        },
      ],
      translateX: [
        ["elCenterY+900", "elCenterY+1100"],
        {
          768: [1, 1],
          769: [0, -100],
        },
      ],
    },
  });

  lax.addElements("#media-container__vid", {
    scrollY: {
      opacity: [
        ["elCenterY+500", "elCenterY+700"],
        {
          768: [1, 1],
          769: [1, 0],
        },
      ],
      translateX: [
        ["elCenterY+500", "elCenterY+700"],
        {
          768: [1, 1],
          769: [0, -100],
        },
      ],
    },
  });

  lax.addElements("#media-container__img", {
    scrollY: {
      opacity: [
        ["elCenterY+800", "elCenterY+1000"],
        {
          768: [1, 1],
          769: [1, 0],
        },
      ],
      translateX: [
        ["elCenterY+800", "elCenterY+1000"],
        {
          768: [1, 1],
          769: [0, +100],
        },
      ],
    },
  });

  lax.addElements(".break__frame", {
    scrollY: {
      opacity: [
        ["elCenterY+900", "elCenterY+1000", "elCenterY+1600"],
        {
          768: [1, 1, 1],
          769: [0, 0, 1],
        },
      ],
      scale: [
        ["elCenterY+900", "elCenterY+1000", "elCenterY+1600"],
        {
          768: [1, 1, 1],
          769: [0, 0.5, 1],
        },
      ],
    },
  });

  lax.addElements(".portrait__highlight", {
    scrollY: {
      opacity: [
        ["elInY+800", "elInY+1300"],
        [1, 0],
        // {
        //   768: [1, 1, 1],
        //   769: [1, 0.7, 0],
        // },
      ],
    },
  });
}