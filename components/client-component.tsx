"use client"

import { useClientSide } from "@/hooks/use-client-side"
import LoadingAnimation from "./loading-animation"

interface WithClientSideProps {
  loadingType?: 'default' | 'card' | 'text' | 'full'
}

export function withClientSide<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { loadingType = 'default' }: WithClientSideProps = {}
) {
  return function WithClientSideComponent(props: P) {
    const isClient = useClientSide()

    if (!isClient) {
      return <LoadingAnimation type={loadingType} />
    }

    return <WrappedComponent {...props} />
  }
}

export default withClientSide