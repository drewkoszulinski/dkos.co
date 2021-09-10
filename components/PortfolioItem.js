import Link from 'next/link';

const PortfolioItem = (props) => {
    const handleClickReadMore = () => {
        console.log('handleClickReadMore');
    };

    return (
        <div className="portfolio-item">
            <div className="portfolio-inner-left">
                <h3 className="heading">
                    {props.title}
                </h3>
                <p className="description">{props.description}</p>
                {props.navigateTo &&
                <Link href={props.navigateTo}>
                    <button className="button secondary portfolio-btn" onClick={handleClickReadMore}>Read More</button>
                </Link>
                }
            </div>
            <div className="portfolio-inner-right">
                <img className="image" src={props.image}></img>
            </div>

        </div>
    )
}

export default PortfolioItem
