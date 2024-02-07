import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./recoilStore";
import HeadLineComponent from "./HeadLineComponent";
import NavBar from "./NavBar";
import "./index.css";
import Footer from "./Footer";
interface articles {
  title: string;
  description: string;
  url: string;
}
export default function App() {
  const NewsDataArr = useRecoilValue(filteredTodoListState);
  return (
    <>
      <NavBar />
      <div className="w-max:screen">
        {NewsDataArr.map((ele: articles) => (
          <HeadLineComponent element={ele}></HeadLineComponent>
        ))}
      </div>
      <Footer />
    </>
  );
}
