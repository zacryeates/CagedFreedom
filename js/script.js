window.onload = function() {
  var meadowSong = document.getElementById('meadow-song');
  var beachSong = document.getElementById('beach-song');
  var forestSong = document.getElementById('forest-song');
  var riverbankSong = document.getElementById('riverbank-song');

  var meadowImg = document.getElementById('img-meadow');
  var beachImg = document.getElementById('img-beach');
  var forestImg = document.getElementById('img-forest');
  var riverbankImg = document.getElementById('img-riverbank');

  var btnMeadow = document.getElementById('btn-meadow');
  var btnBeach = document.getElementById('btn-beach');
  var btnForest = document.getElementById('btn-forest');
  var btnRiverbank = document.getElementById('btn-riverbank');

  if (btnMeadow && meadowSong) {
    btnMeadow.addEventListener('click', function() {
      btnMeadow.classList.toggle('playing');
      beachSong.load();
      riverbankSong.load();
      forestSong.load();
      meadowImg.style.borderColor = "black";
      beachImg.style.borderColor = "black";
      forestImg.style.borderColor = "black";
      riverbankImg.style.borderColor = "black";
      playEnd(meadowImg,meadowSong);
      progress(meadowImg, btnMeadow, meadowSong);
    });
  }

  if (btnBeach && beachSong) {
    btnBeach.addEventListener('click', function() {
      btnBeach.classList.toggle('playing');
      meadowSong.load();
      riverbankSong.load();
      forestSong.load();
      meadowImg.style.borderColor = "black";
      beachImg.style.borderColor = "black";
      forestImg.style.borderColor = "black";
      riverbankImg.style.borderColor = "black";
      playEnd(beachImg, beachSong);
      progress(beachImg, btnBeach, beachSong);
    });
  }

  if (btnForest && forestSong) {
    btnForest.addEventListener('click', function() {
      btnForest.classList.toggle('playing');
      meadowSong.load();
      riverbankSong.load();
      beachSong.load();
      meadowImg.style.borderColor = "black";
      beachImg.style.borderColor = "black";
      forestImg.style.borderColor = "black";
      riverbankImg.style.borderColor = "black";
      playEnd(forestImg,forestSong);
      progress(forestImg, btnForest, forestSong);
    });
  }

  if (btnRiverbank && riverbankSong) {
    btnRiverbank.addEventListener('click', function() {
      btnRiverbank.classList.toggle('playing');
      meadowSong.load();
      forestSong.load();
      beachSong.load();
      meadowImg.style.borderColor = "black";
      beachImg.style.borderColor = "black";
      forestImg.style.borderColor = "black";
      riverbankImg.style.borderColor = "black";
      playEnd(riverbankImg, riverbankSong);
      progress(riverbankImg, btnRiverbank, riverbankSong);
    });
  }
};

function playEnd(btn, song) {
  if (song.paused && song.currentTime >= 0 && !song.ended) {
    song.play();
    btn.style.borderColor = "#e8ba3a";
  } else {
    song.load();
    btn.style.borderColor = "black";
  }
}

function reset(img, btn, song) {
  if (btn.classList.contains('playing')) {
    btn.classList.toggle('playing');
  }
  song.pause();
  song.currentTime = 0;
  img.style.borderColor = "black";
}

function progress(img, btn, song) {
  setTimeout(function() {
    var end = song.duration;
    var current = song.currentTime;
    var percent = current / (end / 100);
    //check if song is at the end
    if (current == end) {
      reset(img, btn, song);
    }
    //set inset box shadow
    btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(232 186 58)";
    //call function again
    progress(img, btn, song);
  }, 1000);
}
