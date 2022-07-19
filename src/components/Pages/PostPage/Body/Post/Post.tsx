import SocialMediaShare from "../../../../elements/SocialMediaShare/SocialMediaShare"
import { IFeaturedCardProps} from '../../../../Types/Types';


const Post: React.FC<IFeaturedCardProps> = ( {title, img, author, cardText, postDate, postRead} ) => {

  return (
    <>
    <div className="container">
      <div className="row">
        <SocialMediaShare />
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <div className="mainheading">
            <div className="row post-top-meta">
              <div className="col-md-2">
                <a href="author.html"><img className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal" /></a>
              </div>
              <div className="col-md-10">
                <a className="link-dark" href="author.html">{author}</a><a href="#" className="btn follow">Follow</a>
                <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that
                  you're currently previewing. Developing professional premium themes, templates, plugins, scripts since
                  2012.</span>
                <span className="post-date">{postDate}</span><span className="dot"></span><span className="post-read">{postRead}
                  read</span>
              </div>
            </div>
            <h1 className="posttitle">{title}</h1>
          </div>
          <img className="featured-image img-fluid" src={img} alt="pic" />
          <div className="article-post">
            <p>{cardText}</p>
            <blockquote>
              {cardText}
            </blockquote>
          </div>
          <div className="after-post-tags">
            <ul className="tags">
              <li><a href="#">Design</a></li>
              <li><a href="#">Growth Mindset</a></li>
              <li><a href="#">Productivity</a></li>
              <li><a href="#">Personal Growth</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="hideshare"></div>
    </>
    )
  }

export default Post;