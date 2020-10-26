const elements = document.getElementsByClassName("footer__title");

Array.from(elements).forEach(function(element) {
	element.addEventListener('click', event => {
		event.target.classList.toggle("footer__title--active");
	});
});

