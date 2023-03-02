import s from './index.module.css';
import cn from 'classnames';
import {ReactComponent as FavoriteIcon} from './img/favorites.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import { UserContext } from '../../context/userContext';

function Header({children}) {
  const { favorites } = useContext(CardContext);
  const {user} = useContext(UserContext)
  return (
  
    <header className={cn(s.header,'cover')}>
      <div className="container">
        <div className={s.header__wrapper}>
          {children}
          <div className={s.box}>
          <div className={s.text}>{user.name}</div>
          <div className={s.text}>{user.about}</div>
        </div>
          <div className={s.iconsMenu}>
            <Link className={s.favoritesLink} to={{pathname:"/favorites", state: 'sfsdfsdf'}}>
              <FavoriteIcon/>
              {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
