import { Path } from '@journalytic/slate'

const path = [3, 3, 3]
const op = {
  type: 'move_node',
  path: [2],
  newPath: [3],
}
export const test = () => {
  return Path.transform(path, op)
}
export const output = [2, 3, 3]
