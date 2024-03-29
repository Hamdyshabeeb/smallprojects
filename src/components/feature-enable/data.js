const flagsDataObject = {
	ticTacToe: true,
	accordion: true,
	searchAutoComplete: true,
	gitHubProfileFinder: false,
	modal: false,
	tabs: true,
	scroolIndicator: true,
	switchTheme: true,
	qrGenerator: false,
	productPagination: false,
	imageSlider: true,
	treeMenu: true,
	starRating: true,
	randomColor: true,
};

/**
 *@description Asynchronously retrieves flags data
 * @returns {Promise<Object>}
 * @rejects {string} If there's an error in retrieving the flags data.
 */

export default function flagsDataService() {
	return new Promise((resolve, reject) => {
		if (flagsDataObject) {
			setTimeout(() => resolve(flagsDataObject), 500);
		} else {
			reject('error in flags');
		}
	});
}
