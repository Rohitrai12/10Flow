import React from 'react'

interface PageProps {
    params: {
        workflowId: string
    }
}

async function Page ({params}: PageProps) {
    const {workflowId} = params


    return (
        <div>
            {workflowId && <> Workflows {workflowId}</>}
        </div>
    )
}

export default Page
