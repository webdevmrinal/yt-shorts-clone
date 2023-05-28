import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { HiOutlineArrowLeft } from "react-icons/hi";

function VideoPage() {
  const { videoId } = useParams();
  const storeVideoList = useSelector((store) => store.videos);
  console.log(storeVideoList);

  if (storeVideoList.length === 0) return;

  const playingVideoDetails = storeVideoList.items.find(
    (detail) => detail.postId === videoId
  );

  return (
    <>
      <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
        <div className="relative h-fit">
          <Link to="/">
            <div className="absolute top-0 left-28 m-4 cursor-pointer z-10">
              <HiOutlineArrowLeft size={"1.8em"} color="white" />
            </div>
          </Link>
          <div>
            
          </div>
          <ReactPlayer
            url={`${playingVideoDetails.submission.mediaUrl}`}
            playing={true}
            loop={true}
            height={"100vh"}
            volume={0.05}
          />
        </div>
      </div>
    </>
  );
}

export default VideoPage;
