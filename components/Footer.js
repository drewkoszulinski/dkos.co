import ReactLogoSvg from './logos/ReactLogoSvg'
import NextJsLogo from './logos/NextJsLogo'
import TailwindLogo from './logos/TailwindLogo'

const Footer = () => {
    return (
        <div class="footer">
            <h6 class="heading">Designed and developed using</h6>
            <div class="tech-stack">
                <ReactLogoSvg />
                <TailwindLogo />
                <NextJsLogo />
            </div>
            <p class="copyright">© Drew Koszulinski 2021</p>
        </div>
    )
}

export default Footer
