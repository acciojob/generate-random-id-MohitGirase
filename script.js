function makeid(l) {
	// write your code here
	const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const len = char_list.length;

	let ans = "";
	for(let i=0; i<l; i++){
		ans += char_list.charAt(
			Math.floor(Math.random()*len);
		)
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
