import './App.css';
import Accordion from './components/accordion/accordion';
import RandomColor from './components/random-color/random-color';
import StarRating from './components/star-rating/star-rating';

function App() {
	return (
		<div className="App">
			<Accordion />
			<RandomColor />
			<StarRating starNumber={10} />
		</div>
	);
}

export default App;
