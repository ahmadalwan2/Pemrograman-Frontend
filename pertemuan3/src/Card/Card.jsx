<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

import "./Card.css"

const Card = ({ title = 0, price, list1, list2, list3, list4, isPopular = false, }) => {
        return (
            <div className={`card ${isPopular ? "card-popular" : ""}`}>
                <div className={`card-header ${isPopular ? "card-popular" : ""}`}>
                    <h3>
                        {title}{" "} 
                        <span 
                            className={`${isPopular ? "badge-popular" : ""}`}>
                                {isPopular ? "Popular" : ""}
                        </span>
                    </h3>
                    <h1>{price} 
                        <small>/Month</small>
                    </h1>

                </div>
                <div className="card-body">
                    <ul>
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                    <li>{list4}</li>
                    </ul>
                    <button className={`btn ${isPopular ? "btn-popular" : ""}`}>Purchase plan</button>
                </div>
            </div>
        )
}

export default Card;