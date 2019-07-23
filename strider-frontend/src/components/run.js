import React from 'react'
import { connect } from 'react-redux' 
import { newRun } from '../actions/newRun.js'


const Run = ({name, date, distance, comment, newRun}) => {
    const handleInputChange = event => {
        const { name, value } = event.target 
            const updatedFormInfo = {
                name,
                date,
                distance,
                comment   
            }
            newRun(newRun)

    }

    return(
        <form onSubmit={undefined}>
        <input type='text' value={name} placeholder='name'onChange={handleInputChange} />
        <input type='text' value={date} placeholder='date' onChange={handleInputChange} /> 
        <input type='text' value={distance} placeholder='distance' onChange={handleInputChange} /> 
        <input type='text' value={comment} placeholder='comment' onChange={handleInputChange} /> 
        <input type='submit' value="Log In" />
        </form>
    )
}
// this gives me an argument coming to this component that looks like this:
// {
// name: 'brent'
// password: 'xxy352244'
// }
const mapStateToProps = state => {
    return {
        name: state.newRun.name, 
        date: state.newRun.password,
        distance: state.newRun.distance,
        comment: state.newRun.comment 
    }
}

export default connect(mapStateToProps, { newRun })(Run)