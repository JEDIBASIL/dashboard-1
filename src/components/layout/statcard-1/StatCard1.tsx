import { ActionIcon } from "@mantine/core"
import "./style.css"
import { ReactElement } from "react";

interface StatCard1Props{
    label:string,
    icon:ReactElement,
    amount:string
    color:string
}

function StatCard1({amount, icon, label, color}:StatCard1Props) {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="left">
                        <p className="title">
                            {label}
                        </p>
                        <h2>{amount}</h2>
                    </div>
                    <div className="right">
                        <ActionIcon color={color} size={40} variant="light" radius={5}>
                            {icon}
                        </ActionIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatCard1