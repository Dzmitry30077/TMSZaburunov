import './Stories.css'

interface IStoriesProps {
  id: number;
  img: string;
  title: string;
	cardText?: string;
	postDate?: string;
	postRead?: string;
	author?: string;
}

const Stories: React.FC<IStoriesProps> = ({img, title, cardText, postDate, postRead, author}) => {
  return (
    <div className="card">
			<a href="post.html">
				<img className="img-fluid" src={img} alt=""/>
			</a>
			<div className="card-block">
				<h2 className="card-title"><a href="post.html">{title}</a></h2>
				<h4 className="card-text">{cardText?.slice(0, 100) + '...'}</h4>
				<div className="metafooter">
					<div className="wrapfooter">
						<span className="meta-footer-thumb">
						<a href="author.html"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/></a>
						</span>
						<span className="author-meta">
						<span className="post-name"><a href="author.html">{author}</a></span><br/>
						<span className="post-date">{postDate?.slice(0, 10)}</span><span className="dot"></span><span className="post-read">{postRead}</span>
						</span>
						<span className="post-read-more"><a href="post.html" title="Read Story"><svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Stories;