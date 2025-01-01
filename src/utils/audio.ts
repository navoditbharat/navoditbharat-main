class AudioPlayer {
  private static instance: AudioPlayer;
  private audio: HTMLAudioElement | null = null;
  private context: AudioContext | null = null;
  private buffer: AudioBuffer | null = null;

  private constructor() {
    if (typeof window !== "undefined") {
      this.context = new AudioContext();
    }
  }

  public static getInstance(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }
    return AudioPlayer.instance;
  }

  private async loadSound() {
    if (!this.context || this.buffer) return;

    try {
      const response = await fetch("/startup.mp3");
      const arrayBuffer = await response.arrayBuffer();
      this.buffer = await this.context.decodeAudioData(arrayBuffer);
    } catch (error) {
      console.log("Failed to load audio:", error);
    }
  }

  public async playStartupSound() {
    if (!this.context || this.context.state === "suspended") {
      await this.context?.resume();
    }

    await this.loadSound();

    if (this.context && this.buffer) {
      const source = this.context.createBufferSource();
      source.buffer = this.buffer;
      source.connect(this.context.destination);
      source.start(0);
    }
  }
}

export const audioPlayer = AudioPlayer.getInstance();
