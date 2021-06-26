import TrendingComponent from "./TrendingComponent"

function PrimarySidebar() {
    // 15 Items in trending
    const trendingStashes = [
        {
            id: 1,
            name: 'Java',
        },
        {
            id: 2,
            name: 'Go',
        },
        {
            id: 3,
            name: 'Python',
        },
        {
            id: 4,
            name: 'ML',
        },
        {
            id: 5,
            name: 'Node',
        },
        {
            id: 6,
            name: 'Express',
        },
        {
            id: 7,
            name: 'Fastify',
        },
        {
            id: 8,
            name: 'Svelte',
        },
        {
            id: 9,
            name: 'NextJS',
        },
        {
            id: 10,
            name: 'React',
        },
        {
            id: 11,
            name: 'Vue',
        },
        {
            id: 12,
            name: 'Deno',
        },
        {
            id: 13,
            name: 'Strapi',
        },
        {
            id: 14,
            name: 'REST API',
        },
        {
            id: 15,
            name: '#C',
        }
    ]
    return (
        <div className=" bg-gray-100 dark:bg-gray-900 rounded-md">
            <div className="p-4">
                <h1 className="font-montserrat text-base font-bold text-black dark:text-white mb-1">
                    Trending Stash⚡📈
                </h1>
                <div className="flex flex-wrap">
                    {trendingStashes.map((data) => {
                        return <div key={data.id}>
                            <TrendingComponent trendingData={data} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default PrimarySidebar
