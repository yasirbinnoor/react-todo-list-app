const ErrorMessage = ({ items }) => {
    if (items.length === 0) {
        return <h3 className="text-danger">Null List</h3>;
    }
    return null;
};

export default ErrorMessage;
