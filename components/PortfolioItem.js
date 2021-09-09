import Link from 'next/link';

const PortfolioItem = (props) => {
    const handleClickReadMore = () => {
        console.log('handleClickReadMore');
    };

    return (
        <div class="portfolio-item">
            <div class="portfolio-inner-left">
                <h3 class="heading">
                    {props.title}
                </h3>
                <p class="description">{props.description}</p>
                {props.navigateTo &&
                <Link href={props.navigateTo}>
                    <button class="button secondary portfolio-btn" onClick={handleClickReadMore}>Read More</button>
                </Link>
                }
            </div>
            <div class="portfolio-inner-right">
                <img class="image" src={props.image}></img>
            </div>

        </div>
    )
}

export default PortfolioItem
