import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ADD_NEW_WORDS, REMOVE_WORDS} from "../actions/types";
import sun from '../img/sun.png';

class Entry extends React.Component {

    state={
        tempItem: {enWord: '', ltWord: ''}
    };

    clearInput = ()=>{
        this.setState({tempItem: {enWord: '', ltWord: ''}})
    };

    handleInput = (value, type)=> {
        if (value) {
            this.setState({tempItem: {...this.state.tempItem, [type]: value}})
        }else {this.setState ({tempItem: {enWord:'', ltWord: ''}})}
    };

    render() {

        const show = this.props.words.map ((item, i)=>{
            return <li
            key={i}
            >{item.enWord} - {item.ltWord}<i className="far fa-trash-alt"
            onClick={()=>this.props.removeWords(i)}
            ></i>
            </li>
        });

        return (
            <div className="entry">
                <h3>What word would you like to learn ?</h3>
                <input placeholder="EN word"
                       onChange={(e)=>this.handleInput(e.target.value, 'enWord')}
                       type="text"
                       value={this.state.tempItem.enWord}/>
                <input placeholder="LT meaning"
                       onChange={(e)=>this.handleInput(e.target.value, 'ltWord')}
                       type="text"
                       value={this.state.tempItem.ltWord}/>
                <button
                onClick={()=>{this.props.addNewWords(this.state.tempItem); this.clearInput()}}
                >Add</button>
                <Link to={`/wordguess`}>Word Guess
                    <i className="far fa-arrow-alt-circle-right"></i></Link>
                <div>
                    {show}
                </div>
                {this.props.words.length === 0 ?
                    <img src={sun} alt="" className="logo"/>
                    : ''
                }
                <div >
                    <button className="saveWords"
                    onClick={()=>localStorage.setItem('entry', JSON.stringify(this.props.words))}
                    >Save words</button>
                    <button className="removeSaved"
                        onClick={()=>localStorage.removeItem('entry')}
                    >Remove saved</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        words: state.words,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addNewWords(value){
            dispatch ({type: ADD_NEW_WORDS, payload: value})
        },
        removeWords(i){
            dispatch ({type: REMOVE_WORDS, payload: i})
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Entry);