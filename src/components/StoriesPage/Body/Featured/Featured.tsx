import { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import { IArticle } from "../../../Types/Types";

const url = 'https://api.spaceflightnewsapi.net/v3/articles';

const Featured: React.FC = () => {
  const [featuredCards, setFeaturedCards] = useState<IArticle[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setFeaturedCards(results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
  <section className="featured-posts">
	  <div className="section-title">
	    <h2><span>Featured</span></h2>
	  </div>
	  <div className="card-columns listfeaturedtag">
      {!loading ?
        featuredCards.map((card: IArticle) => {
          return (
            <FeaturedCard
              id={card.id}
              key={card.id}
              img={card.imageUrl}
              title={card.title}
              cardText={card.summary}
              postDate={card.publishedAt}
              postRead={'10min'}
              author={card.newsSite}
            />
          );
        }).slice(0, 4)
        : 'Загрузка'}
    </div>
	</section>
  )
}

export default Featured;