/**
 * @Params {gridId} - takes an id of grid example #thisGrid
 * @Returns {pattern} - returns a gridArea value `<value> / <value>` array ex [[`1/1`]]
 */
export const createCheckerPattern = async (gridId: string) => {
	const grid = await document.querySelector(gridId);
	let numSquares: number = 0;
	let gridSize: number = 0;
	const pattern = [];

	if (grid instanceof Element) {
		const gridStyles = await window.getComputedStyle(grid);
		const numColumns = await gridStyles.getPropertyValue("grid-template-columns").split(" ").length;
		const numRows = await gridStyles.getPropertyValue("grid-template-rows").split(" ").length;
		numSquares = Math.ceil((numColumns * numRows) / 2);
		gridSize = numColumns * numRows;

		let row = 0;
		let col = 0;
		let toggle = false;
		let count = 0;

		while (count < numSquares && row < numRows) {
			if (toggle) {
				pattern.push(`${row + 1} / ${col + 1}`);
				count++;
			}

			col++;
			toggle = !toggle;

			if (col >= numColumns) {
				col = 0;
				row++;
				toggle = !toggle;
			}
		}
	}
	return { pattern };
};
