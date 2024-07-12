export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Logo</div>
        <ul className="header__menu">
          <li>Главная</li>
          <li>База данных</li>
        </ul>
        <div className="header__right">
          <div className="header__search">Search</div>
          <div className="header__profile">Profile</div>
        </div>
      </div>
    </header>
  );
}
