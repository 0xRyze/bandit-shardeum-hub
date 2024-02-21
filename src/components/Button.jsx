const Button = ({ title, onClick }) => {
  return (
    <div className="cta-header" onClick={onClick}>
      <a
        className="cta-btn split has-arr sa cursor-pointer w-full"
        data-text={title}
        style={{ display: "inline-flex", opacity: 1 }}
      >
        <span className="cta-txt">{title}</span>
        <span className="cta-arr">
          <span className="arr">
            <div className="arr-img">
              <img src="https://shadev.xyz/wp-content/themes/shardeum/img/global/chevron-blue.svg" />
            </div>
          </span>
        </span>
      </a>
    </div>
  );
};

export default Button;
