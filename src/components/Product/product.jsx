import s from './index.module.css';
import cn from 'classnames';
import { ReactComponent as Save } from './img/save.svg';
import truck from './img/truck.svg';
import quality from './img/quality.svg';

import { calcDiscountPrice, isLiked, createMarkup } from '../../utils/product';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { ContentHeader } from '../ContentHeader/content-header';

export const Product = ({ onProductLike, pictures, likes = [], reviews, tags, name, price, discount, description, wight, _id}) => {
    const {user: currentUser} = useContext(UserContext);

    const navigate = useNavigate()
    const discount_price = calcDiscountPrice(price, discount);
    const isLike = isLiked(likes, currentUser?._id);
    const desctiptionHTML = createMarkup(description);
    return (
    <>
        <ContentHeader title={name}>
            <div>
                <span>Артикул:</span> <b>2388907</b>
            </div>
        </ContentHeader>
        
        <div className={s.product}>
            <div className={s.imgWrapper}>
                <img src={pictures} alt={`Изображение ${name}`} />
            </div>
            <div className={s.desc}>
                <span className={discount ? s.oldPrice : s.price}>{price}&nbsp;₽</span>
                {discount !== 0 && <span className={cn(s.price, 'card__price_type_discount')}>{discount_price}&nbsp;₽</span>}
                <div className={s.btnWrap}>
                </div>
                <button className={cn(s.favorite, {[s.favoriteActive]: isLike})} onClick={onProductLike}>
                    <Save/>
                    <span>{isLike ? 'В избранном' : 'В избранное'}</span> 
                </button>
            </div>
        </div>

        <div className={s.box}>
            <h2 className={s.title}>Описание</h2>
            

        </div>
    </>
    )
}