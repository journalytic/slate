import { Path } from '@journalytic/slate'

export const input = {
  path: [0],
  another: [0, 1],
}
export const test = ({ path, another }) => {
  return Path.equals(path, another)
}
export const output = false
