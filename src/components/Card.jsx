import "./Card.scss";
import EthIcon from "../assets/images/icon-ethereum.svg";
import ClockIcon from "../assets/images/icon-clock.svg";
import CreatorImage from "../assets/images/image-avatar.png";

function Card() {
  return (
    <>
      <div className="Card">
        <div className="image-preview"></div>
        <div className="card-content">
          <a href="#">Equilibrium #3429</a>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className="details">
            <p className="details__eth">
              <img alt="" src={EthIcon} />
              0.041 ETH
            </p>
            <p className="details__timeleft">
              <img alt="" src={ClockIcon} />3 days left
            </p>
          </div>
          <hr />
          <div className="attribution">
            <img alt="" src={CreatorImage} />
            <p>
              Creation of <a href="#">Jules Wyvern</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
