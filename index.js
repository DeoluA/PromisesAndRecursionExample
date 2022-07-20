const repeatMe = async function(currentIndex) {
	return new Promise((resolve, reject) => {
		setTimeout(async function() {
			console.log("currentIndex is:", currentIndex);
			currentIndex++;
			if(currentIndex > 5) {
				resolve("everything is done: " + currentIndex);
			}
			else{
				let goAgain = await repeatMe(currentIndex);
				return goAgain;
			};
			
		}, 1000 * currentIndex);
	});
};

const initiate = async function() {
	// we start with the index at 0:
	let outcome = await repeatMe(0);
	console.log(`outcome: ${outcome}`);
};
initiate();