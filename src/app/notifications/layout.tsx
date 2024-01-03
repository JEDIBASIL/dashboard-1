import React from 'react'

function NotificationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}

export default NotificationLayout