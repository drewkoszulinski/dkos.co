import ReactLogoSvg from './logos/ReactLogoSvg'
import NextJsLogo from './logos/NextJsLogo'
import TailwindLogo from './logos/TailwindLogo'

const Footer = () => {
    return (
        <div className="footer">
            <h6 className="heading">Designed and developed using</h6>
            <div className="tech-stack">
                <ReactLogoSvg />
                <TailwindLogo />
                <NextJsLogo />
            </div>
            <p className="copyright">© Drew Koszulinski 2021</p>
        </div>
    )
}

export default Footer
