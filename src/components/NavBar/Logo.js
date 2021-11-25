import { Link } from 'react-router-dom';
import {images} from '../../assets/images/images';

const Logo = () => {
    return <Link to="/">
        <img className="navBarLogo" src={images.whiteMakeSense} alt="logo make_sense"/>
    </Link>
}

export default Logo;