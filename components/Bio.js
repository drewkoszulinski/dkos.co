import Link from 'next/link'

const Bio = () => {
    return (
        <div className="bio-outer">
            <img className="pf-pic" src="/assets/images/headshot.jpeg" />
            <h1 className="heading">Drew Koszulinski</h1>
            <h3 className="heading">UX Designer & Developer</h3>
            <p className="bio-body">Drew Koszulinski is a UX designer & developer focused on consistent, systematic, and pixel-perfect user experiences. The way I see it, job-centered product direction & design is central to gaining a rock-solid userbase. Smash the contact button below to get in touch!</p>
            <Link href="https://drew61.typeform.com/to/dysVVM?typeform-source=dkos.co">
                <button className="button primary w-full max-w-sm">Let&apos;s talk!</button>
            </Link>
        </div>
    )
}

export default Bio
