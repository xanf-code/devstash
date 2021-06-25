
function ComponentLayout({ children }) {
    return (
        <div
            className='selection:bg-purple selection:text-white'
        >
            <div className="flex">
                <div className="h-screen hidden max-w-xs w-full xl:block"></div>
                <div className="items-center pt-4 lg:pt-8 px-6 lg:px-4 mx-auto">
                    <div className="w-full mx-auto text-center lg:w-8/12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentLayout