import React, {Component} from 'react'
import styled from 'styled-components'

const MILLISECONDS_PER_MINUTE =   1 * (1000 * 60)
const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60
const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24
const MILLISECONDS_PER_WEEK = MILLISECONDS_PER_DAY * 7

const TimeContainer = styled.span`
    color: gray;
`

class TimePassed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timePassed: null
        }
    }

    getTimePassed = (createdAt) => {
        const today = Date.now()
        const createdDate = Date.parse(createdAt)
        const timePassed = today - createdDate
    
        const weeksPassed = Math.floor(timePassed/ MILLISECONDS_PER_WEEK)
        const daysPassed = Math.floor(timePassed/ MILLISECONDS_PER_DAY)
        const hoursPassed = Math.floor(timePassed/ MILLISECONDS_PER_HOUR)
        const minutesPassed = Math.floor(timePassed/ MILLISECONDS_PER_MINUTE)
        if(weeksPassed >= 1) return `${weeksPassed}w`
        if(daysPassed >= 1) return `${daysPassed}d`
        if(hoursPassed >= 1) return `${hoursPassed}h`
        return `${minutesPassed}m`
    }

    componentDidMount() {
        this.setState({timePassed: this.getTimePassed(this.props.createdAt)})
    }
    render(){
        return(
            <TimeContainer>{this.getTimePassed(this.props.createdAt)}</TimeContainer>
        )
    }
}

export default TimePassed