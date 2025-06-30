import { StopIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { toast } from "react-toastify";

export function SpeechControls({ content }: { content: string }) {
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [yorubaVoices, setYorubaVoices] = useState<SpeechSynthesisVoice[] | null>(null);

  useEffect(() => {
    if (voices.length > 0) {
      const yorubaVoice = voices.filter(
        (voice) =>
          voice.lang.toLowerCase() === "yo" ||
          voice.lang.toLowerCase().includes("yoruba") ||
          voice.name.toLowerCase().includes("yoruba")
      );

      setYorubaVoices(yorubaVoice);

      if (yorubaVoice.length > 0) {
        setSelectedVoice(yorubaVoice[0]);
      } else if (voices.length > 0) {
        setSelectedVoice(voices[0]);
      }
    }
    console.log(voices);
  }, [voices]);

  const handleSpeak = () => {
    if (selectedVoice) {
      speak({
        text: content,
        voice: selectedVoice,
      });
    }
  };

  const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const voiceName = event.target.value;
    const voice = voices.find((v) => v.name === voiceName) || null;

    setSelectedVoice(voice);
  };

  useEffect(() => {
    if (!supported) {
      toast.warning(
        "Speech synthesis is not supported in your browser. Please try a different browser or device."
      );

      return;
    }
  }, []);

  /**
   *  {yorubaVoices?.length === 0 && (
          <p className="text-sm text-amber-600">
            No Yoruba voices found. Using default system voices.
          </p>
        )}
   */

  return (
    <div className="flex items-start gap-2">
      <div className="flex items-center space-x-2">
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          title="Listen to content"
          type="button"
          onClick={handleSpeak}
          disabled={!supported || speaking}
        >
          <span className="sr-only">Speak</span>
          <span className="flex items-center justify-center h-9 w-9 rounded-[5px] bg-lightgoldcolorfive hover:bg-opacity-80 transition-colors">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.83333 3.98867C1.47971 3.98867 1.14057 4.12914 0.890524 4.37919C0.640476 4.62924 0.5 4.96838 0.5 5.322L0.5 10.6553C0.5 11.009 0.640476 11.3481 0.890524 11.5981C1.14057 11.8482 1.47971 11.9887 1.83333 11.9887H3.7L8.5 15.9733V0L3.7 3.98867H1.83333Z"
                fill="#0A0B0E"
              />
              <path
                d="M13.833 7.98867C13.832 7.10494 13.4804 6.25771 12.8555 5.63281C12.2306 5.00792 11.3834 4.65639 10.4997 4.65533H9.83301V5.98867H10.4997C11.0301 5.98867 11.5388 6.19938 11.9139 6.57445C12.289 6.94953 12.4997 7.45824 12.4997 7.98867C12.4997 8.5191 12.289 9.02781 11.9139 9.40288C11.5388 9.77796 11.0301 9.98867 10.4997 9.98867H9.83301V11.322H10.4997C11.3834 11.3209 12.2306 10.9694 12.8555 10.3445C13.4804 9.71963 13.832 8.8724 13.833 7.98867Z"
                fill="#0A0B0E"
              />
              <path
                d="M10.4997 1.98868H9.83301V3.32201H10.4997C11.7374 3.32201 12.9243 3.81368 13.7995 4.68885C14.6747 5.56402 15.1663 6.751 15.1663 7.98868C15.1663 9.22636 14.6747 10.4133 13.7995 11.2885C12.9243 12.1637 11.7374 12.6553 10.4997 12.6553H9.83301V13.9887H10.4997C12.091 13.9887 13.6171 13.3565 14.7423 12.2313C15.8675 11.1061 16.4997 9.57998 16.4997 7.98868C16.4997 6.39738 15.8675 4.87126 14.7423 3.74604C13.6171 2.62082 12.091 1.98868 10.4997 1.98868Z"
                fill="#0A0B0E"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={cancel}
          disabled={!speaking}
          className=" disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="flex items-center justify-center h-9 w-9 rounded-[5px] bg-lightgoldcolorfive hover:bg-opacity-80 transition-colors">
            <StopIcon className="h-5 w-5 fill-black" />
          </span>
        </button>

        {speaking && (
          <div className="flex items-center space-x-2 text-sm text-gray-600 font-satoshi font-medium">
            <div className="animate-pulse w-2 h-2 bg-gray-600 rounded-full"></div>
            <span>Speaking...</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="voice-select" className="block text-sm font-medium text-gray-700 sr-only">
          Voice Selection
        </label>
        <select
          id="voice-select"
          value={selectedVoice?.name || ""}
          onChange={handleVoiceChange}
          className="min-w-[200px] px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {yorubaVoices?.length! > 0 && (
            <optgroup label="Yoruba Voices">
              {yorubaVoices?.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </optgroup>
          )}

          <optgroup label="All Voices">
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    </div>
  );
}
