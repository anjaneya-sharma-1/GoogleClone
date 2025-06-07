declare global {
  interface Window {
    webkitSpeechRecognition: any
    SpeechRecognition: any
  }
}

export interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList
}

export interface SpeechRecognitionErrorEvent {
  error: string
}
