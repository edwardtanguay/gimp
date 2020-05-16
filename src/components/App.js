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
					<img src="images/masks1.png" alt="img" />
					<img src="images/masks2.png" alt="img" />
				</div>
			</div>
			<div className="item">
				<h1>Convert background of image to transparent</h1>
				<div className="info">
					foreground select tool, roughly select object, close loop, press [enter], blue overlay, change color if you need to, increase radius, brush on foreground, click "preview mask", select "draw background", brush on unwanted background, click "select"
				</div>
				<div className="imagesArea">
					<img src="images/foreground1.png" alt="img" />
					<img src="images/foreground2.png" alt="img" />
				</div>
			</div>
		</div>
	);
}

export default App;
