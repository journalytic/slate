import { Path } from '@journalytic/slate'

export const input = {
  path: [0],
  another: [0, 2],
}
export const test = ({ path, another }) => {
  return Path.endsBefore(path, another)
}
export const output = false
