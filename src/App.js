import './App.css';
import Accordion from './components/accordion/accordion';
import RandomColor from './components/random-color/random-color';
import StarRating from './components/star-rating/star-rating';
import ImageSlider from './components/image-slider/imageSlider';

function App() {
	return (
		<div className="App">
			<Accordion />
			<RandomColor />
			<StarRating starNumber={10} />
			<ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />
		</div>
	);
}

export default App;
