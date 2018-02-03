$(document).ready(function() {
	var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
	var quote = document.querySelector("#quote");

	document.querySelector("#xhr").addEventListener("click", () => {
		let XHR = new XMLHttpRequest();
		XHR.onreadystatechange = () => {
			quote.innerText = XHR.responseText.replace(/\[|\]/g, "");
		};
		XHR.open("GET", url);
		XHR.send();
	});

	document.querySelector("#fetch").addEventListener("click", () => {
		fetch(url)
			.then(res => {
				return res.json();
			})
			.then(data => {
				quote.innerText = `"${data[0]}"`;
			})
			.catch(e => {
				console.log("Error in Fetch request:", e);
			});
	});

	document.querySelector("#jquery").addEventListener("click", () => {
		$.getJSON(url)
			.done(data => {
				quote.innerText = `"${data[0]}"`;
			})
			.fail(e => {
				console.log("Error with jQuery request:", e.statusText);
			});
	});

	document.querySelector("#axios").addEventListener("click", () => {
		axios
			.get(url)
			.then(res => {
				quote.innerText = `"${res.data[0]}"`;
			})
			.catch(e => {
				console.log(e);
			});
	});

	$("button").mouseover(function() {
		let className = "img-" + $(this).attr("id");
		$("." + className).animate(
			{
				top: "-170px"
			},
			800
		);
	});

	$("button").mouseout(function() {
		let className = "img-" + $(this).attr("id");
		$("." + className).animate(
			{
				top: "0px"
			},
			500
		);
	});
});
