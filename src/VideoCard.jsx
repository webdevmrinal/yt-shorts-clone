function VideoCard({ creator, submission }) {
  return (
    <>
      <div className="h-96 w-screen p-4 border flex flex-col justify-center items-center shadow-md sm:w-60">
        <img className="h-5/6" src={`${submission.thumbnail}`} alt="video-thumbnail" />
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={`${creator.pic}`} alt="" />
          <div>
            <div className=" font-bold">{`${submission.title}`}</div>
            <div className=" text-sm font-light text-ellipsis whitespace-nowrap overflow-hidden">{`${creator.handle}`}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
