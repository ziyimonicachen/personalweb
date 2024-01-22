import React from 'react'

const Experience = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#6d045b] text-gray-200'>
            <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-gray-500'>Experience</p>
                    <p className='py-6'>// Check out some experiences I have!</p>
                </div>

                {/* container for experiences */}
                <div className='w-full flex flex-col justify-center gap-8 text-left'>
                    {/* Technica */}
                    <div className='hover:scale-110 duration-500'>
                        <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
                            Technica - Hackathon
                        </h1>
                        <h2 className='text-sm font-bold border-b-4 border-gray-500 py-2 px-4'>
                            Hacker; October 2023
                        </h2>
                        <p className='text-sm py-2 px-4'>
                            • Build a visually pleasing user interface for EcoScan, an app that helps users categorize their waste and educate users on sustainability, within the 24-hour hackathon time limit using Figma. <br />
                            • Master Figma by navigating through pages and frames, moving objects between layers to create components, and learning animation through the assistance of plugins. <br />
                        </p>
                        <h2 className='text-sm font-bold border-b-4 border-gray-500 py-2 px-4'>
                            Hacker; October 2022
                        </h2>
                        <p className='text-sm py-2 px-4'>
                            • Programmed a positive, encouraging app named Motivate Me! in 12 hours that keeps track of users’ ideas and achievements, and reminds them they are worthy when they feel unmotivated. <br />
                            • Attended several workshops that involved app development, AWS, and UI/UX Design to gain a better understanding. <br />
                        </p>

                    </div>
                    {/* GGWB */}
                    <div className='hover:scale-110 duration-500'>
                        <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
                            GGWB - Dance Club
                        </h1>
                        <h2 className='text-sm font-bold border-b-4 border-gray-500 py-2 px-4'>
                            Treasurer; May 2022 - May 2023
                        </h2>
                        <p className='text-sm py-4 px-4'>
                            • Analyzed and decided ultimately on all financial requests affecting club activities of 50+ active members.<br />
                            • Hosted an annual, large-scale K-pop dance competition and raised funding that doubled the club’s existing funds.<br />
                            • Facilitated biweekly executive board meetings and utilized spreadsheets to record transactions and financial plans.<br />
                        </p>
                    </div>
                    {/* Movie Theater */}
                    <div className='hover:scale-110 duration-500'>
                        <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
                            Cinepolis Luxury Cinemas
                        </h1>
                        <h2 className='text-sm font-bold border-b-4 border-gray-500 py-2 px-4'>
                            Server; July 2022 - September 2022
                        </h2>
                        <p className='text-sm py-4 px-4'>
                            • Communicated in a friendly and professional manner to guests and took orders swiftly and accurately.<br />
                            • Mastered the Point of Sales system and memorized concession, kitchen, and drinks menus.<br />
                            • Was prepared to handle any unforeseen situation and be empathetic toward guests to ensure a phenomenal experience.<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience