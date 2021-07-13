window.onload = function() {
  var meadowSong = document.getElementById('meadow-song');
  var beachSong = document.getElementById('beach-song');
  var forestSong = document.getElementById('forest-song');
  var riverbankSong = document.getElementById('riverbank-song');

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
      playEnd(meadowSong);
      progress(btnMeadow, meadowSong);
    });
  }

  if (btnBeach && beachSong) {
    btnBeach.addEventListener('click', function() {
      btnBeach.classList.toggle('playing');
      meadowSong.load();
      riverbankSong.load();
      forestSong.load();
      playEnd(beachSong);
      progress(btnBeach, beachSong);
    });
  }

  if (btnForest && forestSong) {
    btnForest.addEventListener('click', function() {
      btnForest.classList.toggle('playing');
      meadowSong.load();
      riverbankSong.load();
      beachSong.load();
      playEnd(forestSong);
      progress(btnForest, forestSong);
    });
  }

  if (btnRiverbank && riverbankSong) {
    btnRiverbank.addEventListener('click', function() {
      btnRiverbank.classList.toggle('playing');
      meadowSong.load();
      forestSong.load();
      beachSong.load();
      playEnd(riverbankSong);
      progress(btnRiverbank, riverbankSong);
    });
  }
};

function playEnd(song) {
  if (song.paused && song.currentTime >= 0 && !song.ended) {
    song.play();
  } else {
    song.load();
  }
}

function reset(btn, song) {
  if (btn.classList.contains('playing')) {
    btn.classList.toggle('playing');
  }
  song.pause();
  song.currentTime = 0;
}

function progress(btn, song) {
  setTimeout(function() {
    var end = song.duration;
    var current = song.currentTime;
    var percent = current / (end / 100);
    //check if song is at the end
    if (current == end) {
      reset(btn, song);
    }
    //set inset box shadow
    btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(237 217 72)"
    //call function again
    progress(btn, song);
  }, 1000);
}
