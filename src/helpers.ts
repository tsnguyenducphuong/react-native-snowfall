export const createParticle = ({
  duration,
  minSize,
  maxSize,
}: {
  duration: number;
  minSize: number;
  maxSize: number;
}) => {
  const size = randomNumber(minSize, maxSize);
  const swingAmplitude = randomNumber(10, 30);
  const swingFrequency = randomNumber(0.5, 1.5);
  const swingPhase = randomNumber(0, 2 * Math.PI);
  const rotationSpeed = randomNumber(-Math.PI, Math.PI);

  return {
    size,
    deltas: {
      delayOffset: randomNumber(0, duration),
      swingAmplitude,
      swingFrequency,
      swingPhase,
      rotationSpeed,
      xPosition: randomNumber(0, 100),
    },
  };
};

export const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
