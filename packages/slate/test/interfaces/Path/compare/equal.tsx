import { Path } from '@journalytic/slate'

export const input = {
  path: [0, 1, 2],
  another: [0, 1, 2],
}
export const test = ({ path, another }) => {
  return Path.compare(path, another)
}
export const output = 0
