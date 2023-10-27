import dashjs from "dashjs";
import Hls from "hls.js";

interface PlayerInterface {
  initialize(src: string): void;
  play(): Promise<void>;
  pause(): void;
  mute(muted: boolean): void;
  on(event: keyof HTMLElementEventMap, callback: EventListener): void;
}

class Player implements PlayerInterface {
  private mediaElement: HTMLMediaElement;
  private prototype: dashjs.MediaPlayerClass | Hls | HTMLMediaElement;

  constructor(element: HTMLMediaElement) {
    this.mediaElement = element;
  }

  initialize(src: string): void {
    if (/.mpd/.test(src) && dashjs.supportsMediaSource()) {
      this.prototype = dashjs.MediaPlayer().create();
      this.prototype.initialize(this.mediaElement, src, false);
      return;
    }
    if (/.m3u8/.test(src) && Hls.isSupported()) {
      this.prototype = new Hls();
      this.prototype.attachMedia(this.mediaElement);
      this.prototype.loadSource(src);
      return;
    }
    this.prototype = this.mediaElement;
    this.prototype.src = src;
  }

  play(): Promise<void> {
    return this.mediaElement.play();
  }

  pause(): void {
    this.mediaElement.pause();
  }

  mute(muted: boolean): void {
    this.mediaElement.muted = muted;
  }

  currentTime(time: number): void {
    this.mediaElement.currentTime = time;
  }
  
  on(event: keyof HTMLMediaElementEventMap, callback: EventListener): void {
    this.mediaElement.addEventListener(event, callback);
  }
}

export default Player;
