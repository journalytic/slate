import { Path } from '@journalytic/slate'

export const input = {
  path: [0, 1, 2],
  another: [0],
}
export const test = ({ path, another }) => {
  return Path.relative(path, another)
}
export const output = [1, 2]
