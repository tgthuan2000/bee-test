import { useEffect, useState } from 'react'

export function useMediaQuery(query = '') {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        const handler = () => {
            setMatches(matchMedia.matches)
        }

        matchMedia.addEventListener('change', handler)

        return () => {
            matchMedia.removeEventListener('change', handler)
        }
    }, [query])

    return matches
}

export function useMd() {
    const matches = useMediaQuery('(min-width:768px)')

    return matches
}
