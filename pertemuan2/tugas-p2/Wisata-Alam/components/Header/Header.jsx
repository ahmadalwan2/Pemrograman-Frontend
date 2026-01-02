function Header({Hero, imgSrc, imgAlt}) {
    return (
        <div>
            <h3>{Hero}</h3>
            <img src={imgSrc} alt={imgAlt} />
            <button style={{border: "none", backgroundColor: "yellow"}}>Pesan Sekarang</button>
        </div>
    )
}

export default Header;