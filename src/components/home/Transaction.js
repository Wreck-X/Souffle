import React from 'react'
import { Card } from '@nextui-org/react'

function Transaction(props) {
    if (props.income) {
        return (
            <>
                <Card css={{ mw: "400px" }} isHoverable="true" isPressable="true">
                <div>{props.amount}</div>
                <div>Income</div>
                <div>{props.id}</div>
                </Card >
            </>
        )
    } else {
        return (
            <>
                <Card css={{ mw: "400px", mh: "200px" }}>
                <div>{props.amount}</div>
                <div>Outcome</div>
                <div>{props.id}</div>
                <div>{props.payee}</div>
                </Card>
            </>
        )
    }
}
export default Transaction