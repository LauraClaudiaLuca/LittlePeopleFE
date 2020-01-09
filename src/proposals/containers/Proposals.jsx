import React from 'react'
import { connect } from 'react-redux'
import WeekSideBar from '../components/WeekSideBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProposalsList from './ProposalList'
import { loadProposals } from '../actions'

class Proposals extends React.Component {

    componentDidMount() {
        this.props.loadProposals()
    }

    render() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let currentDate = new Date()
        let currentDay = days[currentDate.getDay()]
        console.log(currentDay);
        
        return (
            <BrowserRouter>
                <div className="proposals-wrapper">
                    <WeekSideBar />

                    <Switch>
                        <Route 
                            exact path="/proposals/:day" 
                            render={ props => 
                                <ProposalsList 
                                    day={props.match.params.day} 
                                    proposals = {this.props.proposals} /> } />
                    </Switch>
                    
                </div>
            </BrowserRouter>
            
        )
    }
}

const mapStateToProps = state => ({
    proposals: state.proposalsReducer.proposals
})

const mapDispatchToProps = dispatch => ({
    loadProposals: () => dispatch(loadProposals())
})

export default connect(mapStateToProps, mapDispatchToProps)(Proposals)