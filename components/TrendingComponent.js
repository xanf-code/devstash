export default function TrendingComponent({ trendingData }) {
    return (
        <div className='px-1 py-1 m-0.5 rounded-[5px] bg-[#e3edf9] dark:bg-[#151617] lg:cursor-pointer hover:-translate-y-0.5'>
            <h1 className=" px-2 py-0.5 text-[#5790cf] font-poppins text-xs font-medium leading-relaxed tracking-wide">
                #{trendingData.tag.toUpperCase()}
            </h1>
        </div>
    )
}