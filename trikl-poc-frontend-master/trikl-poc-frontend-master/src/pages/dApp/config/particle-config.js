const particlesConfig = {
  background: {
    color: {
      value: "#010b16",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  backgroundMask: {
    cover: {
      color: {
        value: "#010b16",
      },
      opacity: 0.1,
    },
  },
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        selectors: "#repulse-div",
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
    },
  },
  particles: {
    color: {
      value: "random",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      gravity: {
        acceleration: 0.01,
        maxSpeed: 1,
      },
      path: {
        clamp: false,
      },
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 1,
      spin: {},
      trail: {
        enable: true,
        length: 15,
        fillColor: {
          value: "transparent",
        },
      },
      warp: true,
    },
    number: {
      density: {
        enable: true,
      },
      limit: 500,
      value: 300,
    },
    opacity: {
      value: 0.2,
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 5,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
};
export default particlesConfig;
