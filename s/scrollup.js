window.onload = function() { // ����� �������� ��������

	var scrollUp = document.getElementById('scrollup'); // ������ �������

	scrollUp.onmouseover = function() { // ������ ������i���
		scrollUp.style.opacity=0.6;
		scrollUp.style.filter  = 'alpha(opacity=60)';

	};

	scrollUp.onmouseout = function() { //�������� ������i���
		scrollUp.style.opacity = 0.8;
		scrollUp.style.filter  = 'alpha(opacity=80)';
	};

	scrollUp.onclick = function() { //������� �����
		window.scrollTo(0,0);
	};

// show button

	window.onscroll = function () { // �i� ��� ������ ���������� �� ������ ����
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};