import "./Card.scss";
import Image from "../assets/images/image-equilibrium.jpg";
import EthIcon from "../assets/images/icon-ethereum.svg";
import ClockIcon from "../assets/images/icon-clock.svg";
import CreatorImage from "../assets/images/image-avatar.png";

function Card() {
  return (
    <>
      <div className="Card">
        <img alt="" src={Image} />
        <div className="card-content">
          <h3>Equilibrium #3429</h3>
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
          <p className="attribution">
            <img alt="" src={CreatorImage} />
            Creation of <a href="#">Jules Wyvern</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
