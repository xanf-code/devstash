function TrendingComponent({ trendingData }) {
    return (
        <div className="px-1 py-1 cursor-pointer hover:-translate-y-0.5">
            <div className="bg-[#8739F9] rounded-md">
                <h1 className="font-poppins font-base text-[#fff] px-2 py-0.5">{trendingData.name}</h1>
            </div>
        </div>
    )
}

export default TrendingComponent
