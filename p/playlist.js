//<![CDATA[
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [

    {
        title:'Буревій',
        mp3:'../m/1.mp3',
        oga:'../m/1.ogg',
    },

    {
        title:'Ніч Гаспида',
        mp3:'../m/2.mp3',
        oga:'../m/2.ogg',
    },

    {
        title:'Рідна Земля',
        mp3:'../m/3.mp3',
        oga:'../m/3.ogg',
    },

    {
        title:'Куди Я Іду',
        mp3:'../m/4.mp3',
        oga:'../m/4.ogg',
    },

    {
        title:'На Палю',
        mp3:'../m/5.mp3',
        oga:'../m/5.ogg',
    },

    {
        title:'Коли Я Оживу',
        mp3:'../m/6.mp3',
        oga:'../m/6.ogg',
    },

    {
        title:'Затоплена Січ',
        mp3:'../m/7.mp3',
        oga:'../m/7.ogg',
    },

    {
        title:'Що Лишив Ти За Собою...',
        mp3:'../m/8.mp3',
        oga:'../m/8.ogg',
    },

    {
        title:'У Погоні Варягів (Amon Amarth cover)',
        mp3:'../m/9.mp3',
        oga:'../m/9.ogg',
    },

    {
        title:'Цареград',
        mp3:'../m/10.mp3',
        oga:'../m/10.ogg',
    }

	], {
		swfPath: "../s/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});
//]]>