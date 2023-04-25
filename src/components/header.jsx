export const Header = () => {
  const navigate = (section) => {
    window.location.replace(`/#${section}`)
  }
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="/logo.svg" alt="G" />
      </div>
      <div className="menu-links-container">
        <ul>
          <li onClick={() => navigate('about')}>home</li>
          <li onClick={() => (window.location.href = 'pay')}>pay</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
