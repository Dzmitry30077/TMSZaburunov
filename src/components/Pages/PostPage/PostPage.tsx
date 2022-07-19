import AlertBar from "../../elements/AlertBar/AlertBar";
import Header from "../../Layouts/Header/Header"
import Twits from "../../elements/Twits/Twits";
import Post from "./Body/Post/Post";
import Related from "./Body/Related/Related";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../Api";
import { setArticlePost } from "../../store/action";
import { IArticlePost, IState } from "../../Types/Types";

const PostPage = () => {

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const article = useSelector<IState, IArticlePost>((state) => state.article);

  useEffect(() => {
    getPost(id, (result: any) => {
      dispatch(setArticlePost(result));
    });
  }, []);

 return (
  <>
    <Header />
    <div className="container">
	      <div className="row">
          {article ? (
            <Post
              key={article.id}
              title={article.title}
              img={article.imageUrl}
              author={article.newsSite}
              cardText={article.summary}
              postDate={article.publishedAt?.slice(0, 10)}
              postRead={'2 min '}
            />
          ) : (
            "Статья с таким номером не существует"
          )}
        <Related
          key={article.id}
          title={article.title}
          img={article.imageUrl}
          author={article.newsSite}
          postDate={article.publishedAt?.slice(0, 10)}
          postRead={'2 min '}
        />
        <Twits />
        <AlertBar />
        </div>
      </div>

  </>
 )
}

export default PostPage;