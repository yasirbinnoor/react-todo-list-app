import styles from "./ListGroupItem.module.css"

const ListGroupItem = ({ item, handleBuyButtonClicked }) => {

    return (
        <li className={`${styles["kg-item"]} list-group-item`}>
            <span className={styles["kg-span"]}>{item}</span>

            <button
                className={`${styles.button} btn btn-info `}
                onClick={handleBuyButtonClicked}
            >
                Buy
            </button>
        </li>

    );
};

export default ListGroupItem;




