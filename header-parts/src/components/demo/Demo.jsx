
import demo_vector from '../../Images/demo_vector.jpg'
import style from './demo.module.css';
import Curve2 from '../curve2/Curve';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import { toast } from 'react-toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Demo = () => {

    const [name, setName] = useState("");
    const [company_name, setCompany_name] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // alert(`Thank You ${name.toUpperCase()} For Subscribing Rare Billions`)

        try {
            const res = await axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER_URL}/demo`,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    name,
                    company:company_name,
                    phone,
                    email
                },
            });
            if (res.status === 200) {
                toast.success(`Thank You ${name}`, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // setDisable(false);
                // setPage("reset");
            }
        }
        catch (error) {
            toast.success(`Error Occured in the Demo API`, {
                position: "bottom-center",
                autoClose: 3000,
                theme: "dark",
            });
            console.log(error.message);
        }
    }

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
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}

                            />
                            <input
                                type="text"
                                required
                                placeholder='Enter your Company Name'
                                value={company_name}
                                onChange={(event) => setCompany_name(event.target.value)}
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