import { Meta, StoryObj } from '@storybook/react'
import { Quantity } from '../lib/Quantity'

const meta = {
  title: 'Cart/Quantity',
  component: Quantity
} satisfies Meta<typeof Quantity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MinMax: Story = {
  args: {
    num: 5,
    min: 1,
    max: 10
  }
}

export const Min: Story = {
  args: {
    num: 5,
    min: 1
  }
}

export const Max: Story = {
  args: {
    num: 5,
    max: 10
  }
}
