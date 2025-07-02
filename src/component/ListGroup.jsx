
import ListGroupItem from "./ListGroupItem";

const ListGroup = ({ items }) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <ListGroupItem
                    key={item}
                    item={item}
                    handleBuyButtonClicked={() => console.log(`${item} bought`)}
                />
            ))}
        </ul>
    );
};

export default ListGroup;



