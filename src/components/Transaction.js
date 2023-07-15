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
                        <div className='ml-1 mr-1 text-2xl font-bold text-green-500'>+${props.amount.toString().padStart(6, '0')}</div>
                        <div className='mr-5 text-xs text-slate-500'>{props.id}</div>
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
                <Card css={{ borderRadius: '0.3rem', height: '3rem', width: '22rem' }} isHoverable={true} isPressable={true}>
                    <div className='flex items-center h-full justify-evenly'>
                        <div className='text-xl font-semibold text-red-500'>-${props.amount}</div>
                        <div className='text-xs text-slate-500'>{props.date + " " + props.time}</div>
                        <div className='flex gap-[8px]'>
                        <Tooltip content={props.id}>
                                <Button size='sm' color={"black"} auto ghost icon={<Document />} />
                        </Tooltip>
                        <Tooltip content={props.to}>
                                <Button size='sm' color={"black"} auto ghost icon={<User />} />
                        </Tooltip>
                        </div>

                    </div >
                </Card >

            </>
        )
    }
}
export default Transaction