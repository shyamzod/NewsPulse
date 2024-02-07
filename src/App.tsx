import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./recoilStore";
interface articles {
  title: string;
  description: string;
  url: string;
}
function App() {
  const NewsDataArr = useRecoilValue(filteredTodoListState);
  return (
    <>
      {NewsDataArr.map((ele: articles) => (
        <div>
          <h2>{ele.title}</h2>
          <h4>{ele.description}</h4>
          <a href={ele.url} target="_blank">
            Click Here to Read More
          </a>
        </div>
      ))}
    </>
  );
}

export default App;
