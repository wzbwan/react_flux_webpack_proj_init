var React = require('react');

var TitleComponent = React.createClass({
	render: function(){
		return (
				<div>
					<h1>Hello React i am wzb.</h1>
				</div>
			)
	}
});

React.render(
	<TitleComponent />,
	document.body
	);