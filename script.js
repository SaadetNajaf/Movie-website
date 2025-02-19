const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth /319.75); // Ekranda görünen resim sayısı
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length; // Toplam resim sayısı

  arrow.addEventListener("click", function () {
    clickCounter++;
    const maxClicks = imageItem - widthRatio; // Kaydırma için maksimum tıklama sayısı
    const computedStyle = window.getComputedStyle(movieLists[i]);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);

    if (clickCounter <= maxClicks) {
      movieLists[i].style.transform = `translateX(${matrix.m41 - 319.75}px)`;
    } else {
      // Son resmin tam görünmesi için kaydırmayı sınırla
      const remainingWidth = (imageItem - widthRatio) * 319.75;
      movieLists[i].style.transform = `translateX(-${remainingWidth}px)`;
    }

    // Başa dön
    if (clickCounter > maxClicks) {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/* Dark Mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title");

ball.addEventListener("click", function() {
    items.forEach((item) => item.classList.toggle("active"));
});
