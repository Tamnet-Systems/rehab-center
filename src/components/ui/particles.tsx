import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

interface ParticlesProps {
  id?: string;
  className?: string;
  particlesOptions?: any;
}

export const ParticlesComponent = ({
  id = "tsparticles",
  className = "",
  particlesOptions = {},
}: ParticlesProps) => {
  const [initialized, setInitialized] = useState(false);

  // Initialize particles only on client-side
  useEffect(() => {
    setInitialized(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

  // Default particle options - teal theme
  const defaultOptions = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      color: {
        value: "#0D9488",
      },
      links: {
        color: "#0D9488",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const options = {
    ...defaultOptions,
    ...particlesOptions,
  };

  if (!initialized) return null;

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}; 