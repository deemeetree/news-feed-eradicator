var quoteList = [ 
	{
		quote: "If we don't discipline ourselves, the world will do it for us on its own terms.",
		source: "William Feather, remixed"
	},
	{
		quote: "Every particle is exploding and emploding at every moment of time.",
		source: "benevolent benefactor"
	},
	{
		quote: "The most plausible mechanism for large-scale integration is the formation of dynamic links mediated by synchrony over multiple frequency bands.",
		source: "<a href='http://www.nature.com/nrn/journal/v2/n4/abs/nrn0401_229a.html' target='_blank'>Varela et al 2001</a>"
	},
	{
		quote: "Time flows, things change. Their natural tendency to disappear is appreciated. Patterns emerge.",
		source: "<a href='http://polysingularity.com/archive/' target='_blank'>Polysingularity</a>"
	},
	{
		quote: "Protect. Control. Survive. Wash obsessively. Stop taking drugs. Eat vegan. Use condoms. Be efficient. Be tolerant. Be polite. Be interesting. Be somebody else.",
		source: "<a href='http://polysingularity.com/recommendations/' target='_blank'>Polysingularity</a>"
	},
	{
		quote: "It is easy to inspect an object, to determine which properties it has, by attempting to retrieve the properties and examining the values obtained. ",
		source: "<a href='http://7chan.org/pr/src/OReilly_JavaScript_The_Good_Parts_May_2008.pdf' target='_blank'>JavaScript, The Good Parts</a>"
	},
	{
		quote: "The best way to make your dreams come true is to wake up and dream lucid.",
		source: "Paul Valery, remastered"
	},
    {
        quote: "True freedom is impossible without a mind made free by discipline.",
        source: "Mortimer J. Adler, original"
    },
    {
        quote: "The most powerful control we can ever attain, is to be in control of ourselves while releasing it at the same time occasionally.",
        source: "Chris Page, remastered"
    },
    {
        quote: "People commit a forecasting error by expecting to feel better after Facebook use.",
        source: "<a href='http://www.sciencedirect.com/science/article/pii/S0747563214001241' target='_blank'>Sagioglou & Greitemeier, 2014</a>"
    },
    {
        quote: "Facebook activity, but not internet browsing negatively correlates with mood.",
        source: "<a href='http://www.sciencedirect.com/science/article/pii/S0747563214001241' target='_blank'>Sagioglou & Greitemeier, 2014</a>"
    },
    {
        quote: "A feeling of having wasted time accounts for the effect of Facebook activity on mood.",
        source: "<a href='http://www.sciencedirect.com/science/article/pii/S0747563214001241' target='_blank'>Sagioglou & Greitemeier, 2014</a>"
    },
    {
        quote: "Using chance or intuition one may reach a point on the plane which also belongs to another plane, a totally different class of solutions. The creative leap is the ability to recognize this transition point and to jump from one class of solutions to another.",
        source: "<a href='http://bit.ly/1oXyn9F' target='_blank'>Noy et al, 2012</a>"
    },
    {
        quote: "If your mind is wandering, take a look in the window.",
        source: "reload page for another advice"
    },
    {
        quote: "Check the profile of somebody you haven't seen in a year.",
        source: "reload page for another advice"
    },
    {
        quote: "Check out what people post in the groups that Newsfeed never shows you.",
        source: "reload page for another advice"
    },
    {
        quote: "Who do you never see in this newsfeed? Check their profile!",
        source: "reload page for another advice"
    },
    {
        quote: "What about that message that you never replied to? Maybe now is the time to do it?",
        source: "reload page for another advice"
    },
    {
        quote: "Make introduction between the two people who are different but may have something in common.",
        source: "reload page for another advice"
    },
    {
        quote: "Uhm... maybe 5 minutes of exercises instead?",
        source: "reload page for another advice"
    },
    {
        quote: "Don't forget to blink and to shift the focus – it's good for your eyes (and brain).",
        source: "reload page for another advice"
    },
    {
        quote: "Maybe call a friend you haven't seen for a while instead?",
        source: "reload page for another advice"
    },
    {
        quote: "Visit a website you really like and you haven't visited for a while.",
        source: "reload page for another advice"
    },
    {
        quote: "Walk away for 30 seconds and come back to the screen. Maybe you'll want to do something else.",
        source: "reload page for another advice"
    },
    {
        quote: "Maybe 3 minutes of meditation instead?",
        source: "reload page for another advice"
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


