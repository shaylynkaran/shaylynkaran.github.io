var trackUrl;
var streamUrl;
var clientId = '1745017edcfeb72a175c95614a1cc212';
var songId;
var songTitle;
var songArtist;

SC.initialize({
  client_id: clientId
});

var audio = new Audio();
audio.crossOrigin = "anonymous";

var c = document.getElementById("myCanvas");
var canvasCtx = c.getContext("2d");
var c2 = document.getElementById("canvas2");
var canvasCtx2 = c2.getContext("2d");

var ctx = new AudioContext();
var audioSrc = ctx.createMediaElementSource(audio);
var analyser = ctx.createAnalyser();
analyser.fftSize = 1024;
var bufferLength = analyser.fftSize;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);
audioSrc.connect(analyser);
audioSrc.connect(ctx.destination);
var frequencyData = new Uint8Array(analyser.frequencyBinCount);

var analyser2 = ctx.createAnalyser();
analyser2.fftSize = 1024;
var bufferLength2 = analyser2.fftSize;
var dataArray2 = new Uint8Array(bufferLength2);
analyser2.getByteTimeDomainData(dataArray2);
audioSrc.connect(analyser2);
audioSrc.connect(ctx.destination);
var frequencyData2 = new Uint8Array(analyser2.frequencyBinCount);

function stopSoundcloud() {
  audio.pause();
  audio.currentTime = 0;
  stopDrawing = true;
  canvasCtx.canvas.width = canvasCtx.canvas.width
}

var fps = 60;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;
var WIDTH = c.width;
var HEIGHT = c.height;
var joyInterval = 12;
var joyCount = 0;
var stopDrawing = false;

function playSoundcloud() {
  stopSoundcloud()
  stopDrawing = false;
  trackUrl = $("#trackUrl").val();
  $.get('https://api.soundcloud.com/resolve.json?url=' + trackUrl + '&client_id=' + clientId,
    function(result) {
      songId = result.id;
      songTitle = result.title;
      songArtist = result.user.username;
      songDescription = result.description;

      $('#artist').html(songArtist);
      $('#song').html(songTitle);
      $('#description').html(songDescription);

      streamUrl = result.stream_url;
      audio.src = streamUrl + "/?client_id=" + clientId;
      audio.play();
    }
  );

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    // update data in frequencyData
    now = Date.now();
    delta = now - then;

    if (delta > interval && stopDrawing == false) {
      then = now - (delta % interval);
      if (joyCount < joyInterval) {
        // ... Code for Drawing the Frame ...

        // #1
        analyser.getByteFrequencyData(frequencyData);
        analyser.getByteTimeDomainData(dataArray);
        canvasCtx.strokeStyle = 'rgb(210, 210, 210)';
        canvasCtx.beginPath();

        var sliceWidth = WIDTH / bufferLength * 2;
        var x = 0;
        for (var i = 0; i < bufferLength; i++) {
          var v = dataArray[i] / 128;
          var y = (v * (HEIGHT) / 10);
          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }
          x += sliceWidth * 1;
        }
        canvasCtx.translate(0, 10);

        canvasCtx.lineWidth = 2;

        canvasCtx.lineTo(WIDTH, HEIGHT * 1.5);
        canvasCtx.stroke();
        canvasCtx.closePath();

        // #2
        analyser2.getByteFrequencyData(frequencyData2);
        analyser2.getByteTimeDomainData(dataArray2);

        canvasCtx2.strokeStyle = 'rgb(0, 0, 0)';
        canvasCtx2.canvas.width = canvasCtx2.canvas.width;
        canvasCtx2.beginPath();

        var sliceWidth = WIDTH / bufferLength * 2;
        var x = 0;
        for (var i = 0; i < bufferLength; i++) {
          var v = dataArray[i] / 128;
          var y = (v * (HEIGHT) / 2);
          if (i === 0) {
            canvasCtx2.moveTo(x, y);
          } else {
            canvasCtx2.lineTo(x, y);
          }
          x += sliceWidth * 1;
        }
        canvasCtx2.lineWidth = 5;

        canvasCtx2.lineTo(WIDTH, HEIGHT * 1.5);
        canvasCtx2.stroke();
        canvasCtx2.closePath();

        joyCount++;
      } else {
        canvasCtx.canvas.width = canvasCtx.canvas.width
        joyCount = 0;
      }
    }
    // render frame based on values in frequencyData
    //console.log(frequencyData)
  }
  renderFrame();
  WIDTH = c.width;
  HEIGHT = c.height;
}