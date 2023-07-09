import { useEffect, useRef } from 'react'

export function useClickOutside(callback) {
    const callbackRef = useRef(callback)
    const ref = useRef()

    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            callbackRef.current?.()
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [])

    return ref
}
