import { useEffect, useRef, useState } from "react";

function ThemeMusic() {
  const audioContextRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);
  const startedRef = useRef(false);

  const [enabled, setEnabled] = useState(false);

  const createMusic = () => {
    if (startedRef.current) return;

    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const context = new AudioContext();

    const master = context.createGain();
    master.gain.value = 0.0001;
    master.connect(context.destination);

    audioContextRef.current = context;
    masterGainRef.current = master;

    startedRef.current = true;

    const notes = [
      146.83, // D3
      174.61, // F3
      220.0,  // A3
      261.63, // C4
      220.0,
      174.61,
      196.0,  // G3
      146.83,
    ];

    let index = 0;

    const playNote = () => {
      if (!audioContextRef.current) return;

      const now = context.currentTime;
      const frequency = notes[index % notes.length];

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(frequency, now);

      filter.type = "lowpass";
      filter.frequency.value = 1100;
      filter.Q.value = 0.7;

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.045, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.15);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      oscillator.start(now);
      oscillator.stop(now + 1.2);

      index++;
    };

    playNote();

    intervalRef.current = setInterval(playNote, 900);
  };

  const toggleMusic = async () => {
    createMusic();

    const context = audioContextRef.current;
    const master = masterGainRef.current;

    if (!context || !master) return;

    if (context.state === "suspended") {
      await context.resume();
    }

    if (!enabled) {
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.linearRampToValueAtTime(
        0.22,
        context.currentTime + 0.8
      );

      setEnabled(true);
    } else {
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.linearRampToValueAtTime(
        0.0001,
        context.currentTime + 0.5
      );

      setEnabled(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <button
      type="button"
      className={`theme-music-toggle ${
        enabled ? "music-active" : ""
      }`}
      onClick={toggleMusic}
      aria-label={enabled ? "Mute theme music" : "Play theme music"}
      title={enabled ? "Mute theme music" : "Play theme music"}
    >
      <span className="music-icon">
        {enabled ? "♫" : "♪"}
      </span>

      <span className="music-label">
        {enabled ? "THEME ON" : "THEME"}
      </span>

      <span className="music-bars">
        <i />
        <i />
        <i />
      </span>
    </button>
  );
}

export default ThemeMusic;
