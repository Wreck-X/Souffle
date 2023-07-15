import React from 'react'
import { Card } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { TimeSquare } from 'react-iconly'
import { Document } from 'react-iconly'
import { User } from 'react-iconly'
import { Tooltip } from '@nextui-org/react'

function Transaction(props) {
    if (props.income) {
        return (
            <>
                <Card css={{ borderRadius: '0.3rem', height: 'auto', width: '22rem' }} isHoverable={true} isPressable={true}>
                    <div className='flex items-center justify-between'>
                        <div className='font-bold text-2xl text-green-500 mr-1 ml-1'>+${props.amount.toString().padStart(6, '0')}</div>
                        <div className='text-slate-500 text-xs mr-5'>{props.id}</div>
                        <Tooltip content={props.date + " " + props.time}>
                            <Button css={{ borderRadius: '0.3rem', m: 4 }} size='sm' color={"black"} auto ghost icon={<TimeSquare primaryColor='black' />} />
                        </Tooltip>
                        <Tooltip content={props.id}>
                            <Button css={{ borderRadius: '0.3rem', m: 4 }} size='sm' color={"black"} auto ghost icon={<Document />} />
                        </Tooltip>
                        <Tooltip content={props.from}>
                            <Button css={{ borderRadius: '0.3rem', m: 4 }} size='sm' color={"black"} auto ghost icon={<User />} />
                        </Tooltip>
                    </div >
                </Card >

            </>
        )
    } else {
        return (
            <>
                <Card css={{ borderRadius: '0.3rem', height: 'auto', width: '22rem' }} isHoverable={true} isPressable={true}>
                    <div className='flex items-center justify-between'>
                        <div className='font-bold text-2xl text-red-500 mr-1 ml-1'>-${props.amount.toString().padStart(6, '0')}</div>
                        <div className='text-slate-500 text-xs mr-5'>{props.id}</div>
                        <Tooltip content={props.date + " " + props.time}>
                            <Button css={{ borderRadius: '0.3rem', m: 4 }} size='sm' color={"black"} auto ghost icon={<TimeSquare primaryColor='black' />} />
                        </Tooltip>
                        <Tooltip content={props.id}>
                            <Button css={{ borderRadius: '0.3rem', m: 4 }} size='sm' color={"black"} auto ghost icon={<Document />} />
                        </Tooltip>
                        <Tooltip content={props.to}>
                            <Button css={{ borderRadius: '0.3rem', m: 4 }} size='sm' color={"black"} auto ghost icon={<User />} />
                        </Tooltip>
                    </div >
                </Card >

            </>
        )
    }
}
export default Transaction