import AmortizationTable from './Table'

const Amortization = ({
    P_principal = 10000,
    r_interest = 5,
    monthly_payment = 200,
    N_term = 100

}) => {
        const data=[];
        const interest = r_interest/100/12;
        const monthlyPayment = monthly_payment
        console.log(monthlyPayment);
        data.push({
            index:0,
            interestPayment:0,
            principalPayment:0,
            totalInterestPayment:0,
            totalPrincipalPayment:0,
            remainingSum: P_principal,            
        })

        let totalPrincipalPayment = 0;
        let totalInterestPayment = 0;
        
        for(let i = 1; i < N_term+1; i++) {
            let BeginSum = data.slice(-1)[0].remainingSum;
            let interestPayment = Math.round(( data.slice(-1)[0].remainingSum*interest + Number.EPSILON) * 100) / 100 ;
            let principalPayment = Math.round((monthlyPayment-interestPayment + Number.EPSILON) * 100) / 100;
            totalInterestPayment = Math.round((totalInterestPayment+ interestPayment + Number.EPSILON) * 100) / 100;
            totalPrincipalPayment = Math.round((totalPrincipalPayment + principalPayment + Number.EPSILON) * 100) / 100;
            let remainingSum = Math.round((BeginSum - principalPayment + Number.EPSILON) * 100) / 100;
            data.push({
                index:i,
                BeginSum,
                interestPayment,
                principalPayment,
                totalInterestPayment,
                totalPrincipalPayment,
                remainingSum            
            })
        }
        console.log( data[data.length-1].remainingSum)
        data[data.length-1].remainingSum = 0;

        let result = data.map( (dat) => {
        return <p>{dat.index.toString()} | {dat.interestPayment.toString()} | {dat.principalPayment.toString()} | {dat.remainingSum.toString()}</p>
        });

        return (
            <AmortizationTable data={data} />
        )
}

export default Amortization