import React from 'react'

const Entry = ({ title, body}) => {
    return (
        <a className="absolute w-90 h-60 block p-8 border border-gray-100 bg-rose-100 rounded-xl" href="">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>

            <div className="mt-4 text-gray-500 sm:pr-8">
                <h1 className="mt-4 text-xl font-bold text-gray-900">{title}</h1>
                <p className="hidden mt-2 text-sm sm:block">
                    {body}
                </p>
            </div>
        </a>
    )
}

export default Entry