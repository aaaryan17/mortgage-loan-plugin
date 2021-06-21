import './mortgage.scss'
import Amortization from './amortization'

class Mortgage extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            r_interest:null,
            P_principal:null,
            N_term:null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        let interest = ( Number(this.state.r_interest)/100)/12 ;
        let principal = Number(this.state.P_principal);
        let term = Number(this.state.N_term);
        let monthly_payment = interest==0? (principal/term) : (interest*principal)/( 1- (1+interest)**(-term) )
        return (
        <div className="input-group">
            <p>Interest
            <input type="text" name='r_interest' value={this.state.r_interest} type='number' onChange={this.handleChange} /> % yearly
            </p>
            <p>Principal
            <input type="text" name='P_principal' value={this.state.P_principal} onChange={this.handleChange} /> USD
            </p>
            <p>Monthly terms
            <input type="text" name='N_term' value={this.state.N_term} onChange={this.handleChange} /> months
            </p>

            { isFinite(monthly_payment) && (<div className="results">
                <p> Monthly Payment equals to ${Math.round((monthly_payment + Number.EPSILON) * 100) / 100 }</p>
                <p>Total payments equal to ${Math.round((monthly_payment*term + Number.EPSILON) * 100) / 100 }</p>
                </div>) }
            { isFinite(monthly_payment) && <Amortization
                P_principal={Number(this.state.P_principal)}
                r_interest={Number(this.state.r_interest)}
                monthly_payment = {Math.round((monthly_payment + Number.EPSILON) * 100) / 100 }
                N_term = {term}
            /> }
        </div>
        );
    }
}

export default Mortgage