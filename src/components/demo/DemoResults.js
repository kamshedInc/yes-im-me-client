/* ------------ main imports ------------ */
import React from 'react'


/* ------------ other imports ------------ */


/* ------------ styles ------------ */
import './DemoResults.css'


function DemoResults(props) {
    console.log(props)
    return (
        <div id="demo-results" className={`demoResults${props.props ? "" : " hidden"}`} name="DemoResults">
            <div className="resultsContianer">
                <p className="resultsLoading">Loading...</p>
            </div>
            
        </div>
    )
}

export default DemoResults