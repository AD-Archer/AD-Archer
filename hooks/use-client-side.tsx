"use client"

import { useState, useEffect } from 'react'

/**
 * A hook that returns whether the code is running on the client side.
 * Useful for components that need to render differently on server and client.
 * 
 * @returns {boolean} - True if running on client, false during SSR
 */
export function useClientSide() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}