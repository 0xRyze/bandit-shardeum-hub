const Card = ({
  title,
  subTitle,
  subDescription,
  iconUrl,
  link,
  cardColor,
}) => {
  return (
    <div className={`bucket ${cardColor} bdr has-arr-xmov has-follow anim`}>
      <div className="top !pr-[20px] md:!py-[60px]">
        <h2
          className="head-anim text-[32px] md:text-[50px] md:max-w-[70%] md:min-h-[60px]"
          style={{
            opacity: 1,
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          {title}
        </h2>
        {iconUrl && (
          <div
            className="bucket-img auto-sc flex justify-center !relative md:!absolute md:h-[120px]"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
            }}
          >
            <img
              src={iconUrl}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: 120,
              }}
            />
          </div>
        )}
      </div>
      <div
        className="bot bdr"
        style={{
          opacity: 1,
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0px, 0px)",
        }}
      >
        <h3>{subTitle}</h3>
        <p className="mt-0">{subDescription}</p>
        {link && (
          <div className="arrow">
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
        )}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          className="full"
          data-wpel-link="external"
        />
      )}
    </div>
  );
};

export default Card;
