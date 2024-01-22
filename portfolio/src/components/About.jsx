import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#6d045b] text-gray-200'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Nice to meet you! I am Monica, feel free to take a look around.</p>
                    </div>
                    <div>
                        <p>I have experience with Java, C programming, Python, Ruby, and OCaml. In a workspace, I will provide logical and efficient solutions using data manipulation skills from business and troubleshooting skills from computer science. Outside of academics, I am actively involved in many dance clubs around the campus, and I love dancing to K-pop, Jazz, and Chinese traditional dance.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About