var quoteList = [ 
	{
		quote: "Do not let the Ghetto pull you back. But do let it give you strength and power to escape into Cosmos. Sometimes we need the opposing force to be stronger.",
		source: "a ghetto wisdom"
	},
	{
		quote: "It's good to be in the center of things when you know what you have to offer. It's also good to be in the center of things to know what you can offer. But then what you offer will be very much related to what the center demands...",
		source: "a friendly advice"
	},
	{
		quote: "If we don't discipline ourselves, the world will do it for us on its own terms.",
		source: "William Feather, remixed"
	},
	{
		quote: "Rule your mind or it will rule you. Let your mind rule you or you will have to rule it yourself. Rule out any necessity to rule and start steering instead.",
		source: "Horace, chopped & screwed"
	},
	{
		quote: "All that we are is the result of what we have thought. What we have thought, however, is the result of what we are. Nonequilibrium stability of one's own existence is based on this feedback loop.",
		source: "Buddha, remixed"
	},
	{
		quote: "Every particle is exploding and emploding at every moment of time.",
		source: "benevolent benefactor"
	},
	{
		quote: "The most plausible mechanism for large-scale integration is the formation of dynamic links mediated by synchrony over multiple frequency bands.",
		source: "Francisco Varela"
	},
	{
		quote: "Time flows, things change. Their natural tendency to disappear is appreciated. Patterns emerge.",
		source: "an archiving enthusiast"
	},
	{
		quote: "Summer follows the spring. Smoking kills. Objects in mirrors may appear smaller. Trespassers will be persecuted. Cause always follows the effect.",
		source: "an obscure authority"
	},
	{
		quote: "Protect. Control. Survive. Wash obsessively. Stop taking drugs. Eat vegan. Use condoms. Be efficient. Be tolerant. Be polite. Be interesting. Be somebody else.",
		source: "an inner voice from the outside"
	},
	{
		quote: "I can try to accept failure, everyone fails at something. But I can't try to accept not trying.",
		source: "Michael Jordan, remastered"
	},
	{
		quote: "There’s a myth that time is money. In fact, time is more precious than money. Once you’ve spent it, it’s gone forever. However, time has the capacity to stretch, warp, and form circular patterns. Therefore just like one can change one's perception of time, one can also change one's perception of money.",
		source: "Neil A. Fiore, screwed"
	},
	{
		quote: "It is easy to inspect an object, to determine which properties it has, by attempting to retrieve the properties and examining the values obtained. ",
		source: "a book on JavaScript"
	},
	{
		quote: "There is only one success--to be able to spend your life in your own way.",
		source: "Christopher Morley"
	},
	{
		quote: "Success is the good fortune that comes from aspiration, desperation, transformation, dedication, perspiration, inspiration, information, revelation, creation, abstraction, penetration, commitment, and will.",
		source: "Evan Esar, modified"
	},
	{
		quote: "We are still masters of our fate. We are still captains of our souls.",
		source: "Winston Churchill"
	},
	{
		quote: "The best way to make your dreams come true is to wake up and dream lucid.",
		source: "Paul Valery, remastered"
	},
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        source: "Vince Lombardi Jr."
    },
    {
        quote: "True freedom is impossible without a mind made free by discipline.",
        source: "Mortimer J. Adler"
    },
    {
        quote: "The most powerful control we can ever attain, is to be in control of ourselves while releasing it at the same time occasionally.",
        source: "Chris Page, remastered"
    }
];


var selectedQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

var quoteDiv, quoteText, quoteSource, fbLink, infoPanel;

quoteDiv = $("<div class='nfe-quote'/>");

// Info panel, hidden by default
infoPanel = $("<div class='nfe-info-panel'></div>")
    .hide()
    .appendTo(quoteDiv);

quoteText = $("<p>“"+selectedQuote.quote+"”</p>")
    .addClass('nfe-quote-text')
    .appendTo(quoteDiv);

quoteSource = $("<p>~ "+selectedQuote.source+"</p>")
    .addClass('nfe-quote-source')
    .appendTo(quoteDiv);

fbLink = $("<a href='javascript:;'>News Feed Eradicator</a>")
    .addClass('nfe-info-link')
    .on('click', function(){
        infoPanel.load(chrome.extension.getURL("info-panel.html"));
        infoPanel.show();
    })
	.appendTo(quoteDiv);

// This delay ensures that the elements have been created by Facebook's
// scripts before we attempt to replace them
setInterval(function(){
    // Replace the news feed
	$("div#pagelet_home_stream").replaceWith(quoteDiv);
	$("div[id^='topnews_main_stream']").replaceWith(quoteDiv);

    // Delete the ticker
    $("div#pagelet_ticker").remove();
    
    // Delete the trending box
    $("div#pagelet_trending_tags_and_topics").remove();
}, 1000);


