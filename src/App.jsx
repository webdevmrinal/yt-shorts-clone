import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateList } from "./utilities/videoListSlice";
import { useSelector } from "react-redux";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [isPrevDisabled, setisPrevDisabled] = useState(true);
  const [isNextDisabled, setisNextDisabled] = useState(false);
  const dispatch = useDispatch()
  
  const storeVideoList = useSelector(store=>store.videos)



  async function fetchVideos() {
    const json = await fetch(
      "https://internship-service.onrender.com/videos?page=" + pageNumber
    );
    const data = await json.json();
    dispatch(updateList(data.data.posts))
  }

  useEffect(() => {
    fetchVideos();
    pageNumber > 0 ? setisPrevDisabled(false) : setisPrevDisabled(true);
  }, [pageNumber]);

  function handlePrev() {
    if (pageNumber === 0) setisPrevDisabled(true);
    else setPageNumber((pageNumber) => pageNumber - 1);
  }

  function handleNext() {
    if (pageNumber === 9) setisNextDisabled(true);
    else setPageNumber((pageNumber) => pageNumber + 1);
  }

  if (!storeVideoList) return;

  return (
    <>
      <Navbar />
      <div className="my-6 flex items-center justify-center flex-wrap gap-4">
        {storeVideoList.items.map((post) => {
          // console.log(post);
          return (
            <Link key={post.postId} to={`/${post.postId}`}>
              <VideoCard {...post} />
            </Link>
          );
        })}
      </div>
      <div className="w-4/5 flex justify-between m-auto mb-6">
        <button
          className="px-6 py-1 border rounded-md bg-blue-600 text-white disabled:bg-slate-500 disabled:cursor-not-allowed"
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          Previous
        </button>
        <button
          className="px-6 py-1 border rounded-md bg-blue-600 text-white disabled:bg-slate-500 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
