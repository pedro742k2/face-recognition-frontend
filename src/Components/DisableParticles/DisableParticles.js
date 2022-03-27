import "./DisableParticles.css";

const disableParticles = () => {
  const toggleParticles = () => {
    document.querySelector(".particles").classList.toggle("disabled");
  };

  return (
    <div className="disable-particles-container">
      <button onClick={toggleParticles}>Toggle Particles</button>
    </div>
  );
};

export default disableParticles;
