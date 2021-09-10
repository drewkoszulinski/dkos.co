import Image from 'next/image'

const Subpage = () => {
    return (
        <div className="subpage-container">
            <div className="subpage-hero">
                <Image src="/assets/images/broadnet-logo.png" layout='fill'></Image>
                <h2 className="subpage-heading">Broadnet Teleservices</h2>
                <h3 className="subpage-subheading">A ground-up design system & implementation in Angular 10</h3>
            </div>
            <div className="body-container">
                <div className="subpage-body">Unfortunately, Nift went the way of many other startups—they pivoted countless times before eventually calling it a day on this project (read: abandon entirely). However, I'd be lying if I said this wasn’t a ton of fun to work on. Nift was born from the desire to travel often, and work in places that inspire you. To my profound dismay, these shining mockups won't ever move beyond codeless sketch files. Goodnight, sweet prince.</div>

            </div>
        </div>
    )
}

export default Subpage
