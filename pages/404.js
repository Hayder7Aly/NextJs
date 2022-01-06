import { useRouter } from 'next/dist/client/router'
import React from 'react'

const NotFoundPage = () => {
    const {push} = useRouter()
    return (
        <>
        <h1>Costum Page for 404 Error</h1>
        <button onClick={() => push('/')}>Go to Home</button>

        </>
    )
}

export default NotFoundPage
