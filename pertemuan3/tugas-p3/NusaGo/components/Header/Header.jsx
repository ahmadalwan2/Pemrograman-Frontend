import './Header.css';
function Header() {
    return (
        <div className='Home' id='home'>
            <div className='photo-row'>
                <img src="../../public/img/01.jpg" alt="this photo not support in your device" />
                <img src="../../public/img/02.jpg" alt="this photo not support in your device" />
                <img src="../../public/img/03.jpg" alt="this photo not support in your device" />
            </div>
            <h2 className='Hero'>Jelajahi Keindahan <br />Alam Indonesia</h2>
            <p className='CTA'>Temukan destinasi wisata alam terbaik, hotel, kuliner, dan <br />penginapan yang sempurna untuk petualangan Anda</p>
            <div className='divBtn'>
            <button className='btnHeader'><a href="#search">Jelajahi Sekarang</a></button>
            </div>
        </div>
    )
}

export default Header;