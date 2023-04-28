import React from 'react'
import style from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={style.footer_bottom}>
                <div className={style.privacy_policy_section}>
                    <div className={style.policy}>Privacy Policy</div>
                    <div className={style.policy}>Terms of Service</div>
                    <div className={style.policy}>Cookies Setting</div>
                </div>
                <div className={style.rights_reserved_section}>
                2022 airdokan. All right reserved.
                </div>
            </div>
        </>
    )
}

export default Footer