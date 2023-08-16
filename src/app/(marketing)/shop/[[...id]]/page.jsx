export const metadata = {
    title: "Shop",
    description: "Shop",
}
import Title from '@/components/pagescomponents/Title'
import React from 'react'

function Id({params}) {
    console.log(params);
    return (
        <>
            <Title title="Id"/>
            {/* {
                params.id.map(element=>(<Title title={element}/>))
            } */}
        </>
    )
}

export default Id
