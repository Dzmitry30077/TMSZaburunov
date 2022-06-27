import { useState, useEffect } from "react";
import Stories from "./Stories";
import { IReports } from "../../../Types/Types";
import './Stories.css'


const url = 'https://api.spaceflightnewsapi.net/v3/reports';

const AllStories: React.FC = () => {
	const [stories, setStories] = useState<IReports[] | []>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setStories(results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="recent-posts">
	    <div className="section-title">
		    <h2><span>All Stories</span></h2>
	    </div>
	    <div className="card-columns listrecent">
			{!loading ?
        stories.map((story: IReports) => {
          return (
            <Stories
              id={story.id}
              key={story.id}
              img={story.imageUrl}
              title={story.title}
              cardText={story.summary}
              postDate={story.publishedAt}
              postRead={'10min'}
              author={story.newsSite}
            />
          );
        }).slice(0, 6)
        : 'Загрузка'}
      </div>
	  </section>
  )
}

export default AllStories;