import { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import { IArticle, IState, IArticlePost } from "../../../../Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { pushArticles } from "../../../../store/action";


const url = "https://api.spaceflightnewsapi.net/v3/articles";

const Featured: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  const articles = useSelector<IState, IArticle[]>((state) => state.articles);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        dispatch(pushArticles(results));

        setLoading(false);
      })
      .catch(console.error);
  }, [dispatch]);

  return (
  <section className="featured-posts">
	  <div className="section-title">
	    <h2><span>Featured</span></h2>
	  </div>
	  <div className="card-columns listfeaturedtag">
    {!loading ?
        articles.map((card: IArticle) => {
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