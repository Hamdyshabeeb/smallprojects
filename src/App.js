import './App.css';
import Accordion from './components/accordion/accordion';
import RandomColor from './components/random-color/random-color';
import StarRating from './components/star-rating/star-rating';
import ImageSlider from './components/image-slider/imageSlider';
import ProductPagination from './components/product-pagination/productPaginatin';
import TreeMenu from './components/tree-nav/menu';
import QrGenerator from './components/qr-generator/qrGenerator';
import SwitchTheme from './components/switch-theme/switch theme';
import ScroolIndicator from './components/scroll-indicator/scrollIndicator';
import Tabs from './components/custom-tabs/customTabs';

function App() {
	return (
		<div className="App">
			<Accordion />
			<RandomColor />
			<StarRating starNumber={10} />
			<ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />
			<ProductPagination limit={13} url={'https://dummyjson.com/products'} />

			<TreeMenu />

			<QrGenerator />

			<SwitchTheme />
			<ScroolIndicator />
			<Tabs />
		</div>
	);
}

export default App;
