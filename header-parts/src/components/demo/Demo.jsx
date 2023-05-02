
import demo_vector from '../../Images/demo_vector.jpg'
import style from './demo.module.css';
import Curve2 from '../curve2/Curve';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Demo = () => {

    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Company Name:", companyName);
        console.log("Phone Number:", phoneNumber);
        console.log("Email:", email);

    };

    return (
        <>

            <Curve2 />
            <div className={style.demo_container}>
                <div className={style.demo_left}>
                    <div className={style.heading}>
                        Lets Schedule Your Demo
                    </div>
                    <div className={style.subheading}>
                        Just Answer a few simple questions so we can personalize the right experience for you.
                    </div>
                    <div className={style.input_boxes}>
                        <form onSubmit={handleSubmit}  className={style.input_boxes}>
                            <input
                                type="text"
                                required
                                placeholder='Enter your Name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <input
                                type="email"
                                required
                                placeholder='Enter your Email Address'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <input
                                type="tel"
                                required
                                placeholder='Enter your Phone Number'
                                value={phoneNumber}
                                onChange={(event) => setPhoneNumber(event.target.value)}

                            />
                            <input
                                type="text"
                                required
                                placeholder='Enter your Company Name'
                                value={companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                            />

                            {/* <Link to='/'> */}
                            <button type="submit" className={style.request_demo_button}>
                                Request A Demo
                            </button>
                            {/* </Link> */}
                        </form>
                    </div>


                </div>
                <div className={style.demo_right}>
                    <img src={demo_vector} alt="vector_img" />
                </div>
            </div>


        </>
    )
}

export default Demo