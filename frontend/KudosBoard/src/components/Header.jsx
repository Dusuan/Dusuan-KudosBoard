import "./styles/Header.css";

const Header = ({setDarkTheme, darkTheme}) => {

  const handleSetDarkTheme= () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="Header">
      <div></div>
      <h1> KudoBoard </h1>
      <button onClick={handleSetDarkTheme}> Light/Dark </button>
    </div>
  );
};

export default Header;
