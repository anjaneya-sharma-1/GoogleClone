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
  const [isSupported, setIsSupported] = useState(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("webkitSpeechRecognition" in window) {
        setIsSupported(true)
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
        const recognition = new SpeechRecognition()

        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = "en-US"

        recognition.onstart = () => {
          setIsListening(true)
        }

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript
          onResult(transcript)
          setIsListening(false)
        }

        recognition.onerror = (event) => {
          setIsListening(false)
          onError?.(event.error)
        }

        recognition.onend = () => {
          setIsListening(false)
        }

        recognitionRef.current = recognition
      } else {
        setIsSupported(false)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }
    }
  }, [onResult, onError])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
    }
  }

  return {
    isListening,
    startListening,
    stopListening,
    isSupported,
  }
}
