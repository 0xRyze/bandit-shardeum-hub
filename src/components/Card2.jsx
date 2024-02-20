const Card2 = ({ name, image, description }) => {
  return (
    <div
      className="module project-mod has-arr-xmov"
      data-tags="Infrastructure,Sphinx 1.X,Live"
    >
      <div className="inner">
        <div className="txt">
          <div className="mod-logo">
            <img src={image} alt="Quest image" className="lazy-load" />
          </div>
          <p className="font-bold">
            <strong className="font-bold">{name}</strong>
          </p>
          <p>{description}</p>
        </div>
        {/*<a href="#" className="overlay-btn full" data-id="rec0a9ceoEgCqPn6A"/>*/}
        <div className="tags">
          <a href="#" className="tag">
            Quest
          </a>
        </div>
      </div>
      <div className="arrow overlay-btn">
        <img
          src="https://shadev.xyz/wp-content/themes/shardeum/img/global/arrow.svg"
          alt="arrow"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        />
      </div>
    </div>
  );
};

export default Card2;
