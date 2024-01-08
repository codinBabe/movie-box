import { FaHeart } from 'react-icons/fa';
import { Component } from 'react';
import styles from "./MovieCard.module.css";

class FavoriteIcon extends Component {
    toggleFavorite = () => {
        const { isFavorite, setIsFavorite } = this.props;
        setIsFavorite(!isFavorite);
    };

    render() {
        const { isFavorite } = this.props;
        const iconClassName = isFavorite ? styles.red : '';

        return (
            <FaHeart
                className={iconClassName}
                onClick={this.toggleFavorite}
            />
        );
    }
}


export default FavoriteIcon;
