window.onload = function() { // после загрузки страницы

	var scrollUp = document.getElementById('scrollup'); // знайти елемент

	scrollUp.onmouseover = function() { // додати прозорiсть
		scrollUp.style.opacity=0.6;
		scrollUp.style.filter  = 'alpha(opacity=60)';

	};

	scrollUp.onmouseout = function() { //прибрати прозорiсть
		scrollUp.style.opacity = 0.8;
		scrollUp.style.filter  = 'alpha(opacity=80)';
	};

	scrollUp.onclick = function() { //обробка клацу
		window.scrollTo(0,0);
	};

// show button

	window.onscroll = function () { // пiд час скролу показувати та ховати блок
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};