import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      post: "Горные походы открывают удивительные природные ландшафты",
      date: new Date(),
    },
    {
      title: "Поход в годы",
      post: "Думал, что очень много време.",
      date: new Date(),
    },
  ];

  return (
    <>
      <Button />
      <CardButton>Новое воспоминание</CardButton>
      <CardButton>
        <JournalItem
          title={data[0].title}
          post={data[0].post}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          post={data[1].post}
          date={data[1].date}
        />
      </CardButton>
    </>
  );
}

export default App;
