import React from "react"
import { SurveyProvider } from "../Components/SurveyCard/SurveyContext"
import SurveyCard from "../Components/SurveyCard"

export default function App() {
  return (
    <SurveyProvider>
      <SurveyCard />
    </SurveyProvider>
  )
}