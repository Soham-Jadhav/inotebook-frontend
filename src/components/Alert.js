import React from 'react'

function Alert(props) {
    const capatalize = (word) => {
        if(word === 'danger') word = 'error';
        let txt = word.toLowerCase();
        return (txt[0].toUpperCase() + txt.slice(1));
    }

    return (
        <div className="container" style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.alert.type)}: </strong>{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
