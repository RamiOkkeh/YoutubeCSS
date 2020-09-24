// resources
window.resources = {}
resources.thumbs = ['http:/i3.ytimg.com/vi/6JQpwY_f2QM/maxresdefault.jpg', 'http://i3.ytimg.com/vi/h-h9cpm1vD8/maxresdefault.jpg', 'http://i3.ytimg.com/vi/ak6Ttcj5vwU/maxresdefault.jpg', 'http://i3.ytimg.com/vi/Mxbf56FnLJQ/maxresdefault.jpg', 'http://i3.ytimg.com/vi/Gso2WrBcV2Q/maxresdefault.jpg', 'http://i3.ytimg.com/vi/aiyNH2EJjxw/maxresdefault.jpg', 'http://i3.ytimg.com/vi/MeXjT9xfbdw/maxresdefault.jpg', 'http://i3.ytimg.com/vi/IuyxcKsFWhI/maxresdefault.jpg', 'http://i3.ytimg.com/vi/M1ubOWbPfts/maxresdefault.jpg', 'http://i3.ytimg.com/vi/UOxkGD8qRB4/maxresdefault.jpg', 'http://i3.ytimg.com/vi/6LbWN3FVfqI/maxresdefault.jpg', 'http://i3.ytimg.com/vi/mXhUi9kqli0/hqdefault.jpg', 'http://i3.ytimg.com/vi/8XkcbdSRdO0/hqdefault.jpg', 'http://i3.ytimg.com/vi/_q9MpiacZs4/hqdefault.jpg', 'http://i3.ytimg.com/vi/B01HWsilRqs/maxresdefault.jpg', 'http://i3.ytimg.com/vi/7g1pmHSWHe0/maxresdefault.jpg', 'http://i3.ytimg.com/vi/3N5lgUgAQ-g/maxresdefault.jpg', 'http://i3.ytimg.com/vi/K3X2Fv-c3Fc/maxresdefault.jpg', 'http://i3.ytimg.com/vi/_p9jlbi91sk/maxresdefault.jpg', 'https://vignette.wikia.nocookie.net/jontronshow/images/7/77/FlexTapeThumbnail.jpeg/revision/latest?cb=20190303064730']
resources.titles = ['exploring the japanese kit kat forest', 'Bear Plays Spelunky 2 (Ep. 3)', 'Please Don\'t Do This Naked! You\'ll regret it... Ellen DeGeneres\' Scandal Apology Mocked & More News', 'BIG BRAIN BAMBOOZLING! (Amongst Us w/ Derp Crew)', 'Binging with Babish Triple Gooberberry Sunrise', 'The Biggest Lie of Me EXPOSED', 'US surpasses 200,000 coronavirus deaths', 'Re:Zero IN 8 MINUTES', 'KDA Pop/Stars - League Of Legends', 'TWICE "FANCY" M/V', 'Pouring Fire On a Burger', 'The Best Of The Internet (2019)', 'A Squirrel Frozen in Time', 'Upsilon Dies Backwords', 'and then we\'ll be ok', 'Bear and Goose at the End of Everything', 'The Moon is a Door to Forever', 'Waterproofing My Life With FLEX TAPE - JonTron']
resources.channels = ['Philip DeFranco', 'BearTaffy', 'Pewdiepie', 'internet historian', 'ChilledChaos', 'Binging With Babish', 'CNN', 'Jazza', 'RogersBase', 'JoyBoy', 'Daily Dose Of Internet', 'Disguised Toast', 'Markiplier', 'Jacksepticeye', 'exurb1a', 'JonTron', 'Gigguk', 'TWICE']
resources.usernames = ['bibesy','dray','draggle','limmer','fustilarian','betroth','vomitorium','bedward','scobberlotcher','illecebrous','triptaker','monger','snollygoster','elflock','snottor','crapulous','pannikin','rawgabbit','ditty','brabble','piddock','forsooth','freck','mizzen','uhtceare','mumblecrust','quagswag','shriveled','stalwart','widdendream','wandought']
// stolen from twittle :P
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];
// generating 10 random video recommendations
// =====================================================
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

// generating random comments
//================================================
generateUsersComments(20)

function generateUsersComments(num) {
	var comm = generateRandomComment()
	var comment = $('<div class="comment"><img class="users-img" src="https://www.thispersondoesnotexist.com/image?'+ new Date().getTime() +'" alt=""><div id="'+num+'" class="users-com-info"></div></div>')
	$('.comments-section').append(comment)
	var username = $('<div class="username"><p class="users-name">'+comm.user+'</p><p class="users-com-date">'+comm.date+'</p></div>')
	var usersCom = $('<p class="users-com">'+comm.comment+'</p>')
	var usersReaction = $('<div class="users-reaction"><input class="users-like" type="button" name=""><p class="users-like-num">'+randomNum(0, 300)+'</p><input class="users-dislike" type="button" name=""><input class="users-reply" type="button" name="" value="REPLY"></div>')
	$('#'+num).append(username, usersCom, usersReaction)

	--num
	if (num === 0) {
		return 0
	}
	setTimeout(function(){generateUsersComments(num)}, 1200)
}

// adding functionality to show more button
// ===============================================

$(document).ready(function(){
	var $showMore = $('.show-more')
	var $showLess = $('.show-less')
	$showMore.on('click', more)
	$showLess.on('click', less)
	$showLess.hide()

	function more() {
		$('.desc').css({maxHeight : "10000px"})
		$showMore.hide()
		$showLess.show()
	}
	function less() {
		$('.desc').css({maxHeight : "63px"})
		$showMore.show()
		$showLess.hide()
	}
})

// adding functionality to comment button
// ===============================================

$('.com-post').on('click', comment)
var commId = 1000
function comment() {
	var comm = $('.user-com').val()
	if (comm === '') {
		return 0
	}
	var comment = $('<div class="comment"><img class="users-img" src="https://i.pinimg.com/originals/51/b9/b0/51b9b0a274a993750f3b6a9ad7a8d4ce.jpg" alt=""><div id="'+(++commId)+'" class="users-com-info"></div></div>')
	$('.write').after(comment)
	var username = $('<div class="username"><p class="users-name">visitor</p><p class="users-com-date"> 1 second ago</p></div>')
	var usersCom = $('<p class="users-com">'+comm+'</p>')
	var usersReaction = $('<div class="users-reaction"><input class="users-like" type="button" name=""><p class="users-like-num">0</p><input class="users-dislike" type="button" name=""><input class="users-reply" type="button" name="" value="REPLY"></div>')
	$('#'+commId).append(username, usersCom, usersReaction)
}

$('.com-cancel').on('click', cancel)
function cancel() {
	$('.user-com').val('')
}

// helper functions
// ===============================================

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function popRandom(arr) {
	return arr.splice( randomNum(0, arr.length - 1 ), 1)
}

function randomElem(arr) {
	var rng = randomNum(0, arr.length - 1)
	return arr[rng]
}

function randomStr() {
	return [randomElem(opening), randomElem(verbs), randomElem(objects), randomElem(nouns), randomElem(tags)].join(' ')
}

function generateRandomComment() {
	var comm = {}
	comm.user = randomElem(resources.usernames)
	comm.date = ' ' + randomNum(1, 6) + " days ago"
	comm.comment = randomStr()
	return comm
}