import { useNavigation } from "../context/NavigationContext";

const NoMatchPage = () => {
  const { navigateHandler } = useNavigation();
  const clickHandler = () => navigateHandler("/saylani-web");

  return (
    <div className="noMatchPage">
      <h2>It looks like you're lost...</h2>
      <button onClick={clickHandler}>Go to home page</button>
    </div>
  );
};

export default NoMatchPage;
