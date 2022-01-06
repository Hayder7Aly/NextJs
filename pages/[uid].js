import React from 'react'

const SingleUserPage = (props) => {
    return (
        <>
            <h1>{props.id}</h1>
        </>
    )
}

export default SingleUserPage;


export const getServerSideProps = async (ctx) => {
    const {params : {uid}} = ctx;

    return {
        props : {
            id : "userid-" + uid
        }
    }

}