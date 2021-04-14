//////////////////////////////////////////////////////////////////////////////////////////////
// To interact with the Airtable API using their JavaScript library, read the documentation
// on Airtable's github page here: https://github.com/airtable/airtable.js
//////////////////////////////////////////////////////////////////////////////////////////////

console.log('find me in main.js');

// First import the airtable library using the require() function
var Airtable = require('airtable');
// Configure Airtable by replacing the key with your API key inside the `YOUR_SECRET_API_KEY` string
Airtable.configure({
  apiKey: 'key53IrjYnh8Tr6ln',
  endpointUrl: 'https://api.airtable.com'
});
// Replace with the ID of the base you are using (the Elastic Collection). You can use
// Airtable's interactive API documentation for help finding this ID.
var base = Airtable.base('appWcMr0M9G3jibfD');

base('patrons').select({
  // Specify the max number of records you want returned at once
  // maxRecords: 110,
  view: 'Grid view'
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  var cardContainer = document.querySelector('#card-container');
  var randomCardContainer = document.querySelector('#random-card-container');

  ///////////////////////////////////////////////////////////////////////////////////////
  // Most of the code you write will probably take place around here
  // As you loop through the records returned from Airtable, you'll do something
  // with the data stored in the `fields` object.
  ///////////////////////////////////////////////////////////////////////////////////////
  records.forEach(function(record) {
    console.log('Retrieved', record.get('patron_saints'), record.fields);
    // Use the data in record.fields of your record object to insert the data from your
    
    // Contents for the front side of card
    var card = document.createElement('div');
    var name = document.createElement('div');
    var crop = document.createElement('div');
    var image = document.createElement('img');
    var patronage = document.createElement('div');
    var frontSide = document.createElement('div');  

    name.classList.add('card-name');
    name.innerHTML = record.fields.patron_saints;

    image.classList.add('card-image');
    image.src = record.fields.image[0].url;

    patronage.classList.add('card-patronage');
    patronage.innerHTML = record.fields.patronage;   

    crop.classList.add('crop');
    card.classList.add('card');

    // Contents for the back side of card
    var description = document.createElement('div');
    var link = document.createElement('a');
    var backSide = document.createElement('div');
    
    description.classList.add('card-desc');
    description.innerHTML = record.fields.description;

    link.classList.add('link');
    link.href = record.fields.more_info;
    link.innerHTML = 'Read more about ' + record.fields.patron_saints;

    // Append the new content to your document
    card.style.setProperty('--image',`url(${record.fields.image[0].url})`);
    frontSide.append(name, crop, patronage);
    frontSide.classList.add('front-side');
    backSide.append(description, link);    
    backSide.classList.add('back-side');
    cardContainer.append(card);

    card.append(frontSide);
    card.append(backSide);

    // Filtering cards by category
    var filterAfflictions = document.querySelector('#one');
    var filterEnvironment = document.querySelector('#two');
    var filterIdentity = document.querySelector('#three');
    var showAll = document.querySelector('#all');
    var showCards = function () {
      card.style.display = 'inline-block';
    }
    var hideCards = function () {
      card.style.display = 'none';
    }
    var removeTextGlow = function () {
      filterAfflictions.classList.remove('text-glow');
      filterEnvironment.classList.remove('text-glow');
      filterIdentity.classList.remove('text-glow');      
    }
    var hideRandom = function () {
      randomize.style.display = 'none';
      randomCardContainer.style.display = 'none';
      random.classList.remove('icon-glow');
    }
    var showRandom = function () {
      randomize.style.display = 'block';
      randomCardContainer.style.display = 'block';
      random.classList.add('icon-glow'); 
    }
    var addBg = function () {
      document.body.classList.add('gradient-bg');
    }
    var removeBg = function () {
      document.body.classList.remove('gradient-bg');
    }
    var addWhiteText = function () {
      filterAfflictions.classList.add('white-text');
      filterEnvironment.classList.add('white-text');
      filterIdentity.classList.add('white-text');
      showAll.classList.add('white-text');
    }
    var removeWhiteText = function () {
      filterAfflictions.classList.remove('white-text');
      filterEnvironment.classList.remove('white-text');
      filterIdentity.classList.remove('white-text');
      showAll.classList.remove('white-text');
    }

    filterAfflictions.addEventListener('click', function() {
      if (record.fields.category == 'afflictions') {
        showCards();
        filterAfflictions.classList.add('text-glow');
      } else {
        hideCards();
        hideRandom();
        removeBg();
        removeWhiteText();
        filterEnvironment.classList.remove('text-glow');
        filterIdentity.classList.remove('text-glow');
      }
    });

    filterEnvironment.addEventListener('click', function() {
      if (record.fields.category == 'environment') {
        showCards();
        filterEnvironment.classList.add('text-glow');
      } else {
        hideCards();
        hideRandom();
        removeBg();
        removeWhiteText();
        filterAfflictions.classList.remove('text-glow');
        filterIdentity.classList.remove('text-glow');
      }
    });

    filterIdentity.addEventListener('click', function() {
      if (record.fields.category == 'identity') {
        showCards();
        filterIdentity.classList.add('text-glow');
      } else {
        hideCards();
        hideRandom();
        removeBg();
        removeWhiteText();
        filterEnvironment.classList.remove('text-glow');
        filterAfflictions.classList.remove('text-glow');
      }
    });

    showAll.addEventListener('click', function() {
      showCards();
      hideRandom();
      removeTextGlow();
      removeBg();
      removeWhiteText();
    });

    // Scroll up function
    var scrollButton = document.getElementById("scroll-button");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    }

    // Hover function to enlarge selected cards
    card.addEventListener('mouseenter', function() {
      card.classList.add('active');
      document.querySelector('#card-container').classList.add('blur');
    })

    card.addEventListener('mouseleave', function() {
      card.classList.remove('active');
      document.querySelector('#card-container').classList.remove('blur');
    })

    // Random generator
    var random = document.querySelector('.random');
    random.addEventListener('click', function() {
      hideCards();
      removeTextGlow();
      showRandom();
      addBg();
      addWhiteText();
    })

    var randomize = document.querySelector('#random-button');
    var allCards = document.querySelectorAll('.card');
    randomize.addEventListener('click', function() {
      var randomCard = allCards[Math.floor(Math.random() * allCards.length)];
      console.log('randomCard', randomCard);


      randomCardContainer.innerHTML = randomCard.outerHTML;
      randomCard.classList.add('random-card');
      var randomCard = document.querySelector('.random-card');
      randomCard.style.display = 'block';

    })

    // Hover function to flip for random cards

    // Mobile responsive javascript code
    if (matchMedia('only screen and (max-width: 812px)').matches) {
      card.addEventListener('touchstart', function() {
      card.classList.add('active');
      document.querySelector('#card-container').classList.add('blur');
    })

      card.addEventListener('touchend', function() {
      card.classList.remove('active');
      document.querySelector('#card-container').classList.remove('blur');
    })

  }

  });


  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

