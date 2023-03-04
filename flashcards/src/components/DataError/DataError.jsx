import './dataError.css';
import '../../style/variables.css';

function DataError({ error }) {
	return <div className="count_dataError">Error: {error.message}</div>;
}

export default DataError;
