class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        { console.log("Propppp;", this.props.bpi.bpi.USD,"ye lo", this.state.currency) }
        let list = '';


        if (this.state.currency === 'USD') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.bpi.USD.description} : <span className="badge badge-primary" style={{margin:"2%"}}>{this.props.bpi.bpi.USD.code}</span>
                <strong>{this.props.bpi.bpi.USD.rate}</strong>
            </li>;
        }
        else if (this.state.currency === 'GBP') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.bpi.GBP.description} : <span className="badge badge-primary" style={{margin:"1%"}}>{this.props.bpi.bpi.GBP.code}</span>
                <strong>{this.props.bpi.bpi.GBP.rate}</strong>
            </li>;
        }
        else if (this.state.currency === 'EUR') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.bpi.EUR.description} : <span className="badge badge-primary" style={{margin:"2%"}}>{this.props.bpi.bpi.EUR.code}</span>
                <strong>{this.props.bpi.bpi.EUR.rate}</strong>
            </li>;
        }

        return (
            <div>
                <ul className="list-group">

                    {list}

                </ul>
                <br />
                <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>

                </select>
            </div>
        );
    }
}

export default Prices;