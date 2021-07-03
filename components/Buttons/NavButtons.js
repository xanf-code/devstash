import Icons from "../SVGComponent/Icons"

function NavButtons({ data, name }) {
    return (
        <div className="px-2 py-2 flex">
            <Icons name={name} />
            <h1 className="self-center ml-2 text-[#5790cf] font-poppins text-sm font-medium">{data.name}</h1>
        </div>
    )
}

export default NavButtons
