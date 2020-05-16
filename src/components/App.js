import React from 'react';
import '../css/App.css';

function App() {
	return (
		<div>
			<div className="item">
				<h1>Change lighting on one object</h1>
				<div className="info">
					scissors tool [i], cut out object, select > toggle quick mask [shift-q], paintbrush tool [p], black = subtract, white = add, space = pan around, click shift for straight line, when finished then [shift-q], [enter], color > hue-saturation > lightness

				</div>
				<div className="imagesArea">
					<img src="images/masks1.png" alt="masks1" />
					<img src="images/masks2.png" alt="masks2" />
				</div>
			</div>
		</div>
	);
}

export default App;
