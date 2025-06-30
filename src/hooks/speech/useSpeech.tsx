import { useEffect, useState } from "react";

type Voice = {
  name: string;
  lang: string;
  voiceURI: string;
};

export function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false);
  const [supported] = useState(typeof window !== "undefined" && "speechSynthesis" in window);
  const [voices, setVoices] = useState<Voice[]>([]);

  // Mock voices for demonstration
  useEffect(() => {
    if (supported) {
      const mockVoices = [
        { name: "Google US English", lang: "en-US", voiceURI: "Google US English" },
        { name: "Google UK English Female", lang: "en-GB", voiceURI: "Google UK English Female" },
        {
          name: "Microsoft Zira - English (United States)",
          lang: "en-US",
          voiceURI: "Microsoft Zira - English (United States)",
        },
      ];
      setVoices(mockVoices);
    }
  }, [supported]);

  const speak = ({
    text,
    voice,
    rate = 1,
    pitch = 1,
  }: {
    text: string;
    voice: Voice;
    rate?: number;
    pitch?: number;
  }) => {
    if (!supported) return;

    setSpeaking(true);
    // Mock speaking duration
    setTimeout(() => setSpeaking(false), 3000);

    console.log("Speaking:", { text, voice, rate, pitch });
  };

  const cancel = () => {
    setSpeaking(false);
    console.log("Speech cancelled");
  };

  return {
    speak,
    cancel,
    speaking,
    supported,
    voices,
  };
}
