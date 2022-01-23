import styles from '../../styles/Home.module.css'


export default function Realkaist() {
    return<>
    <header></header>

    <body id='body' className={styles.body}>
        <header className={styles.ksHeader}>
            <div className={styles.group}>
                <div className={styles.ksHeaderL}>
                
                    <div className={styles.menu}>
                        
                    </div>
                    <div className={styles.logo}>
                        <img style={{width: 110}} src='https://klms.kaist.ac.kr/theme/oklass39/pix/images/header_logo_new.svg'></img>
                    </div>
                </div>
                <div className={styles.ksHeaderR}>
                    <ul className={styles.nonManual}>
                        <li className={styles.loginTime}>
                            <p className={styles.timeStamp}>02:44:14</p>
                            <a className={styles.moreTime}>연장</a>
                        </li>
                        <li calssName={styles.alarm}>
                            <div className={styles.alarmIcon}>
                                <a className={styles.alarmPicture}></a>
                            </div>

                            <select className={styles.multiUsers}>
                                <option>20200356 신태현</option>
                            </select>
                        </li>
                        <li calssName={styles.language}>
                            <div className={styles.languageBar}>
                                한국어 (ko)
                            </div>
                        </li>
                        <li className={styles.logOut}>
                            <div className={styles.logOutWords}>
                            로그아웃
                            </div>
                        </li>
                    </ul>
                    <a className={styles.manual}>
                        MANUAL
                    </a>
                </div>        
            </div>
        </header>

    </body>



    </>
}