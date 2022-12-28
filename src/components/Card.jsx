import cardStyle from "../scss/card.module.scss";

const Card = ({ veri }) => {
    return (
      <div className={cardStyle["external"]}>
        {veri.map((item) => { 
            const { id, name, job, comment, img } = item
            return (
              <div className={cardStyle["container"]}>
                <h1 className={cardStyle["isim"]}>{name}</h1>
                <h2 className={cardStyle["meslek"]}>{job}</h2>
                <p>{comment}</p>
                <img
                  className={cardStyle["resim"]}
                  style={{ width: "10rem" }}
                  src={img}
                  alt="img"
                />
                <div>
                  <button className={cardStyle["but1"]}>Small</button>
                  <button className={cardStyle["but2"]}>Large</button>
                </div>
              </div>
            );
                            }
                 )
        }    
        </div>
            )
};

export default Card;
