import { atom, selector } from "recoil";

export const NewsData = atom({
  key: "textState",
  default: [],
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: async () => {
    const apidata = await callNewsApi();
    return apidata;
  },
});

async function callNewsApi() {
  let returnData = [];
  try {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-01-07&sortBy=publishedAt&apiKey=f3ac7c723e884aa383e0d0d4e11280ba"
    );
    returnData = await res.json();
  } catch (err) {
    console.log(err);
  }
  return returnData.articles;
}
