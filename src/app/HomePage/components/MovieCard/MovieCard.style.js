//=========================
// STYLES
//=========================
const styles = {
    base: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '300px',
        height: '169px',
        fontSize: '18px',
        color: '#f5f5f5',
        opacity: '0.6',
        transition: 'transform 300ms ease-in',
        ':hover': {
            zIndex: '1',
            opacity: '1',
            fontSize: '22px',
            transform: 'scale(1.2)',
        }
    },
    hidden: {
        opacity: '0',
        transform: 'scale(0.7)',
        visibility: 'hidden'
    }
};

//=========================
// EXPORTS
//=========================
export default styles;