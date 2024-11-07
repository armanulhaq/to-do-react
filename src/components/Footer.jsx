import styles from "./footer.module.css";
const Footer = ({ count, total }) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>Completed Tasks: {count}</div>
            <div className={styles.footerText}>Total Tasks: {total}</div>
        </div>
    );
};

export default Footer;
