import React from 'react';
import ReactJson from 'react-json-view';
// import './results.scss';

const Results = (props) => {
	if (props.count > 0) {
		return (
			<div className="results">
				<>
					<h2>Results</h2>
					<ReactJson src={props.results} />
					<ul>
						<li>Count: {this.props.count}</li>
						<li>Headers: {this.props.headers}</li>
					</ul>
				</>
			</div>
		);
	} else {
		return <h2>Results</h2>;
	}
};

export default Results;
