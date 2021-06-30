
function ComponentLayout({ children }) {
    return (
        <div className="items-center pt-4 lg:pt-0 px-6 lg:px-0 m-auto">
            <div className="w-full mx-auto text-center lg:w-6/12">
                {children}
            </div>
        </div>
    )
}

export default ComponentLayout