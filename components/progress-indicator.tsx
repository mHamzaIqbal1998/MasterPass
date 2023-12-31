"use client"

import React from "react"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#B026FF"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressProvider
