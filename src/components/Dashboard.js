import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';

class Dashboard extends Component {

    state = {
        'questionsToShow': 'unanswered',
        'activeTab': 'unanswered'
    };

    handleTabChange = (e, tab) => {
        this.setState(() => ({
            questionsToShow: tab,
            activeTab: tab
        }));
    };

    render() {
        const {questionsToShow, activeTab} = this.state;

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='center'>
                                    <button type='button'
                                            className={"btn btn-info " + (activeTab === 'unanswered' ? 'active' : null)}
                                            onClick={(e) => this.handleTabChange(e, 'unanswered')}>Unanswered
                                        Questions
                                    </button>
                                    <button type='button'
                                            className={"btn btn-info " + (activeTab === 'answered' ? 'active' : null)}
                                            onClick={(e) => this.handleTabChange(e, 'answered')}>Answered
                                        Questions
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                           { console.log("ques id")}
                                {this.props.questionIds.map((id) => {
                                    { console.log("ques id not null")}
                                    return (
                                        <Question key={id} id={id}
                                                  questionsToShow={questionsToShow}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions=[]}) {
    console.log("sowmya")
    console.log({questions})
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);