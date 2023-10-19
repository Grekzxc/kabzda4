
type OnOffType = {
    value: boolean
}

export const OnOff = (props: OnOffType) => {

    if (props.value === true) {
        return (
            <div style={{ textAlign: 'center' }}>

                <span style={{ width: "60px", height: '30px', backgroundColor: 'green', textAlign: 'center', border: '1px solid black' }}>On</span>
                <span style={{ width: "60px", height: '30px', backgroundColor: 'red', textAlign: 'center', border: '1px solid black' }}>Off</span>
                <span style={{ width: '50px', height: '50px', backgroundColor: 'green', borderRadius: '50%' }}>0</span>
            </div>
        )
    } else {
        return (
            <div style={{ textAlign: 'center' }}>
                <span style={{ width: "60px", height: '30px', backgroundColor: 'green', textAlign: 'center', border: '1px solid black' }}>On</span>
                <span style={{ width: "60px", height: '30px', backgroundColor: 'red', textAlign: 'center', border: '1px solid black' }}>Off</span>
                <span style={{ width: '50px', height: '50px', backgroundColor: 'red', borderRadius: '50%' }}>0</span>
            </div>
        )
    }


}
