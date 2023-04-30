import laptop from '../../Images/MacBook Pro 16.png';
import screen from '../../Images/laptop.png';
import style from './Curve.module.css'


function Curve() {
    return (
        <>
            <div className={style.curve}>
                <div className={style.white_curve}>
                    <div className={style.container}>
                        <img src={laptop} alt="laptop" />
                        <div className={style.inner_container}>
                            <img src={screen} alt="screen" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Curve;