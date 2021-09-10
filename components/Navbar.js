import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <span className="logo-d">d</span>
                    <span className="logo-k">k</span>
                    <span className="logo-o">o</span>
                    <span className="logo-s">s</span>
                </div>
                <div className="nav-buttons">
                    <Link href="/cv.pdf">
                        <button className="button secondary mr-5 bg-black">cv</button>
                    </Link>
                    <Link href="https://drew61.typeform.com/to/dysVVM?typeform-source=dkos.co">
                        <button className="button primary">contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

