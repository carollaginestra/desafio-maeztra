let subscription = document.getElementById('subscription');

function closeModalNewsletter(){
	subscription.classList.remove('newsletter-modal--active')
}

let closeButton = document.querySelector('.newsletter-modal__close');
if(closeButton) {
	closeButton.addEventListener("click",(event) => {
		closeModalNewsletter()
	})
}

let closeModal = document.querySelector('#subscription');

if(closeModal) {
	closeModal.addEventListener("click",(event) => {
		if (event.target.id == 'subscription')
			closeModalNewsletter()
	})
}
