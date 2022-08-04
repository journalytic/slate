import { RefObject, useState } from 'react'
import { useSlateStatic } from '../use-slate-static'
import { IS_ANDROID } from '../../utils/environment'
import { EDITOR_TO_FLUSH_CHANGES } from '../../utils/weak-maps'
import {
  createAndroidInputManager,
  CreateAndroidInputManagerOptions,
} from './android-input-manager'
import { useIsMounted } from '../use-is-mounted'
import { useMutationObserver } from '../use-mutation-observer'

type UseAndroidInputManagerOptions = {
  node: RefObject<HTMLElement>
} & Omit<
  CreateAndroidInputManagerOptions,
  'editor' | 'onUserInput' | 'receivedUserInput'
>

const MUTATION_OBSERVER_CONFIG: MutationObserverInit = {
  subtree: true,
  childList: true,
  characterData: true,
}

export function useAndroidInputManager({
  node,
  ...options
}: UseAndroidInputManagerOptions) {
  if (!IS_ANDROID) {
    return null
  }

  const editor = useSlateStatic()
  const isMounted = useIsMounted()

  const [inputManager] = useState(() =>
    createAndroidInputManager({
      editor,
      ...options,
    })
  )

  useMutationObserver(
    node,
    inputManager.handleDomMutations,
    MUTATION_OBSERVER_CONFIG
  )

  EDITOR_TO_FLUSH_CHANGES.set(editor, inputManager.flush)
  if (isMounted) {
    inputManager.flush()
  }

  return inputManager
}
