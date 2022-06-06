import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, act, screen, waitFor, getByRole } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import themeOneStyles from '@tl-prisma/theme-one'
import Button from '../Button'

jest.useFakeTimers()

/**
 * Helper function to wait for all pending promises to complete.
 * This relies on the functionality of setImmediate, which executes a callback once
 * the browser has completed all other operations such as events / display updates.
 */
export const flushPromises = () => new Promise(setImmediate)

describe('<Button>', () => {
  const defaultProps = {
    onClick: jest.fn(),
    label: 'Submit'
  }
  const theme = themeOneStyles.default

  it('should render a basic button', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    )
    jest.runOnlyPendingTimers()
    expect(queryByText('Submit')).toBeTruthy()
  })

  it.only('calls correct function on click', async () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button
          {...defaultProps}
        />
      </ThemeProvider>
    )
    const button = getByRole('button')


    act(() => {
      fireEvent.click(button)
    })

    expect(defaultProps.onClick).toHaveBeenCalled()
    expect(button).toBeDisabled()
  })

  it('should prevent clicks on a disabled button', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant='theme1' disabled {...defaultProps} />
      </ThemeProvider>
    )
    fireEvent.click(getByText(defaultProps.label))
    jest.runOnlyPendingTimers()
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })

  it('should prevent double clicks', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant='theme1' {...defaultProps} />
      </ThemeProvider>
    )
    act(() => jest.advanceTimersByTime(1000))
    fireEvent.click(getByText(defaultProps.label))
    fireEvent.click(getByText(defaultProps.label))
    jest.runOnlyPendingTimers()
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

})
