import { BaseRange, BaseText } from '@journalytic/slate'
import { ReactEditor } from './plugin/react-editor'

declare module '@journalytic/slate' {
  interface CustomTypes {
    Editor: ReactEditor
    Text: BaseText & {
      placeholder?: string
    }
    Range: BaseRange & {
      placeholder?: string
    }
  }
}
