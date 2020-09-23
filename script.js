// resources
window.resources = {}
resources.thumbs = ['http:/i3.ytimg.com/vi/6JQpwY_f2QM/maxresdefault.jpg', 'http://i3.ytimg.com/vi/h-h9cpm1vD8/maxresdefault.jpg', 'http://i3.ytimg.com/vi/ak6Ttcj5vwU/maxresdefault.jpg', 'http://i3.ytimg.com/vi/Mxbf56FnLJQ/maxresdefault.jpg', 'http://i3.ytimg.com/vi/Gso2WrBcV2Q/maxresdefault.jpg', 'http://i3.ytimg.com/vi/aiyNH2EJjxw/maxresdefault.jpg', 'http://i3.ytimg.com/vi/MeXjT9xfbdw/maxresdefault.jpg', 'http://i3.ytimg.com/vi/IuyxcKsFWhI/maxresdefault.jpg', 'http://i3.ytimg.com/vi/M1ubOWbPfts/maxresdefault.jpg', 'http://i3.ytimg.com/vi/UOxkGD8qRB4/maxresdefault.jpg', 'http://i3.ytimg.com/vi/6LbWN3FVfqI/maxresdefault.jpg', 'http://i3.ytimg.com/vi/mXhUi9kqli0/hqdefault.jpg', 'http://i3.ytimg.com/vi/8XkcbdSRdO0/hqdefault.jpg', 'http://i3.ytimg.com/vi/_q9MpiacZs4/hqdefault.jpg', 'http://i3.ytimg.com/vi/B01HWsilRqs/maxresdefault.jpg', 'http://i3.ytimg.com/vi/7g1pmHSWHe0/maxresdefault.jpg', 'http://i3.ytimg.com/vi/3N5lgUgAQ-g/maxresdefault.jpg', 'http://i3.ytimg.com/vi/K3X2Fv-c3Fc/maxresdefault.jpg', 'http://i3.ytimg.com/vi/_p9jlbi91sk/maxresdefault.jpg', 'https://vignette.wikia.nocookie.net/jontronshow/images/7/77/FlexTapeThumbnail.jpeg/revision/latest?cb=20190303064730']
resources.titles = ['exploring the japanese kit kat forest', 'Bear Plays Spelunky 2 (Ep. 3)', 'Please Don\'t Do This Naked! You\'ll regret it... Ellen DeGeneres\' Scandal Apology Mocked & More News', 'BIG BRAIN BAMBOOZLING! (Amongst Us w/ Derp Crew)', 'Binging with Babish Triple Gooberberry Sunrise', 'The Biggest Lie of Me EXPOSED', 'US surpasses 200,000 coronavirus deaths', 'Re:Zero IN 8 MINUTES', 'KDA Pop/Stars - League Of Legends', 'TWICE "FANCY" M/V', 'Pouring Fire On a Burger', 'The Best Of The Internet (2019)', 'A Squirrel Frozen in Time', 'Upsilon Dies Backwords', 'and then we\'ll be ok', 'Bear and Goose at the End of Everything', 'The Moon is a Door to Forever', 'Waterproofing My Life With FLEX TAPE - JonTron']
resources.channels = ['Philip DeFranco', 'BearTaffy', 'Pewdiepie', 'internet historian', 'ChilledChaos', 'Binging With Babish', 'CNN', 'Jazza', 'RogersBase', 'JoyBoy', 'Daily Dose Of Internet', 'Disguised Toast', 'Markiplier', 'Jacksepticeye', 'exurb1a', 'JonTron', 'Gigguk', 'TWICE']

generate(13)


function generate(num) {
	for (var i = 0; i < num; i++) {
		var thumb = popRandom(resources.thumbs)
		var title = popRandom(resources.titles)
		var channel = popRandom(resources.channels)
		var date = randomNum(1, 11) + ' Months ago'
		// var date = new Date().getMonth() - new Date(new Date() - (10000 * randomNum(1, 100000000))).getMonth() // maybe later 
		
		// JQuery
		var reco = $('<div id="'+i+'" class="recom"></div>')

		var thumb = '<img class="recom-img" src="'+thumb+'">'
		var title = '<p class="recom-title">'+title+'</p>'
		var channel = '<p class="recom-info">'+channel+'<br>'+date+'</p>'
		var text = '<div class="recom-text">'+title+channel+'</div>'
		$('.recommended').append(reco)

		// DOM
		document.getElementById(i).innerHTML = thumb + text

		
	}
}





// helper functions
//============================

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function popRandom(arr) {
	return arr.splice( randomNum(0, arr.length - 1 ), 1)
}
