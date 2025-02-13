import React from "react";

export default function About(props) {

    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white',
    
    // })
    
    // const[BtnText,setBtnText]=useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color === 'black')
    //     {
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
        
    // }
    

  return (

    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1 className="my-3">About Us </h1>
      <div className="accordion"  id="accordionExample" >
        <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',color: props.mode==='dark'? 'white':'black'}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',
                color: props.mode==='dark'? 'white':'black'}}
            >
              <strong>About the Developer</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  >
              <p>Hello to the users visiting the website .This is the first website made by me ,hope you will like it.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',color: props.mode==='dark'? 'white':'black'}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',
                color: props.mode==='dark'? 'white':'black'}}
            >
              <strong>Complaint</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
             <p>If you face any kind of problem on the website than please share your views in the feedback box.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',color: props.mode==='dark'? 'white':'black'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',
                color: props.mode==='dark'? 'white':'black'}}
            >
              <strong>Feedback</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              Give your precious feedback here.<br/>
              <input type="Textbox" id="myBox" rows="8"  style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',
                color: props.mode==='dark'? 'white':'black'}}/>
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{BtnText}</button>
      </div> */}
    </div>
  );
}
