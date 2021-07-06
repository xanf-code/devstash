
const searchBarAnimation = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    },
    exit: {
        y: -100,
        opacity: 0
    }
}

module.exports = { searchBarAnimation }