import { createContext, useContext, useEffect } from 'react'

export interface StatesContextProps {
  state?: string
  playground?: boolean
  customisations?: any
}

export const StatesContext = createContext<StatesContextProps>({
  state: 'enabled'
})
StatesContext.displayName = 'StatesContext'


/**
 * Simulate a state for the Button component. It is used by the client to put the component in a specific state
 */
export const useStates = ({ ref }: { ref: React.RefObject<HTMLElement> }) => {
  const { state, playground, customisations } = useContext(StatesContext)
  console.log('hello', { state, playground })

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
  }, [ref, state, playground, customisations])
}
