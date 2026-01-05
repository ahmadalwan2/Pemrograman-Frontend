import './CardFree.css'

function Card({type, month, payment, list1, list2, list3, list4, headerColor}) {
    return (
        <>
                <div className="cardList">
                    <div className="card-header" style={{ backgroundColor: headerColor }}>
                    <p className="type">{type}</p>
                    <h3>{month}</h3>
                    </div>

                <div className='card-body'>
                    <ul>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                    </ul>
                    <button>Purchase plan</button>
                </div>
                </div>
        </>
    )
}

export default Card;