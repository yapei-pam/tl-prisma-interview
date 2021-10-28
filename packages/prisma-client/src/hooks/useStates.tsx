import { createContext, useContext, useEffect } from 'react'

export interface StatesContextProps {
  state?: string
  playground?: boolean
}

export const StatesContext = createContext<StatesContextProps>({ state: 'enabled' })
StatesContext.displayName = 'StatesContext'

export const useStates = ({ ref }: {ref: React.RefObject<HTMLElement> }) => {
  const { state, playground } = useContext(StatesContext)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    element.classList.forEach((x) => {
      if (x.startsWith('sim-')) {
        element.classList.remove(x)
      }
    })
    element.classList.add(`sim-${state}`)
    if (!playground) {
      element.classList.add(`sim-readonly`)
    }
  }, [ref, state, playground])
}
