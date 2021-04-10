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
  maxRecords: 110,
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

    name.classList.add('card__name');
    name.innerHTML = record.fields.patron_saints;

    image.classList.add('card__image');
    image.src = record.fields.image[0].url;

    patronage.classList.add('card__patronage');
    patronage.innerHTML = record.fields.patronage;   

    crop.classList.add('crop');
    card.classList.add('card');

    // Contents for the back side of card
    var description = document.createElement('div');
    var link = document.createElement('a');
    var backSide = document.createElement('div');
    
    description.classList.add('card__desc');
    description.innerHTML = record.fields.description;

    link.classList.add('link');
    link.href = record.fields.more_info;
    link.innerHTML = 'Read more about ' + record.fields.patron_saints;

    // Append the new content to your document
    card.style.setProperty('--image',`url(${record.fields.image[0].url})`);
    frontSide.append(name, crop, patronage);
    frontSide.classList.add('front_side');
    backSide.append(description, link);    
    backSide.classList.add('back_side');
    cardContainer.append(card);

    card.append(frontSide);
    card.append(backSide);

    // Contents for random generator
    var randomize = document.querySelector('#random-button');
    var hideRandom = function () {
      randomize.style.display = 'none';
      randomCardContainer.style.display = 'none';
    }

    // Filtering cards by category
    var filterAfflictions = document.querySelector('#one');
    filterAfflictions.addEventListener('click', function() {
      if (record.fields.category == 'afflictions') {
        card.style.display = 'inline-block';
        filterAfflictions.style.textShadow = '0px 0px 8px yellow';
      } else {
        card.style.display = 'none';
        hideRandom();
        filterEnvironment.style.textShadow = 'none';
        filterIdentity.style.textShadow = 'none';
      }
    });

    var filterEnvironment = document.querySelector('#two');
    filterEnvironment.addEventListener('click', function() {
      if (record.fields.category == 'environment') {
        card.style.display = 'inline-block';
        filterEnvironment.style.textShadow = '0px 0px 8px yellow';
      } else {
        card.style.display = 'none';
        hideRandom();
        filterAfflictions.style.textShadow = 'none';
        filterIdentity.style.textShadow = 'none';
      }
    });

    var filterIdentity = document.querySelector('#three');
    filterIdentity.addEventListener('click', function() {
      if (record.fields.category == 'identity') {
        card.style.display = 'inline-block';
        filterIdentity.style.textShadow = '0px 0px 8px yellow';
      } else {
        card.style.display = 'none';
        hideRandom();
        filterEnvironment.style.textShadow = 'none';
        filterAfflictions.style.textShadow = 'none';
      }
    });

    var showAll = document.querySelector('#all');
    showAll.addEventListener('click', function() {
      card.style.display = 'inline-block';
      hideRandom();
      filterAfflictions.style.textShadow = 'none';
      filterEnvironment.style.textShadow = 'none';
      filterIdentity.style.textShadow = 'none';
    });

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
      random.style.boxShadow = '0px 0px 10px yellow';
      card.style.display = 'none';
      randomCardContainer.style.display = 'block';
      randomize.style.display = 'block';
    })

    var randomize = document.querySelector('#random-button');
    randomize.addEventListener('click', function() {

    })

    // Hover function to flip for random cards

  });


  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

