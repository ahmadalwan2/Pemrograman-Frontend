import './Header.css';

function Header({src, alt}) {
    return (
        <div>
            {/* <img className='imageHero' src={src} alt={alt} /> */}
            <h2 className='Hero'>Jelajahi Keindahan Alam Indonesia</h2>
            <p className='CTA'>Temukan destinasi wisata alam terbaik, hotel, kuliner, dan penginapan yang sempurna untuk petualangan Anda</p>
            <button className='btnHeader'><a href="#">Jelajahi Sekarang</a></button>
        </div>
    )
}

export default Header;