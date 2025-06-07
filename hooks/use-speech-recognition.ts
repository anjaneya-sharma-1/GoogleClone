"use client"

import { useState, useEffect, useRef } from "react"

interface UseSpeechRecognitionProps {
  onResult: (transcript: string) => void
  onError?: (error: string) => void
}

interface UseSpeechRecognitionReturn {
  isListening: boolean
  startListening: () => void
  stopListening: () => void
  isSupported: boolean
}

export function useSpeechRecognition({ onResult, onError }: UseSpeechRecognitionProps): UseSpeechRecognitionReturn {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()

        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = "en-US"

        recognition.onstart = () => {
          setIsListening(true)
        }

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          onResult(transcript)
          recognition.stop()
        }

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error)
          setIsListening(false)
          if (onError) {
            onError(event.error)
          }
        }

        recognition.onend = () => {
          setIsListening(false)
        }

        recognitionRef.current = recognition
      } else {
        setIsSupported(false)
        console.error("Speech Recognition API is not supported in this browser")
      }
    }
  }, [onResult, onError])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start()
      } catch (error) {
        console.error("Error starting speech recognition:", error)
        setIsListening(false)
      }
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.stop()
      } catch (error) {
        console.error("Error stopping speech recognition:", error)
      }
      setIsListening(false)
    }
  }

  return {
    isListening,
    startListening,
    stopListening,
    isSupported,
  }
}
