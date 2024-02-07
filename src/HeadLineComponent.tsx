import "./index.css";
function HeadLineComponent({ element }) {
  function MoveToBlog(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      <div
        className="m-2 px-10 py-5 rounded-3xl bg-black text-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  "
        onClick={() => MoveToBlog(element.url)}
      >
        <h2 className="font-semibold">{element.title}</h2>
        <p className="font-thin">{element.description}</p>
        <div className="flex justify-between">
          <div className="flex justify-start">
            <p className="font-thin ">{element.source.name} -</p>
            <p className="font-thin ml-2">{element.publishedAt}</p>
          </div>
          <div>
            <p className="font-thin">{element.author}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadLineComponent;
