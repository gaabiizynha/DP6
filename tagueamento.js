// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//<!-- Google Analytics -->


	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})

(window,document,'script', async_src ='https://www.google-analytics.com/analytics.js','ga');

//<!-- End Google Analytics -->



ga('create', 'UA-12345-6', 'auto');

const sendGA = function (hitType, eventCategory, eventAction, eventLabel){
	const gaMeasurementID = {hitType, eventCategory, eventAction, eventLabel};
	ga('send', gaMeasurementID);
}

const sendEventGA = function (eventCategory, eventAction, eventLabel) {
	sendGA('event', eventCategory, eventAction, eventLabel);
}

const __ = function (selector) {
	return document.querySelectorAll(selector);
}

const paramLink = function (link) {
	if (link == null || link === undefined) {
		return null;
	}

	const getLink = link.split('#');
	const i = getLink.length - 1;

	return (i > 0) ? getLink[i] : null;
}

const isLinkExterno = function (link) {
	if (link == null || link === undefined) {
		return false;
	}

	return (link.indexOf('http') !== -1);
}

const getMenu = function (el) {
	const listaMenu = {
		'menu-lista-contato': 'contato',
		'menu-lista-download': 'download',
		'menu-lista-index': 'inicio',
		'menu-menu-home': 'home'
		
	};

	for(menuClass in listaMenu) {
		if(el.classList.contains(menuClass)) {
			return listaMenu[menuClass];
		}
	}

	return false;
}

const actMenuClassEvent = {
	contato: () => {
		sendEventGA('menu', 'entre_em_contato', 'link_externo');
	},
	download: () => {
		sendEventGA('menu', 'download_pdf', 'download_pdf');
	},
	inicio: () => {
		sendEventGA('menu', 'menu', 'inicio');
	},
	home: () => {
		sendEventGA('menu', 'menu', 'home');
	}
}

const clickLinkMenu = function (ev) {
	const el = ev.target.closest('a');

	const menuClassEventName = getMenu(el);

	if (menuClassEventName) {
		actMenuClassEvent[menuClassEventName]();
		return;
	}

	const link = el.getAttribute('href');
	const param = paramLink(link);
	let eventCategory = 'menu';
	let eventAction;
	let eventLabel;
	
	if (param !== null) {
		eventAction = 'submenu';
		eventLabel = `${link} | ${el.innerHTML}`;
	} else if(isLinkExterno(link)) {
		eventAction = link;
		eventLabel = 'link_externo';
	} else {
		eventAction = 'menu';
		eventLabel = `${link} | ${el.innerHTML}`;
	}

	sendEventGA(eventCategory, eventAction, eventLabel);
}

window.addEventListener('load', function () {
	ga('send', 'pageview', location.pathname);

	const linksMenu = __('nav.menu a');

	linksMenu.forEach(function (el) {
		el.addEventListener('click', clickLinkMenu);
	});

window.addEventListener('', function() {
	ga('send', 'pageview', location.pathname);

	let eventCategory = 'análise';
	let eventAction = 'ver_mais';
	let eventLabel = 'Lorem';

});

window.addEventListener('', function() {
	ga('send', 'pageview', location.pathname);

	let eventCategory = 'análise';
	let eventAction = 'ver_mais';
	let eventLabel = 'Ipsum';

});

window.addEventListener('', function() {
	ga('send', 'pageview', location.pathname);

	let eventCategory = 'análise';
	let eventAction = 'ver_mais';
	let eventLabel = 'Dolor';

});


window.addEventListener('', function() {
	ga('send', 'pageview', location.pathname);

	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var telefone = document.getElementById('telefone');

	function abrirPopup() {
		abrirWindow = window.open(eventCategory = 'contato', eventAction = 'enviado', eventLabel = 'enviado')
	} 

})

});