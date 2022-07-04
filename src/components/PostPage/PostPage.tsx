import AlertBar from "../AlertBar/AlertBar";
import Header from "../Header/Header"
import Twits from "../Twits/Twits";
import Post from "./Post/Post";
import Related from "./Related/Related";


const PostPage = () => {

 return (
  <>
    <Header />
    <div className="container">
	      <div className="row">
          <Post />
          <Related />
          <Twits />
          <AlertBar />
        </div>
      </div>

  </>
 )
}

export default PostPage;