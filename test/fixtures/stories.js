export default [{
  'by': 'alanfranzoni',
  'descendants': 14,
  'id': 18543454,
  'kids': [],
  'score': 59,
  'time': 1543334723,
  'title': 'NIST\'s answer to “Do you need a blockchain?”',
  'type': 'story',
  'url': 'https://imgur.com/a/RlUj9Ed',
  'comments': [{
    'by': 'Derek_MK',
    'id': 18543974,
    'parent': 18543454,
    'text': 'Don&#x27;t forget the first step &quot;Do you not really care about the technology and just want to write a webapp that gets mad investor money?&quot; and an arrow that goes straight to &quot;Yes&quot;',
    'time': 1543337651,
    'type': 'comment'
  }, {
    'by': 'zellyn',
    'id': 18543884,
    'kids': [],
    'parent': 18543454,
    'text': 'You can do merkle-tree-signing and other clever things with cryptography to provide auditability without needing any kind of distributed consensus via proof of work&#x2F;stake&#x2F;etc. so I think the flowchart could have a couple more &quot;No&quot; branches.',
    'time': 1543337203,
    'type': 'comment',
    'comments': [{
      'by': 'pythonaut_16',
      'id': 18543917,
      'kids': [],
      'parent': 18543884,
      'text': 'Doesn&#x27;t that somewhat depend on how you define a blockchain? Blockchain doesn&#x27;t inherently require proof of work&#x2F;stake&#x2F;etc, just a chain where each block contains a hash of the previous block(s). Proof of work&#x2F;stake just happens to be a popular implementation detail because of cryptocurrencies.',
      'time': 1543337353,
      'type': 'comment',
      'comments': [{
        'by': 'beaconstudios',
        'id': 18543960,
        'kids': [],
        'parent': 18543917,
        'text': 'what you&#x27;re describing is a Merkle tree. Blockchains are essentially Merkle trees with a distributed consensus algorithm. Take away the consensus algorithm and you&#x27;re back to Merkle trees.',
        'time': 1543337577,
        'type': 'comment',
        'comments': [{
          'by': 'zellyn',
          'id': 18544030,
          'parent': 18543960,
          'text': '<a href="https:&#x2F;&#x2F;twitter.com&#x2F;whitequark&#x2F;status&#x2F;946886702932557824" rel="nofollow">https:&#x2F;&#x2F;twitter.com&#x2F;whitequark&#x2F;status&#x2F;946886702932557824</a><p><a href="https:&#x2F;&#x2F;twitter.com&#x2F;hikari_no_yume&#x2F;status&#x2F;933791331146784768" rel="nofollow">https:&#x2F;&#x2F;twitter.com&#x2F;hikari_no_yume&#x2F;status&#x2F;933791331146784768</a><p>More seriously, some people apparently consider git a blockchain: <a href="https:&#x2F;&#x2F;medium.com&#x2F;@shemnon&#x2F;is-a-git-repository-a-blockchain-35cb1cd2c491" rel="nofollow">https:&#x2F;&#x2F;medium.com&#x2F;@shemnon&#x2F;is-a-git-repository-a-blockchain...</a>',
          'time': 1543337898,
          'type': 'comment'
        }]
      }]
    }]
  }, {
    'by': 'calibas',
    'id': 18543961,
    'kids': [],
    'parent': 18543454,
    'text': 'So if you want a &quot;tamper-proof&quot;, auditable, decentralized data store, go with block chain.',
    'time': 1543337580,
    'type': 'comment',
    'comments': [{
      'by': 'blattimwind',
      'id': 18544039,
      'parent': 18543961,
      'text': '&gt; So if you want a &quot;tamper-proof&quot;, auditable, decentralized data store, go with git.<p>Yes.',
      'time': 1543337966,
      'type': 'comment'
    }, {
      'by': 'dfox',
      'id': 18544007,
      'parent': 18543961,
      'text': 'Notice that the flow chart does not mention decentralized. The &quot;decentralization&quot; in cryptocurrencies come from whatever mining&#x2F;proof-of-something mechanism build on top and has nothing to do with blockchain itself.',
      'time': 1543337808,
      'type': 'comment'
    }]
  }, {
    'by': 'paraditedc',
    'id': 18544037,
    'parent': 18543454,
    'text': 'pdf of the document: <a href="https:&#x2F;&#x2F;nvlpubs.nist.gov&#x2F;nistpubs&#x2F;ir&#x2F;2018&#x2F;NIST.IR.8202.pdf" rel="nofollow">https:&#x2F;&#x2F;nvlpubs.nist.gov&#x2F;nistpubs&#x2F;ir&#x2F;2018&#x2F;NIST.IR.8202.pdf</a>',
    'time': 1543337959,
    'type': 'comment'
  }, {
    'by': 'berbec',
    'id': 18543874,
    'kids': [],
    'parent': 18543454,
    'text': 'Could have been simplified to &quot;no&quot;',
    'time': 1543337142,
    'type': 'comment',
    'comments': [{
      'by': 'pythonaut_16',
      'id': 18543926,
      'parent': 18543874,
      'text': 'Except this is an actually helpful diagram that points you towards other solutions depending on what benefits  you think a blockchain might give you, instead of an (unhelpful) outright dismissal.',
      'time': 1543337409,
      'type': 'comment'
    }, {
      'by': 'BenjiWiebe',
      'id': 18543907,
      'parent': 18543874,
      'text': 'That&#x27;s actually what I was expecting.',
      'time': 1543337295,
      'type': 'comment'
    }]
  }, {
    'by': 'SilasX',
    'id': 18544027,
    'parent': 18543454,
    'text': 'Is there a source document that can be linked instead?',
    'time': 1543337879,
    'type': 'comment'
  }, {
    'by': 'zitterbewegung',
    'id': 18543896,
    'parent': 18543454,
    'text': 'Seems to be very similar to this diagram from the hyperledger edX course.<p><a href="https:&#x2F;&#x2F;www.jsemeraro.com&#x2F;wp-content&#x2F;uploads&#x2F;2017&#x2F;12&#x2F;Blockchain-Decision-Path-edX.jpg" rel="nofollow">https:&#x2F;&#x2F;www.jsemeraro.com&#x2F;wp-content&#x2F;uploads&#x2F;2017&#x2F;12&#x2F;Blockch...</a>',
    'time': 1543337269,
    'type': 'comment'
  }, {
    'by': 'seibelj',
    'id': 18544033,
    'parent': 18543454,
    'text': 'I think blockchain is staring us in the face as a solution to the collapse of trust in institutions. For example, if all votes were stored on a permissioned blockchain, audits would be trivial. If we layered it on top of our existing (bad) election technologies and did a post-election comparison of accuracy, I bet it would be far more accurate.',
    'time': 1543337920,
    'type': 'comment'
  }]
}, {
  'by': 'surbas',
  'descendants': 165,
  'id': 18541536,
  'kids': [18543128, 18542630, 18542602, 18543594, 18543048, 18543560, 18542591, 18542760, 18543115, 18543082, 18542652, 18542620, 18542596, 18542702, 18542553, 18542765],
  'score': 222,
  'time': 1543319606,
  'title': 'The Insect Apocalypse Is Here',
  'type': 'story',
  'url': 'https://www.nytimes.com/2018/11/27/magazine/insect-apocalypse.html',
  'comments': [{
    'by': 'gmoes',
    'id': 18542817,
    'kids': [18543878, 18543271, 18542868, 18543261, 18543871],
    'parent': 18541536,
    'text': 'I think the American suburban yard may be equally responsible with agriculture for a lot of this in the US.  The use of herbicides and pesticides is completely unregulated.  Additionally lawns are an unnecessary waste of time for most people and have a large carbon footprint.  I had a small native plant yard that attracted hundreds of pollinators and arachnids.  I was treated like and criminal forced to cut most of it down.  I still get a fair amount of terrestrial arthropods but not as much.<p>It sickens me when I see workers with those sprayer packs or trucks that look like small chemical plants.<p>Before I decided to comment I submitted my write up, if you are interested you can read that you can read here:<p><a href="http:&#x2F;&#x2F;www.elegantcoding.com&#x2F;2018&#x2F;03&#x2F;reimagining-suburban-yard-to-reverse.html" rel="nofollow">http:&#x2F;&#x2F;www.elegantcoding.com&#x2F;2018&#x2F;03&#x2F;reimagining-suburban-ya...</a><p>Edit:  I did want to mention that I definitely seen a massive decline in butterflies and moths over the last 15 years.<p>Update:  I quoted 40 million acres below, which is for turf grass which probably includes athletic fields.  I am not against everyone having a lawn or athletic fields.  I do think people should be able to cultivate their native environment on their suburban property and this should be encouraged and even incentivized.  My neighbor’s kids play in their backyard, so they have a need for it. Of course a non herbicide non monoculture lawn should work ok too. That’s what I grew up with.<p>Also I think that gas powered devices need to be replaced with electric devices.  I think something like 17 million gallons of fuel are spilled alone in relation to lawn maintenance.<p>The thing that scares me is the normality of spraying for mosquitoes.  In my area it’s the invasive Aedes mosquito species, the native species are a lot less aggressive.  Also with some of these other very scary invasive species like the marmorated stink bug, ash borer, lantern fly, that new Asian tick, etc. Are we going to end up using more and more insecticides and subsequently kill more and more of our native fauna?',
    'time': 1543331328,
    'type': 'comment',
    'comments': [{
      'by': 'gambler',
      'id': 18543044,
      'kids': [18543502, 18543780, 18543920, 18543897, 18543360],
      'parent': 18542817,
      'text': 'Lawns are one of the most ridiculous human inventions I have ever observed. You take normal self-sufficient grass out, then reseed with some sort of crippled grass that needs constant fertilization and watering. To make things worse, you mandate it to be unnaturally short, so people have to constantly mow and use herbicides to keep the normal grass out. And all of this is made mandatory for some reason. Aside from creating grass mono-cultures, this is just a gigantic waster of time and resources that doesn&#x27;t produce <i>anything</i> in return.',
      'time': 1543332763,
      'type': 'comment',
      'comments': [{
        'by': 'pjc50',
        'id': 18543944,
        'parent': 18543044,
        'text': 'Lawns are a much more natural phenomenon in England, where the grass <i>is</i> native (apparently &quot;Kentucky Bluegrass&quot; is actually from Europe!) and they can be maintained organically. Capability Brown pre-dates the Haber process. It rains often enough that they don&#x27;t need much watering if the soil is good.<p>Unfortunately in recent years global warming has made summers longer, hotter and drier and the natural temperate &quot;lawn zone&quot; is moving northwards. England will more and more see &quot;hosepipe bans&quot; against using clean water in gardens.<p>People choosing lawns in dry, unnatural areas of America are doing so to replicate some European ideal. People <i>mandating</i> lawns are doing so to mandate the Europeanness of their neighbours.<p>(A good summary: <a href="https:&#x2F;&#x2F;blogs.scientificamerican.com&#x2F;anthropology-in-practice&#x2F;the-american-obsession-with-lawns&#x2F;" rel="nofollow">https:&#x2F;&#x2F;blogs.scientificamerican.com&#x2F;anthropology-in-practic...</a> )',
        'time': 1543337480,
        'type': 'comment'
      }, {
        'by': 'whatshisface',
        'id': 18543531,
        'kids': [18543744, 18543895],
        'parent': 18543044,
        'text': 'Lawns are useful for standing on outdoors, given that they are not up to your knees, not concrete, and not dirt. That&#x27;s why most people maintain them. If you never go outside then there is not much need for a lawn.',
        'time': 1543335105,
        'type': 'comment',
        'comments': [{
          'by': 'maxxxxx',
          'id': 18543666,
          'kids': [],
          'parent': 18543531,
          'text': 'I rarely see anybody standing on their lawn in my neighborhood. In Florida they even warned us to not let our dog on the lawn because it was so toxic.<p>I think lawns are mainly for looks.',
          'time': 1543335923,
          'type': 'comment',
          'comments': [{
            'by': 'justinator',
            'id': 18543798,
            'kids': [18543947],
            'parent': 18543666,
            'text': 'I think it was mainly a status thing, in that you could afford to have vast amounts of land that weren&#x27;t producing anything, and the workforce to maintain it. Like, it&#x27;s something a French king would do at a Chateau to complement their rose gardens.<p>It&#x27;s just crazy to think that now it can be against the law (or at least against HOA rules) to <i>not</i> have a lawn. Like it&#x27;s illegal to plant a vegetable garden in your front yard.',
            'time': 1543336743,
            'type': 'comment',
            'comments': []
          }]
        }, {
          'by': 'notacoward',
          'id': 18543652,
          'parent': 18543531,
          'text': 'You know what&#x27;s even better for standing on outdoors? The <i>actual outdoors</i>. Any park, arboretum, nature trail, beach, etc. The only people who need lawns are the ones who want to pretend they&#x27;re enjoying the outdoors but can&#x27;t actually stand to be more than fifty feet from their fridge at any time.',
          'time': 1543335831,
          'type': 'comment'
        }]
      }, {
        'by': 'c4urself',
        'id': 18543286,
        'kids': [],
        'parent': 18543044,
        'text': 'Wow just had a facepalm moment realising what you said is spot on. To make matters worse small-engined tools that pollute the environment are used weekly to keep the yard nice... what a waste',
        'time': 1543333935,
        'type': 'comment',
        'comments': [{
          'by': 'culot',
          'id': 18543412,
          'kids': [18543777, 18543946, 18543770, 18543520, 18543678, 18543781],
          'parent': 18543286,
          'text': 'You&#x27;d think electric motor yard tools could be common by now, but instead the deafening gas-powered black-cloud-spewing machines are still ubiquitous.',
          'time': 1543334554,
          'type': 'comment',
          'comments': []
        }]
      }, {
        'by': 'rikkus',
        'id': 18543499,
        'kids': [18543535],
        'parent': 18543044,
        'text': 'I don&#x27;t use a herbicide on my lawn - I didn&#x27;t realise it was normal to do so<p>What&#x27;s produced in return is a lawn that you can use - for all the purposes people use lawns. I&#x27;m not sure what&#x27;s so ridiculous about this.',
        'time': 1543334955,
        'type': 'comment',
        'comments': []
      }]
    }, {
      'by': 'justin66',
      'id': 18542893,
      'kids': [],
      'parent': 18542817,
      'text': '&gt; I think the American suburban yard may be equally responsible with agriculture for a lot of this in the US.<p>There are over 900 million acres of farmland in the United States, so I&#x27;m going to guess this assertion (the &quot;equally&quot;) is wrong.<p>It seems to me you&#x27;re otherwise right about how we put our yards together, though. You didn&#x27;t even mention how much water we often use to move our yards away from the native flora.',
      'time': 1543331802,
      'type': 'comment',
      'comments': [{
        'by': 'gmoes',
        'id': 18542990,
        'kids': [],
        'parent': 18542893,
        'text': 'Good point, compared to 40 million for lawns.  Maybe proportional to usefulness. ;)<p>And water is a huge issue too. The native plants thrive in wet and dry conditions without attention.',
        'time': 1543332481,
        'type': 'comment',
        'comments': [{
          'by': 'ansible',
          'id': 18543394,
          'kids': [],
          'parent': 18542990,
          'text': 'So there is an order of magnitude difference, but the other side of that is with farmland, pesticides are applied by professionals, trying to minimize cost.  With yards, pesticides are applied (most often) by rank amateurs, who often know nearly nothing about proper application.',
          'time': 1543334443,
          'type': 'comment',
          'comments': [{
            'by': 'cantankerous',
            'id': 18543485,
            'parent': 18543394,
            'text': 'Calling farmers professionals as it relates to the conscious application of dangerous pesticides is a serious stretch.  We&#x27;re approving new pesticides at an unreal rate.  These guys have no idea how this stuff works or its impact on the greater environment.  They need to use it because plants and insects are becoming resistant to the old stuff and farms are in the business to make money.  Externalities be damned.<p>Suburban lawn care has been going on for decades, using largely the same approach it always has.  Mainly fertilizers applied once or twice a year if you bother to care.  Broadleaf weed killers, maybe grub killer.  The primary way to getting a nice lawn, though, is to overseed so often you choke out weeds.  On the other side of the coin, agriculture is engaging in a broad spectrum application of herbacides, pesticides, etc with new formulas coming all the time.  At an insane scale.<p>There is no comparison to yards.  It&#x27;s agriculture.',
            'time': 1543334907,
            'type': 'comment'
          }]
        }, {
          'by': 'alexanderdmitri',
          'id': 18543302,
          'parent': 18542990,
          'text': 'I&#x27;m curious about that definition of lawn, does it only apply to residence property or commercial spaces, athletic pitches, &amp;c?',
          'time': 1543333989,
          'type': 'comment'
        }]
      }]
    }, {
      'by': 'CalRobert',
      'id': 18543928,
      'parent': 18542817,
      'text': 'Outside of the US, one thing I have trouble understanding is this idea that farmland is somehow natural. I talk to people who say they want to visit nature and then we go look at... sheep on grazing land. Not a damn thing natural about it. And then local councils destroy plants on the road verges because they&#x27;re &quot;untidy&quot;. Those verges were one of the last refuges for native insects and birds.<p>I think the place I live (Ireland) has been so completely denuded that people literally don&#x27;t know what nature is. It looks like that will be the whole world in short order.',
      'time': 1543337424,
      'type': 'comment'
    }, {
      'by': 'bryan11',
      'id': 18543208,
      'parent': 18542817,
      'text': 'In the midwest 20 years ago, we&#x27;d regularly see butterflies, bees, and many other insects.  After I planted butterfly bushes there more came with dozens of butterflies and bees on them each day.  Every year, though, the numbers decreased.  I don&#x27;t used any chemicals in my property.<p>A few years ago, the city started spraying everywhere for mosquitoes.  The day after spraying, people frequently find a couple dead birds in their yard.  One  neighbor&#x27;s bee hives were killed as well.<p>Lately, seeing one single butterfly a year is a rare event.',
      'time': 1543333549,
      'type': 'comment'
    }, {
      'by': 'clarkmoody',
      'id': 18542953,
      'kids': [18543086, 18543067],
      'parent': 18542817,
      'text': '&gt; The use of herbicides and pesticides is completely unregulated.<p>Every bag of the stuff says, &quot;It is a violation of federal law to use this product in a manner inconsistent with its labeling.&quot; Sounds like regulation to me. You don&#x27;t have to ask permission to put it on your lawn, but you&#x27;ve got plenty of rope to hang yourself with a warning label like that.<p>&gt;  I had a small native plant yard that attracted hundreds of pollinators and arachnids. I was treated like and criminal forced to cut most of it down.<p>This is a shame. Native yards much more beneficial than monospecies turf everywhere.',
      'time': 1543332201,
      'type': 'comment',
      'comments': []
    }]
  }, {
    'by': 'bambax',
    'id': 18543358,
    'kids': [18543561, 18543539, 18543836],
    'parent': 18541536,
    'text': 'OT, but as I grow older I find it harder and harder to read those hyper-storified newspaper &quot;stories&quot;. I don&#x27;t care about the life story of all those people and their kids and how and why they were riding a bike in the forest 30 years ago.<p>It&#x27;s supposed to be a great progress in journalism to put people first and make stories relatable, but it&#x27;s gone too far -- and it always sound the same.<p>Bugs population is in sharp decline, here are the numbers, here are what scientists think are the causes, and the possible consequences, and the possible remedies -- is what I want to read.<p>Sorry for the rant.',
    'time': 1543334285,
    'type': 'comment',
    'comments': [{
      'by': 'scandox',
      'id': 18543852,
      'parent': 18543358,
      'text': 'I have to agree. I read 4 paragraphs and I still haven&#x27;t read  anything I consider pertinent. The fact is that story-telling is powerful...but done wrong it&#x27;s very boring. Nothing is worse than &quot;back story&quot; on people we don&#x27;t yet care about it and that&#x27;s how modern journalists seem to think this works.<p>Give the facts up front. Lay out the situation. Root the people and the individuals in an important context. Then - maybe - we&#x27;ll be interested in their lives.',
      'time': 1543337021,
      'type': 'comment'
    }, {
      'by': 'jniedrauer',
      'id': 18543503,
      'parent': 18543358,
      'text': '&gt; I don&#x27;t care about the life story of all those people and their kids and how and why they were riding a bike in the forest 30 years ago.<p>I couldn&#x27;t agree more. I find wikipedia to be the most terse and to the point way of consuming information (that is still accessible for me as a non-scientist). It&#x27;s not always as current as I&#x27;d like but it&#x27;s better than this. It would be nice if journalism could go back to being journalism.',
      'time': 1543334976,
      'type': 'comment'
    }, {
      'by': 'rsync',
      'id': 18543578,
      'parent': 18543358,
      'text': '&quot;I don&#x27;t care about the life story of all those people and their kids and how and why they were riding a bike in the forest 30 years ago.&quot;<p>Actually, the New York Times is particularly bad about this - not only about gratuitous background but also about gratuitous attribution ... very common to see an inch of column preceded by over an inch of attribution of a quote or whatever.<p>I also find it very distracting and difficult to read.<p>If you&#x27;re interested, the Financial Times is the opposite - very concise, very pointed and even restricts front page stories to <i>only</i> their front page space.  You can read more deeper in the issue, but the front page item is a self contained story with no page jumps.',
      'time': 1543335395,
      'type': 'comment'
    }, {
      'by': 'mrspeaker',
      'id': 18543519,
      'parent': 18543358,
      'text': 'I think it&#x27;s just a trend - like putting &quot;macro memes&quot; in a tech blog post. The first time you saw it, it was extremely effective. So it got copied and copied until it was the &quot;standard&quot; format.<p>But every time it&#x27;s used it loses some of that effectiveness. In articles I just skim read until the &quot;story&quot; parts are done with - in tech posts, I just close the tab if it has hilarious gifs and memes.<p>Eventually the trend gets so watered down that someone decides to shake things up with a wacky new style that everyone finds so refreshing.<p>The circle of life!',
      'time': 1543335040,
      'type': 'comment'
    }]
  }, {
    'by': 'williamstein',
    'id': 18542800,
    'kids': [],
    'parent': 18541536,
    'text': 'I remember being a kid in the Pacific Northwest in the 1970s. Whenever we went to a pond or lake in the woods, there would be little frogs and salamanders everywhere in the water.  Now there aren&#x27;t and I find this mass extinction right before my eyes really, really disturbing.  <a href="https:&#x2F;&#x2F;blogs.scientificamerican.com&#x2F;extinction-countdown&#x2F;amphibians-declining-alarming&#x2F;" rel="nofollow">https:&#x2F;&#x2F;blogs.scientificamerican.com&#x2F;extinction-countdown&#x2F;am...</a>',
    'time': 1543331223,
    'type': 'comment',
    'comments': [{
      'by': 'acdanger',
      'id': 18544009,
      'parent': 18542800,
      'text': 'I grew up on a small family farm in Virginia that was named after the frogs that resided in and around the small spring at the base of a hill. At the peak of summer, the ground would &quot;hop to life&quot; as frogs jumped at your way as you walked around. Now, you could go the entire summer without seeing a single one. It troubles me deeply every time I visit in the warm months.',
      'time': 1543337818,
      'type': 'comment'
    }, {
      'by': 'novaleaf',
      'id': 18543069,
      'kids': [18543188],
      'parent': 18542800,
      'text': 'Going to a Pacific Northwest beach today vs 30-40 years ago, You may also notice a lack of seagulls on beaches.     I remember Kalaloch on the Olympic Peninsula used to have thousands of the vermin.  Go there now, and you are lucky to see 10 in an entire day.',
      'time': 1543332861,
      'type': 'comment',
      'comments': [{
        'by': 'tjr225',
        'id': 18543504,
        'parent': 18543069,
        'text': 'While I find all of this stuff totally disturbing - claiming that you&#x27;d be lucky to see 10 seagulls at Kalaloch Beach is insane.<p>I used to live in Olympia and would visit Kalaloch&#x2F;Ruby Beach on a monthly basis - even camped there a couple weekends ago. There are seagulls(and Bald Eagles, and even Pelicans) all around there to this day. I even have photographic evidence(shot on a medium format toy camera right in front of Kalaloch Lodge earlier this year): <a href="https:&#x2F;&#x2F;i.imgur.com&#x2F;hMwDuXs.jpg" rel="nofollow">https:&#x2F;&#x2F;i.imgur.com&#x2F;hMwDuXs.jpg</a><p>I&#x27;m not sure what these birds&#x27; patterns are wrt to collecting food but a cursory dig in my photos shows that I&#x27;ve captured pictures of anywhere from a handful to hundreds of birds on this strip of coast on different occasions over the course of the last year and a half or so.',
        'time': 1543334986,
        'type': 'comment'
      }]
    }, {
      'by': 'flagstaffaz',
      'id': 18543352,
      'parent': 18542800,
      'text': 'Thanks for the link, I hadn&#x27;t thought about my similar experience and that&#x27;s terrifying to see in a lifetime.',
      'time': 1543334271,
      'type': 'comment'
    }]
  }, {
    'by': 'hyperion2010',
    'id': 18543704,
    'parent': 18541536,
    'text': 'I wonder whether there might not also be additional factors that we have not considered. For example, insect viruses. We know that when human populations mixed between continents upwards of 95% of one population vanished due to disease. Very few people study insect diseases (and are usually just happy that a &#x27;pest&#x27; has been killed), and there are so many species it would be a nearly impossible task to study them all. Globalization is now mixing members of all species and their diseases with them. It would not surprise me if part of this drastic decline was also due to massively virulent diseases sweeping through completely unprepared populations just as European diseases did to the indigenous populations of the Americas.',
    'time': 1543336133,
    'type': 'comment'
  }, {
    'by': 'verytrivial',
    'id': 18542593,
    'parent': 18541536,
    'text': 'Plausibly one of the Horsemen of the <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Holocene_extinction" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Holocene_extinction</a> .<p>Edit: Actually, I regret being flippant with this.  I find this development gravely troubling.',
    'time': 1543329623,
    'type': 'comment'
  }]
}, {
  'by': 'ljf',
  'descendants': 15,
  'id': 18542657,
  'kids': [],
  'score': 49,
  'time': 1543330166,
  'title': 'Inside Sellafield\'s death zone with the nuclear clean-up robots',
  'type': 'story',
  'url': 'https://www.bbc.co.uk/news/business-46301596',
  'comments': [{
    'by': 'imglorp',
    'id': 18543484,
    'kids': [],
    'parent': 18542657,
    'text': '&gt; The environment group Greenpeace, which bitterly opposed the opening of Thorp, is enthusiastic about decommissioning.<p>I feel like the Greenpeace position is anachronistic and still on the wrong side of common sense. They might have missed an opportunity to slow climate change. We&#x27;ve had nuclear generation for 64 years now and harm to the environment is minimal. Three major (to us) accidents and a bunch of lesser material releases have had minimal impact to the earth in the big scheme of things.<p>Of far greater harm is our extraction and burning of fossil.  The California methane leak, all of the various oil spills, and now shale drilling all have substantial, long term harm we can measure in the climate and the local ecologies.<p>Obviously we&#x27;d prefer greener power if possible, but nuclear power appears by far the lesser evil than all the fossil activity.',
    'time': 1543334902,
    'type': 'comment',
    'comments': [{
      'by': 'Diederich',
      'id': 18543689,
      'parent': 18543484,
      'text': '&gt; They might have missed an opportunity to slow climate change.<p>35 years ago, I was a pretty ardent and sometimes locally active environmentalist, primarily in and around the high mountains of California.  And, of course, a member of Greenpeace.<p>Once the true threat of CO2 and friends became apparent to me, I started raising hell about it at local meetings.  Pollution does not matter if global average temperature goes up many degrees F.<p>So because of their inability to have a wider, more global outlook, I parted ways with Greenpeace around 1990.<p>I don&#x27;t dislike the organization, for the most part.  But they&#x27;ve been unable to focus on the big picture threats.<p>This is understandable; it&#x27;s relatively easy to be passionate about the things Greenpeace is into.  Things you can &#x27;touch&#x27; and directly see.  Had they, as an organization, tried to switch their focus to climate change, they&#x27;d probably have lost most of their internal energy.',
      'time': 1543336076,
      'type': 'comment'
    }, {
      'by': 'lispm',
      'id': 18543733,
      'kids': [],
      'parent': 18543484,
      'text': '&gt; wrong side of common sense<p>I fear such a complex issue such as energy production for billions of people is not really something which can be rated by &#x27;common sense&#x27;.<p>&gt; nuclear generation for 64 years now<p>and still no path for insurance&#x2F;storage&#x2F;reprocessing etc. Sellafield is one of the prime examples what can go wrong even in industrialized countries: it&#x27;s a toxic and costly mix of military and commercial nuclear industry waste.<p>In the Western countries nuclear is mostly dead and investments are allocated only mostly for longer lifetimes of existing reactors. And this is not because of &#x27;Greenpeace&#x27;. You need to find an answer why there is so little acceptance, why the industry is in such bad shape (examples: lack of reactor safety culture in the Japanese nuclear industry, lack of financial health in the French nuclear industry, Sellafield, ...) and why its only thriving with full-government support&#x2F;finance (see China with its authoritarian structure or smaller countries who are keen to get nuclear technology to then also build up nuclear weapon technology&#x2F;material like Iran).',
      'time': 1543336308,
      'type': 'comment',
      'comments': [{
        'by': 'michaelt',
        'id': 18543868,
        'parent': 18543733,
        'text': '<p><pre><code>  You need to find an answer why there is so little\n  acceptance, why the industry is in such bad shape\n</code></pre>\nDo you have any sources for info about this with a firm basis in fact?<p>Reason being I&#x27;ve heard at least 4 completely different explanations of why the nuclear industry performs so poorly, and I&#x27;m not really sure how to tell which is the right one - would be nice to know more.',
        'time': 1543337111,
        'type': 'comment'
      }]
    }, {
      'by': 'rangersanger',
      'id': 18543968,
      'parent': 18543484,
      'text': 'I read the article as:<p>1) We&#x27;re decommissioning a recycling plant because no one wants to recycle rods.<p>2) We don&#x27;t know where on earth we&#x27;re going to put the waste from the decommissioning.<p>3) We don&#x27;t know how we&#x27;re going to do this quite yet, the technology doesn&#x27;t exist.<p>4) It&#x27;s going to take 100 years.<p>5) The entire endeavor was massively expensive (who&#x27;s paying for this, btw?)<p>Given that, I&#x27;m not sure I can accept that Greenpeace is or was on the wrong side of common sense. They may not have seen the entire playing field, they may not have have have proposed the best solution when they started out, but given what they knew at the time of their inception, and how they&#x27;ve grown, I think they are on the right side of common sense.<p>I don&#x27;t have a timeline of their stance on renewables, nor of coal&#x2F;oil&#x2F;gas, but they currently advocate for 100% renewables. And after reading that article, I think that&#x27;s the only common sense position.',
      'time': 1543337605,
      'type': 'comment'
    }, {
      'by': 'guitarbill',
      'id': 18543658,
      'kids': [],
      'parent': 18543484,
      'text': 'The conversation on nuclear power has never been a rational one. This has some interesting effects.<p>Because it&#x27;s so hard to get funding on anything, not that much research has been done on how to decontaminate radioactive waste. You might disagree about doing it in the first place, but still support research to clean up.<p>Because it&#x27;s so hard to get permission to build new reactors, older reactors were used for longer. But we&#x27;ve learned a lot about safety and fail-safes since the 80s. Luckily, nothing major has happened.<p>There&#x27;s a very shabby strip club directly outside Amazon&#x27;s meeting centre in Seattle for a similar reason. I&#x27;m told the owner wouldn&#x27;t mind renovating or moving, but zoning laws make those difficult. So because the policy making is driven by morality and not rationality, you end up with weird (side)effects.',
      'time': 1543335865,
      'type': 'comment',
      'comments': [{
        'by': 'lispm',
        'id': 18543999,
        'parent': 18543658,
        'text': '&gt; The conversation on nuclear power has never been a rational one<p>Like in Japan. Full support for nuclear from government and industry. Society not interested and not opposed.<p>The mechanism at play were then &#x27;greed&#x27;, &#x27;corruption&#x27; and no sufficient safety culture. And this is not surprise: the so-called Japanese &#x27;nuclear village&#x27; was well known.<p>There was nothing &#x27;rational&#x27; about NOT increasing tsunami safety at Fukushima.<p>No energy politics is rational. It&#x27;s also not possible to be rational. There are vast commercial and other interests involved.<p>&gt; Because it&#x27;s so hard to get permission to build new reactors, older reactors were used for longer<p>Because it was much easier and cost effective, older reactor lifetimes were extended. We are talking about billions of investments.<p>&gt; But we&#x27;ve learned a lot about safety and fail-safes since the 80s<p>Which then has priced nuclear out of the market - if there is a market - France for example has only a very limited electricity market - EDF is government owned. <a href="https:&#x2F;&#x2F;www.edf.fr&#x2F;en&#x2F;the-edf-group&#x2F;dedicated-sections&#x2F;finance&#x2F;financial-information&#x2F;the-edf-share&#x2F;shareholding-structure" rel="nofollow">https:&#x2F;&#x2F;www.edf.fr&#x2F;en&#x2F;the-edf-group&#x2F;dedicated-sections&#x2F;finan...</a> Areva&#x2F;Orena is government owned: <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Orano" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Orano</a>',
        'time': 1543337784,
        'type': 'comment'
      }, {
        'by': 'sailfast',
        'id': 18543914,
        'parent': 18543658,
        'text': 'Are you sure it&#x27;s not there because it is finding high net worth clients across the street?<p>As for nuclear power and research on cleanup - it appears this industry will be worth a lot of money post Fukushima which does appear to be spurring the requisite R&amp;D, which should be good news for this kind of tech. Granted, probably not what is required to really make this decontamination jump to the level that it becomes &quot;easy&quot; but at least it is something better than &quot;Oh sure eventually we&#x27;ll put them on a train and stick them in the ground, you know, as long as the earth doesn&#x27;t destroy those plans first with an earthquake, hurricane, etc&quot;',
        'time': 1543337338,
        'type': 'comment'
      }]
    }, {
      'by': 'UweSchmidt',
      'id': 18543603,
      'parent': 18543484,
      'text': 'Just because the adoption of greener power is coming along only now, a few decades late, doesn&#x27;t mean that it is an either-or between nuclear and fossil.<p>I assume Greenpeace and other environmentalists would have prefered a much faster transition.',
      'time': 1543335529,
      'type': 'comment'
    }]
  }, {
    'by': 'Tehchops',
    'id': 18542982,
    'kids': [],
    'parent': 18542657,
    'text': 'Does the intense radiation not interfere with communications to the drones&#x2F;robots?',
    'time': 1543332407,
    'type': 'comment',
    'comments': [{
      'by': 'teraflop',
      'id': 18543298,
      'kids': [],
      'parent': 18542982,
      'text': 'Radiation can affect the electronics themselves (by corrupting data, or by slow physical degradation of the physical hardware) but other than that, I don&#x27;t think it has any particularly noticeable effect on communications.<p>The &quot;radiation&quot; from a reactor core mostly consists of highly energetic particles and gamma rays. It&#x27;s not going to directly interfere with anything in the radio spectrum, or induce significant voltages on cables.',
      'time': 1543333969,
      'type': 'comment',
      'comments': [{
        'by': 'csense',
        'id': 18543698,
        'parent': 18543298,
        'text': 'I&#x27;d think it&#x27;s much less of a concern than in space.  For one, space robots are far enough away that there&#x27;s a big time delay to Earth communications, these robots will have control stations &lt;1km away.  So the only electronics on board the actual robot should be fairly rugged motor drivers and wireless comms.  Add in an extra redundant copy or two of all the IC&#x27;s (and possibly enough motors to give redundant degrees of freedom), and a policy of pulling out and rebuilding the robot when a certain number of non-function-impairing radiation damage events occur, and it&#x27;s a non-issue.<p>Radiation causes huge headaches in space because there&#x27;s no way to pull it out or send in a replacement, and comms have seconds - minutes of lag.  These don&#x27;t apply to Earth based robots, even in super hazardous environments like this.',
        'time': 1543336108,
        'type': 'comment'
      }, {
        'by': 'ljf',
        'id': 18543405,
        'parent': 18543298,
        'text': 'I&#x27;m assuming that these are &#x27;built to last&#x27; - as once they are no longer working I can only think that they themselves would become radioactive waste that will need disposing of.<p>Is it unlikely that a human would be able to work on the robots to repair them due to the levels of radiation?',
        'time': 1543334505,
        'type': 'comment'
      }]
    }, {
      'by': 'liamkinne',
      'id': 18543036,
      'kids': [],
      'parent': 18542982,
      'text': 'Different wavelengths is the short answer. But yes, there would be enough interference to cause damage after a while.<p>Note that these robots probably aren&#x27;t usiu the latest 14nm process so they have a natural immunity to bit flips.',
      'time': 1543332725,
      'type': 'comment',
      'comments': [{
        'by': 'TylerE',
        'id': 18543984,
        'parent': 18543036,
        'text': 'They also likely have redundent systems - e.g. everything in triplicate and requires a &#x27;majority vote&#x27; to take any action.',
        'time': 1543337687,
        'type': 'comment'
      }]
    }, {
      'by': 'pjc50',
      'id': 18543171,
      'parent': 18542982,
      'text': 'Yes, it would have been nice to have more information on that since this is a serious problem. Shielding helps up to a point, but you need a lot of shielding to keep out gamma radiation and hot neutrons.',
      'time': 1543333377,
      'type': 'comment'
    }]
  }]
}, {
  'by': 'daveowei',
  'descendants': 212,
  'id': 18542830,
  'kids': [18543160, 18543055, 18543948, 18543562, 18543220, 18543207, 18543422, 18543800, 18543250, 18543178, 18543669, 18543243, 18543180, 18543856, 18543876, 18543219, 18543612, 18543854, 18543492, 18543121, 18543192, 18543369, 18543209, 18543354, 18543728, 18543528, 18543397, 18543534, 18543724, 18543630, 18543514, 18543201, 18543296, 18543266, 18543395, 18543564, 18543312, 18543342, 18543274, 18543387, 18543638, 18543184, 18543225, 18543615, 18543877, 18543364, 18543540, 18543696, 18543740, 18543340, 18543415],
  'score': 422,
  'time': 1543331470,
  'title': 'We are Google employees. Google must drop Dragonfly',
  'type': 'story',
  'url': 'https://medium.com/@googlersagainstdragonfly/we-are-google-employees-google-must-drop-dragonfly-4c8a30c5e5eb',
  'comments': [{
    'by': 'nimbius',
    'id': 18543229,
    'kids': [18543339, 18543686, 18543548],
    'parent': 18542830,
    'text': 'Pretty bold.  A lot of people are saying this wont work, but speaking from my own experience, you&#x27;d be surprised what companies are amicable to when it comes to business.<p>Im an engine mechanic by trade, and our shops handle bids for cash strapped local governments that outsource their motor pool maintenance.  We do things like fire trucks and police cars, but we were working on a new regional idea as a &quot;service center&quot; for municipalities that purchased MRAP combat vehicles for their police departments.  <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;MRAP" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;MRAP</a><p>We all, especially the veterans I work with, hated this idea.  MRAP&#x27;s are for combat, not police work, and have a dangerous propensity to roll over in city streets or escalate already violent situations.  14 of us sent a signed letter to the owner and senior management detailing our major concerns and heard nothing back for about a month.  Then out of the blue we got a call for a meeting with 3-4 very senior managers at a local irish bar.<p>They paid for dinner and tried to explain how the business would be extremely lucrative.  we would all see major bonuses, we could hire more workers, and grow the business faster than just large truck repair.  It took 3 very emotional hours, but we eventually talked down a handful of people from making a very wrong decision.<p>for a week after, we were all sort of stunned that it actually worked at all.  Tire cages meant for MRAP tires were cut up and turned into random parts holders, or as new hangers for air lines...one even replaced our mailbox post.',
    'time': 1543333648,
    'type': 'comment',
    'comments': [{
      'by': 'alangibson',
      'id': 18543418,
      'parent': 18543229,
      'text': 'You deserve massive credit for striking a blow against this madness. A great example of how working people have more power than they think if they&#x27;re willing to risk dollars and cents for matters of right and wrong.<p>I say that fully realizing that not everyone is in the financial position where they can risk a fight with their employer. You can&#x27;t expect everyone to be Ghandi.',
      'time': 1543334579,
      'type': 'comment'
    }, {
      'by': 'grecy',
      'id': 18543748,
      'kids': [],
      'parent': 18543229,
      'text': '&gt; <i>Pretty bold</i><p>It&#x27;s interesting you would label this as such.<p>In what is ostensibly the best country in the world, and a massive proponent of free speech and human rights, you think it&#x27;s bold to write a letter on the internet to your extraordinarily famous employer?<p>If it&#x27;s considered bold in the USA involving Google, I shudder to think about anyone else doing this anywhere else.<p>In the year 2018 I would hope it&#x27;s very much <i>not</i> bold to do so.',
      'time': 1543336379,
      'type': 'comment',
      'comments': [{
        'by': 'lostgame',
        'id': 18543783,
        'kids': [18543849, 18543991, 18543858, 18543901],
        'parent': 18543748,
        'text': '&gt;&gt; ostensibly the best country in the world<p>[citation seriously needed]<p>&gt;&gt; a massive proponent of free speech and human rights<p>Yeah, &#x27;human rights&#x27;, right, so that&#x27;s why they&#x27;re so[1] focused[2] on separating families[3], and I guess &#x27;free speech&#x27; is what allows the POTUS to be a racist[4], fear-mongering, corrupt[5] liar[6]?<p>Or is &#x27;free speech&#x27; the thing that allows denial[7] of climate change[8] even while California burns to the ground?<p>And I guess with &#x27;human rights&#x27; that goes along with the USA&#x27;s tendency to start senseless[9] wars[10] over oil, often ignoring[11] civilian casualites?<p>It seems as though &#x27;make America great again&#x27; is almost an open confession that it no longer is, or was.<p>[1] <a href="https:&#x2F;&#x2F;www.vox.com&#x2F;2018&#x2F;6&#x2F;11&#x2F;17443198&#x2F;children-immigrant-families-separated-parents" rel="nofollow">https:&#x2F;&#x2F;www.vox.com&#x2F;2018&#x2F;6&#x2F;11&#x2F;17443198&#x2F;children-immigrant-fa...</a>\n[2] <a href="https:&#x2F;&#x2F;www.npr.org&#x2F;2018&#x2F;06&#x2F;19&#x2F;621065383&#x2F;what-we-know-family-separation-and-zero-tolerance-at-the-border" rel="nofollow">https:&#x2F;&#x2F;www.npr.org&#x2F;2018&#x2F;06&#x2F;19&#x2F;621065383&#x2F;what-we-know-family...</a>\n[3] <a href="https:&#x2F;&#x2F;www.chicagotribune.com&#x2F;news&#x2F;nationworld&#x2F;ct-ice-raids-separate-midwest-families-20180630-story.html" rel="nofollow">https:&#x2F;&#x2F;www.chicagotribune.com&#x2F;news&#x2F;nationworld&#x2F;ct-ice-raids...</a>\n[4] <a href="https:&#x2F;&#x2F;www.vox.com&#x2F;2016&#x2F;7&#x2F;25&#x2F;12270880&#x2F;donald-trump-racism-history" rel="nofollow">https:&#x2F;&#x2F;www.vox.com&#x2F;2016&#x2F;7&#x2F;25&#x2F;12270880&#x2F;donald-trump-racism-h...</a>\n[5] <a href="https:&#x2F;&#x2F;www.nytimes.com&#x2F;2018&#x2F;10&#x2F;28&#x2F;opinion&#x2F;trump-administration-corruption-conflicts.html" rel="nofollow">https:&#x2F;&#x2F;www.nytimes.com&#x2F;2018&#x2F;10&#x2F;28&#x2F;opinion&#x2F;trump-administrat...</a>\n[6] <a href="https:&#x2F;&#x2F;www.stuff.co.nz&#x2F;world&#x2F;americas&#x2F;108885940&#x2F;factchecking-donald-trumps-lies-is-easy-as-he-tells-the-same-ones-all-the-time" rel="nofollow">https:&#x2F;&#x2F;www.stuff.co.nz&#x2F;world&#x2F;americas&#x2F;108885940&#x2F;factcheckin...</a>\n[7] <a href="https:&#x2F;&#x2F;www.cnn.com&#x2F;2018&#x2F;10&#x2F;18&#x2F;opinions&#x2F;trumps-failure-to-fight-climate-change-sachs&#x2F;index.html" rel="nofollow">https:&#x2F;&#x2F;www.cnn.com&#x2F;2018&#x2F;10&#x2F;18&#x2F;opinions&#x2F;trumps-failure-to-fi...</a>\n[8] <a href="https:&#x2F;&#x2F;www.nytimes.com&#x2F;2018&#x2F;11&#x2F;26&#x2F;opinion&#x2F;climate-change-denial-republican.html" rel="nofollow">https:&#x2F;&#x2F;www.nytimes.com&#x2F;2018&#x2F;11&#x2F;26&#x2F;opinion&#x2F;climate-change-de...</a>\n[9] <a href="http:&#x2F;&#x2F;theindependent.ca&#x2F;2018&#x2F;06&#x2F;01&#x2F;why-is-the-united-states-always-fighting-a-war-somewhere&#x2F;" rel="nofollow">http:&#x2F;&#x2F;theindependent.ca&#x2F;2018&#x2F;06&#x2F;01&#x2F;why-is-the-united-states...</a>\n[10] <a href="https:&#x2F;&#x2F;foreignpolicy.com&#x2F;2011&#x2F;04&#x2F;04&#x2F;is-america-addicted-to-war&#x2F;" rel="nofollow">https:&#x2F;&#x2F;foreignpolicy.com&#x2F;2011&#x2F;04&#x2F;04&#x2F;is-america-addicted-to-...</a>\n[11] <a href="https:&#x2F;&#x2F;www.washingtonpost.com&#x2F;opinions&#x2F;why-do-we-ignore-the-civilians-killed-in-american-wars&#x2F;2011&#x2F;12&#x2F;05&#x2F;gIQALCO4eP_story.html?noredirect=on&amp;utm_term=.cb5e71599161" rel="nofollow">https:&#x2F;&#x2F;www.washingtonpost.com&#x2F;opinions&#x2F;why-do-we-ignore-the...</a>',
        'time': 1543336630,
        'type': 'comment',
        'comments': [{
          'by': 'chrisco255',
          'id': 18544043,
          'parent': 18543783,
          'text': '[1][2][3] Besides being a revised policy that no longer applies (and yes, policies take time to unwind)...there is no universal human right to emigrate to any country whatsoever. I know a lot of people think so...<p>but also this pales in comparison to the abuses of existing Chinese nationals by China, taking Muslim property [1], placing citizens in internment camps and abusing them, placing them under &quot;deeply invasive forms of surveillance and psychological stress as they are forced to abandon their native language, religious beliefs and cultural practices&quot; [2], imposing a nationwide social credit system that can deny citizens of China basic access to education, air travel, etc on a whim [3]...<p>Whatever your thoughts on Trump (besides being off-topic...he&#x27;s not racist, by the way [4])...he&#x27;s kept in check by a robust court system, a constitutional republic and the congress itself from imposing the systems listed above on U.S. citizens.<p>And yes, free speech is the right to say offensive things. There&#x27;s no reason whatsoever to protect &quot;inoffensive&quot; speech. Yes, free speech (and liberty in general) allows you to be skeptical of the assessment on global climate change. It allows you to question what role if any, our government should have in attempting to control the climate. Sorry you hate liberty, maybe you would prefer if a social credit system imposed punishment on those not pre-disposed to your particular beliefs? If so, then China is looking like a good move for you.<p>[1] <a href="https:&#x2F;&#x2F;www.independent.co.uk&#x2F;news&#x2F;world&#x2F;asia&#x2F;china-uighur-muslim-people-move-homes-xinjiang-china-religion-a8648561.html" rel="nofollow">https:&#x2F;&#x2F;www.independent.co.uk&#x2F;news&#x2F;world&#x2F;asia&#x2F;china-uighur-m...</a>\n[2] <a href="http:&#x2F;&#x2F;www.tribtown.com&#x2F;2018&#x2F;11&#x2F;26&#x2F;us-united-states-china-internment-camps&#x2F;" rel="nofollow">http:&#x2F;&#x2F;www.tribtown.com&#x2F;2018&#x2F;11&#x2F;26&#x2F;us-united-states-china-in...</a>\n[3] <a href="https:&#x2F;&#x2F;www.businessinsider.com&#x2F;china-social-credit-system-punishments-and-rewards-explained-2018-4" rel="nofollow">https:&#x2F;&#x2F;www.businessinsider.com&#x2F;china-social-credit-system-p...</a>\n[4] <a href="https:&#x2F;&#x2F;www.cnbc.com&#x2F;2018&#x2F;11&#x2F;23&#x2F;trump-pushes-senate-to-pass-stalled-criminal-justice-reform-bill.html" rel="nofollow">https:&#x2F;&#x2F;www.cnbc.com&#x2F;2018&#x2F;11&#x2F;23&#x2F;trump-pushes-senate-to-pass-...</a>',
          'time': 1543337990,
          'type': 'comment'
        }, {
          'by': 'hueving',
          'id': 18543998,
          'parent': 18543783,
          'text': 'I&#x27;m not sure why you scare quote free speech and then use an example of free speech to somehow disprove free speech. Free speech isn&#x27;t supposed to be just for propagating popular ideas, that&#x27;s the entire point FFS.',
          'time': 1543337766,
          'type': 'comment'
        }]
      }]
    }, {
      'by': 'komali2',
      'id': 18543338,
      'kids': [],
      'parent': 18543229,
      'text': 'Damn, good for y&#x27;all for sticking to your values. How did you argue against the inevitable &quot;if we don&#x27;t take this contract, dude across the street will&quot;?',
      'time': 1543334203,
      'type': 'comment',
      'comments': [{
        'by': 'tokai',
        'id': 18543510,
        'kids': [],
        'parent': 18543338,
        'text': '&gt;How did you argue against the inevitable &quot;if we don&#x27;t take this contract, dude across the street will&quot;?<p>Collective action. They can hire 14 new guys, but they won&#x27;t have any to instruct the new employees in their work.',
        'time': 1543335006,
        'type': 'comment',
        'comments': [{
          'by': 'SlowRobotAhead',
          'id': 18543701,
          'kids': [18543814, 18544002, 18543763],
          'parent': 18543510,
          'text': 'While I’d like to try and agree... I think you may be missing a sense of scale and the reality of just how replaceable people are... even magically-gifted google employees.',
          'time': 1543336122,
          'type': 'comment',
          'comments': []
        }]
      }]
    }, {
      'by': 'misiti3780',
      'id': 18543676,
      'kids': [],
      'parent': 18543229,
      'text': 'Great story - random question --- but how did you find out about HN? (I&#x27;m just asking because you implied you don&#x27;t work in software, etc.)',
      'time': 1543336012,
      'type': 'comment',
      'comments': [{
        'by': 'jgrahamc',
        'id': 18543719,
        'kids': [18543867],
        'parent': 18543676,
        'text': 'Well, his profile says... &quot;Linux fan&quot;.',
        'time': 1543336234,
        'type': 'comment',
        'comments': []
      }]
    }]
  }, {
    'by': 'Puer',
    'id': 18543244,
    'kids': [],
    'parent': 18542830,
    'text': 'I considered working at Google last year after a recruiter reached out to me, but their decision to backtrack on their promise in China changed my mind. I do not morally condemn anyone who works at Google. I have many good friends that are both bright engineers and undeniably good people that work there. I just feel that as someone who&#x27;s family is Taiwanese, I cannot in good consciousness support the company. I let the recruiter know this because I believe it&#x27;s important that they know. I&#x27;m curious if anyone else on HN has had similar experiences.',
    'time': 1543333709,
    'type': 'comment',
    'comments': [{
      'by': 'kevmo',
      'id': 18543692,
      'parent': 18543244,
      'text': 'I morally judge (not condemn) people who work at Google. If you can get a job at Google, you can get a job almost anywhere. There is tons of great work out there for you. People who work at Google are choosing to aid in the suppression of human freedom.',
      'time': 1543336078,
      'type': 'comment'
    }, {
      'by': 'komali2',
      'id': 18543465,
      'parent': 18543244,
      'text': 'I sympathize with your position, especially regarding Taiwan, but I wonder if your early rejection was as effective as employees rebelling? One need not take the most effective route, but given the size of Google, when I was in a similar position to yours I justified it by saying if I got an offer, I&#x27;d make it very clear I&#x27;d want nothing to do with the censorship work for the exact reason you listed.',
      'time': 1543334783,
      'type': 'comment'
    }, {
      'by': 'garmaine',
      'id': 18543931,
      'parent': 18543244,
      'text': 'I will not work for Google for the same reason, fwiw.',
      'time': 1543337439,
      'type': 'comment'
    }]
  }, {
    'by': 'educationdata',
    'id': 18543164,
    'kids': [18543795, 18543389],
    'parent': 18542830,
    'text': 'There are not many Chinese names in the signed letter, and I can fully understand. If you are a Chinese H1B or green card holder, and you signed this letter, it is almost certain the Chinese government will contact your family in China.',
    'time': 1543333340,
    'type': 'comment',
    'comments': [{
      'by': 'imglorp',
      'id': 18543222,
      'kids': [],
      'parent': 18543164,
      'text': 'Can confirm, China watches its citizens abroad, closely, and in person sometimes. Their families can be affected, and if they go back home to visit, there can be problems.',
      'time': 1543333634,
      'type': 'comment',
      'comments': [{
        'by': 'pixl97',
        'id': 18543459,
        'parent': 18543222,
        'text': '&gt;China watches its citizens abroad<p>Now with increased efficiency with Dragonfly technology. Find enemies of the state with our world wide database, US and EU results included. All brought to you by the Alphabet platform.',
        'time': 1543334764,
        'type': 'comment'
      }]
    }, {
      'by': 'netheril96',
      'id': 18543489,
      'kids': [18543987],
      'parent': 18543164,
      'text': 'Or that they genuinely hold different views.',
      'time': 1543334922,
      'type': 'comment',
      'comments': [{
        'by': 'abecedarius',
        'id': 18543648,
        'parent': 18543489,
        'text': 'Too bad for the Chinese state. If you try to promote a view by threatening others who might express a different one, I&#x27;m not going to weigh that neutrally.',
        'time': 1543335793,
        'type': 'comment'
      }]
    }, {
      'by': 'jorblumesea',
      'id': 18543924,
      'parent': 18543164,
      'text': 'To me, that&#x27;s further proof that this letter is spot on. Why should we ever cooperate with a government that has tens of thousands in concentration camps? It is becoming increasingly unethical to do any business in China.',
      'time': 1543337385,
      'type': 'comment'
    }]
  }, {
    'by': 'hnphillipj',
    'id': 18543269,
    'kids': [18543577, 18543392, 18543403, 18543529, 18543276, 18543471],
    'parent': 18542830,
    'text': 'Given how trash of a search engine Baidu is, Google would likely achieve market share dominance in China within a couple years - should they move forward with Dragonfly. Complying with demands of the Chinese gov&#x27;t is the only way they can penetrate the Chinese market.<p>Search engine advertising constitutes close to 85% of Google&#x27;s revenue. And unlike Project Maven, which was ended due to internal resistance from employees, doing business with the second largest economy in the world isn&#x27;t an expendable venture.<p>Curious to see how they move forward. My guess is they will: human outrage never really lasts long, especially when their livelihoods are far from in jeopardy.',
    'time': 1543333835,
    'type': 'comment',
    'comments': [{
      'by': 'admax88q',
      'id': 18543344,
      'kids': [],
      'parent': 18543269,
      'text': '&gt; Google would likely achieve dominant search engine market share in China within a few years<p>You assume that the government would ever let a foreign company get dominant market share over a domestic one.<p>China is no where close to a free market, the winners are chosen.',
      'time': 1543334234,
      'type': 'comment',
      'comments': [{
        'by': 'ocdtrekkie',
        'id': 18543430,
        'kids': [18543729, 18543668],
        'parent': 18543344,
        'text': 'China has a vested interest in spreading it&#x27;s influence globally, the same way the United States has (and is receding from a bit under the current administration). It would be far more valuable to China to get a global company like Google propagating their censorship requirements than continuing to prop up their own state-run option. If Google caves, other countries might ask for the same demands as well, which supports the notion that China&#x27;s way of doing things is the &#x27;right&#x27; way. In short, having global companies doing China&#x27;s bidding expands China&#x27;s influence.<p>Reading a bit about the Belt and Road Initiative is probably a good primer on some of China&#x27;s global interests right now.',
        'time': 1543334603,
        'type': 'comment',
        'comments': []
      }]
    }, {
      'by': 'memory_grep',
      'id': 18543762,
      'parent': 18543269,
      'text': '&gt; Complying with demands of the Chinese gov&#x27;t is the only way they can penetrate the Chinese market.<p>You completely missed the point and failed to address any of the serious ethical problems they raised in the letter. We would be living in a dark dystopia if everyone&#x27;s biggest priority was penetrating markets.<p>Tech workers are in high demand and have great salaries. Their livelihoods are not in jeapordy; they have their pick of where to work.',
      'time': 1543336503,
      'type': 'comment'
    }]
  }, {
    'by': 'Nasrudith',
    'id': 18543872,
    'parent': 18542830,
    'text': 'Really the Chinese market seems to be a greed trap. Companies drool over themselves at the prospect of the second largest economy, compromise themselves and harm existing sales only to find that China isn&#x27;t a greenfield market like they arrogantly expected and if there wasn&#x27;t already a local competitor there will be soon.',
    'time': 1543337120,
    'type': 'comment'
  }, {
    'by': 'gregmac',
    'id': 18543068,
    'parent': 18542830,
    'text': 'Quick summary (if you don&#x27;t know the name &quot;Dragonfly&quot;, like I didn&#x27;t):<p>&gt; We are Google employees and we join Amnesty International in calling on Google to cancel project Dragonfly, Google’s effort to create a censored search engine for the Chinese market that enables state surveillance.<p>&gt; Our opposition to Dragonfly is not about China: we object to technologies that aid the powerful in oppressing the vulnerable, wherever they may be.',
    'time': 1543332858,
    'type': 'comment'
  }]
}, {
  'by': 'petethomas',
  'descendants': 1,
  'id': 18543509,
  'kids': [],
  'score': 18,
  'time': 1543335000,
  'title': 'Farm bankruptcies on the rise according to new Fed report',
  'type': 'story',
  'url': 'https://thehill.com/policy/finance/418263-farm-bankruptcies-on-the-rise-according-to-new-fed-report',
  'comments': [{
    'by': 'empath75',
    'id': 18543966,
    'parent': 18543509,
    'text': 'So it turns out that trade wars are bad?',
    'time': 1543337599,
    'type': 'comment'
  }]
}, {
  'by': 'zeveb',
  'descendants': 5,
  'id': 18543371,
  'kids': [],
  'score': 11,
  'time': 1543334364,
  'title': 'Fortran is still a thing',
  'type': 'story',
  'url': 'https://wordsandbuttons.online/fortran_is_still_a_thing.html',
  'comments': [{
    'by': 'wycy',
    'id': 18544021,
    'parent': 18543371,
    'text': 'Fortran is still very much a thing. I&#x27;m actively working on multiple Fortran projects, including one that&#x27;s being written from scratch just in the last year in modern Fortran.<p>Modern Fortran looks completely different from the old school FORTRAN77 most people probably imagine. Gone are the days of fixed-format, where the columns actually mattered, and gone are the days of unreadable ALL CAPITAL LETTERS, and gone are the days of GOTO.<p>I developed a Fortran implementation of Python&#x27;s argparse[0] recently. The code is nothing like the monstrous spaghetti code of days past---although I do still obsessively line up my code in columns, this isn&#x27;t important.<p>[0] <a href="https:&#x2F;&#x2F;gitlab.com&#x2F;bwearley&#x2F;f-clap" rel="nofollow">https:&#x2F;&#x2F;gitlab.com&#x2F;bwearley&#x2F;f-clap</a>',
    'time': 1543337855,
    'type': 'comment'
  }, {
    'by': 'wglb',
    'id': 18543992,
    'parent': 18543371,
    'text': 'Fortran II was my first programming language, and a key element to my first summer job, and to my first FTJ.  There were a lot of things about it that eventually made me dissatisfied enough that I studied compilers to see why there were such goofy restrictions, dabbling in XPL.  I haven&#x27;t been back, but germane to this article, I visited with my professor with whom I had the summer job 40 years later, and he pulled out the code that I had written that was still in production,  It had been changed a bit, but it was still very recognizable. And it survived because, while it was a small part of a very large numerical analysis project, it worked.<p>The article makes me wonder if I had a problem of this sort again, would I choose Fortran.  I&#x27;m thinking not, but then again, there are hints that the language has changed significantly over the last 50 years.<p>I have used many other languages during that time, and am fond of several of them (bliss 36, lisp, various assembler) and dislike others (RPG III, COBOL, perl).  Python would be in the middle.',
    'time': 1543337727,
    'type': 'comment'
  }, {
    'by': 'dahart',
    'id': 18544016,
    'kids': [],
    'parent': 18543371,
    'text': 'What is modern Fortran good at? It seems like Fortran&#x27;s niche has been scientific computing, specifically high performance linear algebra. (I wonder if that makes Fortran good for neural networks.)<p>In college, I remember attending a great talk by a visiting Stanford compiler prof. who talked about being able to produce faster C++ code by transpiling to Fortran first than by optimizing the C++ or IR directly. Not sure if that&#x27;s still true, but at the time it seems Fortran was a more restrictive language which permitted stronger optimization.',
    'time': 1543337844,
    'type': 'comment',
    'comments': [{
      'by': 'electricslpnsld',
      'id': 18544047,
      'parent': 18544016,
      'text': '&gt; Not sure if that&#x27;s still true, but at the time it seems Fortran was a more restrictive language which permitted stronger optimization.<p>There is no aliasing in Fortran. In C (and using compiler extensions in C++) you manually use restrict to give the same information to the compiler, but it is a trickier process than in Fortran. Rust inherits this benefit from Fortran, but last I checked they had all related optimizations disabled (and most numerical computing friendly features in Rust tend to be on the back burner).',
      'time': 1543338014,
      'type': 'comment'
    }]
  }, {
    'by': 'electricslpnsld',
    'id': 18543977,
    'parent': 18543371,
    'text': 'Tons of linear algebra and optimization code is still actively developed in Fortran. The most accurate solver I&#x27;ve found for small quadratic programs is a Fortran code maintained by a grumpy German math professor.',
    'time': 1543337672,
    'type': 'comment'
  }]
}, {
  'by': 'acsillag',
  'descendants': 22,
  'id': 18539481,
  'kids': [18543501, 18543712, 18542977],
  'score': 47,
  'time': 1543294177,
  'title': 'Is Neuroscience a Bigger Threat than Artificial Intelligence?',
  'type': 'story',
  'url': 'https://www.3ammagazine.com/3am/is-neuroscience-a-bigger-threat-than-artificial-intelligence/',
  'comments': [{
    'by': 'conjectures',
    'id': 18543427,
    'kids': [],
    'parent': 18539481,
    'text': 'From a skim read this article is pretty sloppy. It argues that the human OEM theory of mind is in some way unique or unreproducible. This conclusion is completely unsupported by the text, which is just a sophisticated word salad.',
    'time': 1543334597,
    'type': 'comment',
    'comments': [{
      'by': 'lynal',
      'id': 18543747,
      'kids': [],
      'parent': 18543427,
      'text': 'I&#x27;m reminded of the rule of thumb: if a headline asks a yes&#x2F;no question, the answer is almost always &quot;no.&quot;',
      'time': 1543336363,
      'type': 'comment',
      'comments': [{
        'by': 'dominotw',
        'id': 18543768,
        'parent': 18543747,
        'text': '<a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Betteridge%27s_law_of_headlines" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Betteridge%27s_law_of_headline...</a>',
        'time': 1543336527,
        'type': 'comment'
      }]
    }]
  }, {
    'by': 'djokkataja',
    'id': 18543823,
    'parent': 18539481,
    'text': '&gt; What does all this mean? Watson may beat us at Jeopardy, but we are convinced we have something AI will always lack:  We are agents in the world, whose decisions, choices, actions are made meaningful by the content of the belief&#x2F;desire pairings that bring them about. But what if the theory of mind that underwrites our distinctiveness is build on sand, is just another useful illusion foisted upon us by the Darwinian processes that got us here? Then it will turn out that neuroscience is a far greater threat to human distinctiveness than AI will ever be.<p>I&#x27;m not sure how someone could believe that AI would always lack these things without also believing in some form of essentialism, basically believing that major parts of the human experience are &quot;magic&quot; somehow rather than derived from physical processes.<p>Anyway the author&#x27;s major concern seems to be that neuroscience has demonstrated that desires and beliefs are not directly real in the same way that, say, your brain is a particular collection of atoms restricted to the physical confines of your skull. I suppose this could be very disturbing if you have the sense that your life is significantly more meaningful if all of your desires and beliefs are as real as the ground you walk on rather than being some illusory projection of the brain.<p>The problem actually arises from the associations that we have with the word &quot;illusion&quot;. As soon as we start to think of our beliefs and desires as &quot;illusions&quot;, it&#x27;s natural to leap to terms like &quot;fake&quot;, &quot;false&quot;, &quot;worthless&quot;, &quot;deceit&quot;, and so on. In other words, there are all kinds of negative connotations that we associate with the word &quot;illusion&quot;, so when we use that to describe core parts of what we think of as the human experience, it makes us feel bad.<p>But this is simply a limit of our language: what <i>are</i> the illusions of &quot;beliefs&quot; and &quot;desires&quot; anyway? Desires correspond to our experiences; if we want food, that corresponds to a very real physical state of our physical bodies. Beliefs are a lot shakier because they tend to be be built on complex layers of ideas, but they correspond to physical reality as well, whether or not they&#x27;re particularly accurate. So these things are very useful and important despite being &quot;illusions&quot;. And there&#x27;s a huge difference between these &quot;illusions&quot; and direct falsehoods. So I think the real limitation here is that we don&#x27;t have language that&#x27;s particularly well adapted to discussing and thinking about these things.',
    'time': 1543336840,
    'type': 'comment'
  }, {
    'by': 'xazo',
    'id': 18543486,
    'kids': [],
    'parent': 18539481,
    'text': 'A more informative title would be &quot;Is Neuroscience a Bigger Threat to Human Distinctiveness than AI?&quot;',
    'time': 1543334918,
    'type': 'comment',
    'comments': []
  }]
}, {
  'by': 'RBBronson123',
  'id': 18543837,
  'score': 1,
  'text': '70 Million Jobs is the first national, for-profit employment platform for people with criminal records. Over the past year, we&#x27;ve grown our community of active job seekers enormously, landed jobs for many, many deserving men and women and achieved profitability.<p>Up until now, company technology has been outsourced, but we&#x27;ve outgrown this, and need someone up for the challenge of building the next generation job board while saving lots of lives.<p>Given the unique nature of our users (the formerly incarcerated) who access the Internet primarily through their phone, we need someone who has a strong UI&#x2F;UX eye. We do lots of fairly sophisticated marketing and generate lots of data, so there must be an interest there as well. And as we are a decidedly tech-challenged team, we need someone can take ownership of this important part of our business while being very communicative (and patient).<p>In exchange, we offer a market salary, lots of equity, a very collegial, passionate team, and a chance to work on something that actually matters. We&#x27;re seeking double bottom line returns: build a very profitable, successful business while doing massive social good.<p>We&#x27;re currently based in SF but are planning to move the company to LA beginning of next year. If you share our belief that everyone deserves a second chance and you&#x27;re up for the adventure of a lifetime, please get in touch.<p>70 Million Jobs is strongly committed to fair-chance hiring and diversity and inclusion in our workplace. Please, NOT seeking remote or part-time help. Richard@70MillionJobs.com',
  'time': 1543336946,
  'title': '70M Jobs Seeking CTO/Head of Engineering',
  'type': 'job',
  'comments': []
}, {
  'by': 'richtr',
  'descendants': 105,
  'id': 18535681,
  'kids': [18541934, 18543959, 18542424, 18542006, 18542234, 18541616, 18541614, 18543824, 18542755, 18541826, 18541871, 18542348, 18542625, 18541682, 18543525, 18542141, 18542003, 18542418, 18542508, 18542011, 18541860, 18541749, 18543202, 18541821, 18542247, 18541607],
  'score': 163,
  'time': 1543257433,
  'title': 'Why are tech companies making custom typefaces?',
  'type': 'story',
  'url': 'https://www.arun.is/blog/custom-typefaces/',
  'comments': [{
    'by': 'charliecurran',
    'id': 18541760,
    'kids': [18543708, 18542382, 18542798, 18543542, 18542172, 18542133, 18542587, 18543190],
    'parent': 18535681,
    'text': 'This is one of those times where as a working creative that frequently reads Hacker News I straight up face palm.<p>I have to imagine a lot of these commenters would say the same  in regards to any sort of subjective artistic choice that isn&#x27;t purely optimized for efficiency.<p>I would like to leave you with a quote by Briano Eno from a really good lecture he gave several years ago that I hope can provide a jumping off point for alternate ways to think about style, and why I think y&#x27;all are asking the wrong questions.<p>&quot;So the first question is, why is any of that important? Why do we do it? And notice it’s not only us relatively wealthy people, in terms of global wealth, who are doing it - it’s everybody that we know of. Every human group we know of is spending a lot of their time – in fact almost all of their surplus time and energy – is spent in the act of stylising things and enjoying other people’s stylisations of things. So my question is, what is it for? In fact, my friend Danny Hillus, who’s a scientist, was asked by a well-known science website, along with about 300 other scientists, he was asked what is the most interesting scientific question at the moment? A lot of the other people replied with things about the cosmological constant and Ryman’s Hypothesis and all these very complicated things. And his question was very simple: he said why do we like music? And if you start thinking about that, that is really one of the most mysterious things you can imagine. Why do we even have an interest in music? Why do we have preferences? Why do we like this song better than that one? Why do we like this Beethoven sonata better than that Beethoven sonata? Why do we like this performance of that same sonata better than that other performance? We had very fine distinctions about things that we prefer, aesthetic things. And, yet, none of it seems to have much to do with functionalism, with staying alive and certainly not with industries I would say.&quot; - Brian Eno<p><a href="https:&#x2F;&#x2F;www.bbc.co.uk&#x2F;mediacentre&#x2F;speeches&#x2F;2015&#x2F;bbc-music-john-peel-lecture" rel="nofollow">https:&#x2F;&#x2F;www.bbc.co.uk&#x2F;mediacentre&#x2F;speeches&#x2F;2015&#x2F;bbc-music-jo...</a>',
    'time': 1543321826,
    'type': 'comment',
    'comments': []
  }]
}, {
  'by': 'Noc2',
  'descendants': 2,
  'id': 18542270,
  'kids': [18543750],
  'score': 31,
  'time': 1543327085,
  'title': 'How to host your own distributed website in just a few seconds',
  'type': 'story',
  'url': 'https://blog.florence.chat/tutorial-how-to-create-your-own-distributed-website-in-just-a-few-seconds-5100ccf068bc',
  'comments': []
}];
