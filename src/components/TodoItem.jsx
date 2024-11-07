import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>{item}</div>
                <button className={styles.deleteButton}>x</button>
            </div>
            <hr className={styles.line} />
        </>
    );
}
