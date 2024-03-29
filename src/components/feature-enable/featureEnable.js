import { useContext } from 'react';
import FeatureFlagContext from './context';
import TicTacToe from '../tic-tac-toe/ticTacToe';
import QrGenerator from '../qr-generator/qrGenerator';
import SearchAutoComplete from '../search-autocomplete/searchAutocomplete';
import GithubProfileFinder from '../github-profile-finder/githubProfileFinder';
import Modal from '../modal-window/modal';
import Tabs from '../custom-tabs/customTabs';
import ScroolIndicator from '../scroll-indicator/scrollIndicator';
import SwitchTheme from '../switch-theme/switch theme';
import ProductPagination from '../product-pagination/productPaginatin';
import ImageSlider from '../image-slider/imageSlider';
import TreeMenu from '../tree-nav/menu';
import StarRating from '../star-rating/star-rating';
import RandomColor from '../random-color/random-color';
import Accordion from '../accordion/accordion';

export default function FeatureEnable() {
	const { loading, flags } = useContext(FeatureFlagContext);

	const featursObject = {
		randomColor: <RandomColor />,
		accordion: <Accordion />,
		imageSlider: (
			<ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />
		),
		ticTacToe: <TicTacToe />,
		searchAutoComplete: <SearchAutoComplete />,
		gitHubProfileFinder: <GithubProfileFinder />,
		modal: <Modal />,
		treeMenu: <TreeMenu />,
		tabs: <Tabs />,
		scroolIndicator: <ScroolIndicator />,
		switchTheme: <SwitchTheme />,
		qrGenerator: <QrGenerator />,
		productPagination: (
			<ProductPagination limit={13} url={'https://dummyjson.com/products'} />
		),

		starRating: <StarRating starNumber={10} />,
	};

	if (loading) return <h2>Loading Features Flags</h2>;
	return (
		<>
			{Object.keys(featursObject).map((key) =>
				flags[key] ? featursObject[key] : null
			)}
		</>
	);
}
