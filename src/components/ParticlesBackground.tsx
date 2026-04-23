import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonPath } from "@tsparticles/path-polygon";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonPath(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
        opacity: 1,
      },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "trail",
          },
          onClick: { enable: false },
        },
        modes: {
          trail: {
            delay: 0.1,
            pauseOnStop: true,
            quantity: 3,
          },
        },
      },
      particles: {
        color: {
          value: [
            "#ff0000",
            "#ff6600",
            "#ffcc00",
            "#33ff00",
            "#00ffcc",
            "#0099ff",
            "#6600ff",
            "#ff00ff",
          ],
        },
        links: { enable: false },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.none },
          speed: 3,
          path: {
            enable: true,
            delay: { value: 0.01 },
            generator: "polygonPathGenerator",
            options: {
              sides: 6,
              turnSteps: 30,
              angle: 30,
            },
          },
          trail: {
            enable: true,
            length: 30,
            fill: { color: "rgba(0,0,0,0.00)" },
          },
        },
        number: {
          density: { enable: true },
          value: 120,
        },
        opacity: { value: 1 },
        shape: { type: "circle" },
        size: { value: 2 },
        reduceDuplicates: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
            onClick: { enable: false },
          },
          modes: {
            trail: {
              delay: 0.1,
              pauseOnStop: true,
              quantity: 3,
            },
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ background: "#000000" }}
      />
    );
  }

  return <></>;
};
