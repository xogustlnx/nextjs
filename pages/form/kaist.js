import styles from'../../styles/Home.module.css'


export default function Sample() {
    return<>
        <div className={styles.upperBar}>
            <img src="https://klms.kaist.ac.kr/theme/oklass39/pix/images//icon_heder_menu.png"
            className={styles.menu}
            />
            <img src="https://klms.kaist.ac.kr/theme/oklass39/pix/images/header_logo_new.svg"
            className={styles.homeBtn}></img>
            <div className={styles.timeBtn}>
                <span>02:09:53</span>
            </div>
        </div>

    </>
}