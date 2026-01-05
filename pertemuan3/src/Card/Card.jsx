import "./Card.css"

const Card = ({ title, price, list1, list2, list3, list4 }) => {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>{title}</h3>
                    <h1>{price}</h1>
                </div>
                <div className="card-body">
                    <ul>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                    </ul>
                    <button>Purchase plan</button>
                </div>
            </div>
        )
}

export default Card;