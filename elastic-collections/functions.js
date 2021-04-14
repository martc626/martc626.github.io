function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

function showCards(card) {
  if (card) {
    card.style.display = '';
  } else {
    document.querySelectorAll('.card').forEach((card) => {
      card.style.display = '';
    });
  }
}

function hideCards(card) {
  if (card) {
    card.style.display = 'none';
  } else {
    document.querySelectorAll('.card').forEach((card) => {
      card.style.display = 'none';
    });
  }
}

function removeTextGlow() {
	filterAfflictions.classList.remove('text-glow');
	filterEnvironment.classList.remove('text-glow');
	filterIdentity.classList.remove('text-glow');
}

function addBg() {
	document.body.classList.add('gradient-bg');
}

function removeBg() {
	document.body.classList.remove('gradient-bg');
}

function addWhiteText() {
	filterAfflictions.classList.add('white-text');
	filterEnvironment.classList.add('white-text');
	filterIdentity.classList.add('white-text');
	showAll.classList.add('white-text');
}

function removeWhiteText() {
	filterAfflictions.classList.remove('white-text');
	filterEnvironment.classList.remove('white-text');
	filterIdentity.classList.remove('white-text');
	showAll.classList.remove('white-text');
}

function hideRandom() {
	randomize.style.display = 'none';
	randomCardContainer.style.display = 'none';
	random.classList.remove('icon-glow');
}

function showRandom() {
	randomize.style.display = 'block';
	randomCardContainer.style.display = 'block';
	random.classList.add('icon-glow');
}
