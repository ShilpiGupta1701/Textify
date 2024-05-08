import React, {useState} from 'react'

export default function TextForm(props) {
     const handleUpClick =() =>{
        // console.log("Uppercase was clicked"+ text );
        let newText=text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
     }

     const handleLoClick =() =>{
        // console.log("Uppercase was clicked"+ text );
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
     }

     const handleCopy =()=>{
           var text=document.getElementById("exampleFormControlTextarea1");
           text.select();
           navigator.clipboard.writeText(text.value);
           props.showAlert("Text copied successfully!","success");
     }

     const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed successfully!","success");
     }

     const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
     }

    const [text,setText]=useState('');

    return (
        <>
            <div className='container' style={{color: props.mode === 'light'? 'black': 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? '#262c4c': 'white',color: props.mode === 'light'? 'black': 'white' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{color: props.mode === 'light'? 'black': 'white'}}>
                <h1>Your Text summary</h1>
                <p>
                   {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 *text.split(" ").length } Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"enter something in text box to preview it here"}</p>
            </div>
        </>
    )
}
