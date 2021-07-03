import themeStore from "../../store/darkMode";
import Sheet from 'react-modal-sheet';
import NavButtons from "../Buttons/NavButtons";

function Modal({ show, setShow, menu, sheetTrigger }) {

    const dark = themeStore(state => state.dark);

    return (
        <Sheet isOpen={show} onClose={() => setShow(false)} snapPoints={[150]}>
            <Sheet.Container style={{
                backgroundColor: `${dark ? '#151617' : '#fafafa'}`
            }}>
                <Sheet.Content>
                    <div className="p-1">
                        {menu.map(ind => {
                            return (
                                <div key={ind.name} onClick={() => sheetTrigger(ind.value)} className="p-1">
                                    <div className={`rounded-md ${ind.active === ind.value ? 'bg-[#e3edf9] dark:bg-[#272729]' : ''}`}>
                                        <NavButtons data={ind} name={ind.light} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onClick={() => setShow(false)} />
        </Sheet>
    )
}

export default Modal
