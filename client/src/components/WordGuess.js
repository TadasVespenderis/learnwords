import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import time from '../img/time.png';
import {ADD_STATS} from "../actions/types";

class WordGuess extends React.Component {

    state = {
        newArray: [],
        activeEnWord: '',
        rightLtWord: '',
        rightWords: [''],
        goodCount: 0,
        badCount: 0,
        message: '',
        animate: false
    };

    componentWillMount() {
        if (this.props.words.length > 0) {
            const guesingWord = this.props.words[Math.round(Math.random() * (this.props.words.length - 1))];
            this.setState({activeEnWord: guesingWord.enWord});
            this.setState({rightLtWord: guesingWord.ltWord});
            this.setState({newArray: this.props.words});
        } else {
            this.setState({message: 'Nothing to learn'});
        }
    };

    shuffleGuessingWord() {
        const guesingWord = this.props.words[Math.round(Math.random() * (this.props.words.length - 1))];
        this.setState({activeEnWord: guesingWord.enWord});
        this.setState({rightLtWord: guesingWord.ltWord});
    };

    click = (item) => {

        if (item.enWord === this.state.activeEnWord) {
            this.props.addStats({word: this.state.activeEnWord, right: 1, wrong: 0 });
            this.setState(prevState => {
                return {goodCount: prevState.goodCount + 1}
            });
        } else {
            this.props.addStats({word: this.state.activeEnWord, right: 0, wrong: 1 });
            this.state.rightWords.push(this.state.rightLtWord);
            this.setState ({animate: true});
            this.setState(prevState => {
                return {
                    badCount: prevState.badCount + 1
                }
            });
        }

        this.shuffleAnswers();
        this.shuffleGuessingWord();
    };

    shuffleAnswers() {
        let allLength = this.props.words.length;
        for (let x = 0; x < allLength; x++) {
            let s = Math.floor(Math.random() * this.props.words.length);
            this.state.newArray.push(this.props.words[s]);
            this.props.words.splice(s, 1);
        }
    };

    removeAnimate () {
        this.setState ({animate: false})
    };

    render() {

        const show = this.state.newArray.map((item, i)=> {
            return <li key={i}
            onClick={()=>this.click(item, i)}
            >{item.ltWord}</li>
        });

        return (
            <div className="wordguess">
                {this.props.words.length === 0 ? '' :
                    <div className="newword">
                        <p>New word</p>
                        <h2>{this.state.activeEnWord}</h2>
                    </div>
                }
                {this.props.words.length === 0 ? '' :
                    <div className="rightanswer">
                        <p>Choose right translation</p>
                        {show}
                    </div>
                }
                <div className="counting">
                {this.props.words.length === 0 ? '':
                    <div>Right answer {this.state.goodCount !== 0 ? <p style={{color: 'green'}}>{this.state.goodCount}</p>:''}</div>
                }
                {this.props.words.length === 0 ? <div>{this.state.message}</div> :
                    <div>Wrong answer {this.state.badCount !== 0 ? <p style={{color: 'red'}}>{this.state.badCount}</p>:''}</div>
                }
                </div>

                <div className="links">
                <br/><Link to={`/`}><i className="fas fa-arrow-alt-circle-left"></i>back</Link>
                <br/><Link to={`/summary`}>summary<i className="fas fa-arrow-alt-circle-right"></i></Link>
                </div>

                <img src={time} alt="" className="logo"/>

                <div
                    className={this.state.animate ? "animate": "notAnimate"}
                    onClick={()=>this.removeAnimate()}
                ><h1>Right answer: </h1><p>{this.state.rightWords[this.state.rightWords.length - 1]}</p>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        words: state.words
    }
};

const mapDispatchToProps= (dispatch)=>{
    return {
        addStats (values){
            dispatch ({type: ADD_STATS, payload: values})
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (WordGuess);