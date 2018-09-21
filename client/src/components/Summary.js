import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Summary extends React.Component {

    render() {
console.log(this.props.stats)
        const fetch = this.props.stats.map ((item, i )=>{
            return <tr key={i}><td>{item.word}</td><td>right{item.right}</td><td>wrong{item.wrong}</td></tr>
        });

        return (
            <div className="summary">
                <table>
                    <thead></thead>
                    <tbody>
                    {fetch}
                    </tbody>
                </table>
            <br/><br/><Link to={`/wordguess`}><i className="fas fa-arrow-alt-circle-left"></i>back</Link>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        stats: state.stats,
    }
};

export default connect (mapStateToProps) (Summary);