import React from "react";
import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <Particles
      params={{
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
            opacity: 0,
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
                force: 80,
              },
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0,
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
            value: "#0052FF",
          },
          links: {
            color: {
              value: "random",
            },
            distance: 0,
            opacity: 1,
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
            speed: 0.5,
            spin: {},
            trail: {
              enable: false,
              length: 15,
            },
            warp: true,
          },
          number: {
            density: {
              enable: true,
            },
            limit: 800,
            value: 500,
          },
          opacity: {
            value: 0.2,
            animation: {
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBg;
