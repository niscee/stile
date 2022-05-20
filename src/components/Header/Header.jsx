import HeaderStyle from "./HeaderStyle";
import HeaderState from "./HeaderState";

// logo location.
const LOGO_URL = "./images/logo.svg";

const Header = () => {
  // destructuring css classname.
  const {
    mainContainer,
    logo,
    innerContainer,
    selectBox,
    inputBox,
    searchBtn,
    logoutBtn,
    loginText,
  } = HeaderStyle;

  //destructing state and events.
  const {
    selectHandler,
    submitHandler,
    placeHolder,
    selectType,
    search,
    searchHandler,
  } = HeaderState();

  return (
    <header className={mainContainer.style}>
      <div className={innerContainer.style}>
        <img src={LOGO_URL} className={logo.style} alt="logo" />

        <select className={selectBox.style} onChange={(e) => selectHandler(e)}>
          <option value="Username">Username</option>
          <option value="FNN Number">FNN Number</option>
        </select>

        <section>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className={inputBox.style}
              placeholder={placeHolder}
              value={search}
              onChange={(e) => searchHandler(e)}
            />
            <button type="submit" className={searchBtn.style}>
              Go
            </button>
          </form>
        </section>

        <section>
          <p className={loginText.style}>Logged In Agent: Nischal.Magar</p>
        </section>

        <button className={logoutBtn.style}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
