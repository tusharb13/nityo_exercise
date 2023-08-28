// Function that gets the desired value from dataset
function getExpectedValue(param1, param2, param3) {
	try {
		const upperParam1 = param1.toUpperCase();
		const upperParam2 = param2.toUpperCase();
		const upperParam3 = param3.toUpperCase();

		// Validate input parameters
		if (
			!["A", "B", "C"].includes(upperParam1) ||
			!["A", "B"].includes(upperParam2) ||
			!["A", "B", "C", "D", "E"].includes(upperParam3)
		) {
			return "Invalid Parameters";
		}
		const dataSetRow = dataset.find(
			(row) => row[0] === upperParam1 && row[1] === upperParam2
		);

		if (dataSetRow) {
			const columnIndex = ["A", "B", "C", "D", "E"].indexOf(upperParam3) + 2;

			if (columnIndex >= 2 && columnIndex < dataSetRow.length) {
				return dataSetRow[columnIndex];
			} else {
				return "Invalid Column Index of param 3";
			}
		}

		// If parameters are not found in the dataset, return a default value
		return "N/A";
	} catch (error) {
		return "Error";
	}
}

const dataset = [
	["A", "A", 0, 0, 0, 0, 0],
	["A", "B", 1, 0, 1, 1, 0],
	["B", "A", 1, 0, 1, 1, 1],
	["B", "B", 1, 0, 1, 1, 1],
	["C", "A", 0, 0, 0, 0, 0],
	["C", "B", 1, 0, 0, 1, 1],
];

// Test cases
console.log(getExpectedValue("A", "A", "B")); // Output: 0
console.log(getExpectedValue("A", "B", "C")); // Output: 1
console.log(getExpectedValue("B", "A", "E")); // Output: 1
console.log(getExpectedValue("C", "B", "E")); // Output: 1
console.log(getExpectedValue("A", "A", "D")); // Output: 0
console.log(getExpectedValue("B", "B", "A")); // Output: 1
console.log(getExpectedValue("X", "Y", "Z")); // Output: Error (exception handling)
