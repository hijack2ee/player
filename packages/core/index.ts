import Player from "./models/Player";

const EXAMPLE_DASH_URL =
  "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
const EXAMPLE_HLS_URL = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
const EXMPLAE_MP4_URL =
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4";

// DOM elements
const $videoForDash = document.getElementById(
  "videoForDash"
)! as HTMLMediaElement;
const $playButtonForDash = document.getElementById("playButtonForDash")!;
const $pauseButtonForDash = document.getElementById("pauseButtonForDash")!;
const $muteButtonForDash = document.getElementById("muteButtonForDash")!;
const $unmuteButtonForDash = document.getElementById("unmuteButtonForDash")!;

const $videoForHLS = document.getElementById(
  "videoForHLS"
)! as HTMLMediaElement;
const $playButtonForHLS = document.getElementById("playButtonForHLS")!;
const $pauseButtonForHLS = document.getElementById("pauseButtonForHLS")!;
const $muteButtonForHLS = document.getElementById("muteButtonForHLS")!;
const $unmuteButtonForHLS = document.getElementById("unmuteButtonForHLS")!;

const $videoForMP4 = document.getElementById(
  "videoForMP4"
)! as HTMLMediaElement;
const $playButtonForMP4 = document.getElementById("playButtonForMP4")!;
const $pauseButtonForMP4 = document.getElementById("pauseButtonForMP4")!;
const $muteButtonForMP4 = document.getElementById("muteButtonForMP4")!;
const $unmuteButtonForMP4 = document.getElementById("unmuteButtonForMP4")!;

document.addEventListener("DOMContentLoaded", () => {
  const dashPlayer = new Player($videoForDash);
  dashPlayer.initialize(EXAMPLE_DASH_URL);
  dashPlayer.on('loadedmetadata', () => {
    dashPlayer.currentTime(150);
  });

  $playButtonForDash.addEventListener("click", () => dashPlayer.play());
  $pauseButtonForDash.addEventListener("click", () => dashPlayer.pause());
  $muteButtonForDash.addEventListener("click", () => {
    dashPlayer.mute(true);
  });
  $unmuteButtonForDash.addEventListener("click", () => {
    dashPlayer.mute(false);
  });

  const hlsPlayer = new Player($videoForHLS);
  hlsPlayer.initialize(EXAMPLE_HLS_URL);
  hlsPlayer.on('loadedmetadata', () => {
    hlsPlayer.currentTime(150);
  });

  $playButtonForHLS.addEventListener("click", () => hlsPlayer.play());
  $pauseButtonForHLS.addEventListener("click", () => hlsPlayer.pause());
  $muteButtonForHLS.addEventListener("click", () => {
    hlsPlayer.mute(true);
  });
  $unmuteButtonForHLS.addEventListener("click", () => {
    hlsPlayer.mute(false);
  });

  const mp4Player = new Player($videoForMP4);
  mp4Player.initialize(EXMPLAE_MP4_URL);
  mp4Player.on('loadedmetadata', () => {
    mp4Player.currentTime(5);
  });

  $playButtonForMP4.addEventListener("click", () => mp4Player.play());
  $pauseButtonForMP4.addEventListener("click", () => mp4Player.pause());
  $muteButtonForMP4.addEventListener("click", () => {
    mp4Player.mute(true);
  });
  $unmuteButtonForMP4.addEventListener("click", () => {
    mp4Player.mute(false);
  });
});
