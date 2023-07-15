import React from 'react'
import { Card } from '@nextui-org/react'

function Transaction(props) {
    if (props.income) {
        return (
            <>
                <div>{props.amount}</div>
                <div>Income</div>
                <div>{props.id}</div>
            </>
        )
    } else {
        return (
            <>
                <div>{props.amount}</div>
                <div>Outcome</div>
                <div>{props.id}</div>
                <div>{props.payee}</div>
            </>
        )
    }
}
export default Transaction