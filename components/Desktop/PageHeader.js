import NavButtons from '../Buttons/NavButtons'

function PageHeader({ menu, onTrigger }) {
    return (
        <div className="ml-4 flex lg:float-right">
            {menu.map(ind => {
                return <div key={ind.name} onClick={() => onTrigger(ind.value)} className="lg:cursor-pointer m-auto lg:m-0 ">
                    <div className={`m-2 hover:bg-[#e3edf9] dark:hover:bg-[#272729] lg:cursor-pointer rounded-md ${ind.active === ind.value ? 'bg-[#e3edf9] dark:bg-[#272729]' : ''}`}>
                        <NavButtons data={ind} name={ind.light} />
                    </div>
                </div>
            })}
        </div>
    )
}

export default PageHeader
