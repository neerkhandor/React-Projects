import ImageSlider from "./components/ImageSlider";
function App() {
  return (
    <>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"20"} page={'1'} />
    </>
  );
}

export default App;
