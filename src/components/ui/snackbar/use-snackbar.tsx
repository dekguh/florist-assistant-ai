import { useMemo, useRef } from 'react'
import Snackbar from './snackbar'
import classNames from 'classnames'
import { useSnackbarStore } from './snackbar-store'

const UseSnackbar = () => {
  const snackbarRef = useRef(null)
  const snackbarTimeoutRef = useRef<number | null>(null)
  const { callSnackbar, snackbarObject, closeSnackbar } = useSnackbarStore()

  const ElementRootSnackbar = useMemo(() => {
    if (snackbarTimeoutRef.current) clearTimeout(snackbarTimeoutRef.current)
    snackbarTimeoutRef.current = setTimeout(() => {
      closeSnackbar()
    }, snackbarObject.timeout)

    return (
      <div
        className={classNames(
          'fixed -right-[100%] top-[24px] z-[1000] transition-all duration-400',
          { 'right-[24px]': snackbarObject.open }
        )}
      >
        <Snackbar
          ref={snackbarRef}
          title={snackbarObject.title}
          message={snackbarObject.message}
          variant={snackbarObject.variant}
          onCloseClick={() => closeSnackbar()}
        />
      </div>
    )
  }, [
    snackbarObject.message, snackbarObject.title,
    snackbarObject.open, snackbarObject.variant,
    snackbarObject.timeout, closeSnackbar
  ])

  return { ElementRootSnackbar, callSnackbar }
}

export default UseSnackbar