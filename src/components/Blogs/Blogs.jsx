import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl'>Ques:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-xl'>ans::
                    we should store the access token and refresh token in the server-side session.Refresh tokens allow you to balance your users' access needs with your organization's security practices on the other hand A credential that can be used by an application to access an API. Access Tokens can be either an opaque string or a JSON Web Token (JWT)</p>
            </div>
            <div>
                <h2 className='text-3xl'>Ques:Compare SQL and NoSQL databases?</h2>
                <p className='text-xl'>ans:: No SQL is horizontally scalable.where SQL is vertically scalable.SQL database are table based where nosql is a document</p>
            </div>
            <div>
                <h2 className='text-3xl'>Ques:What is express js? What is Nest JS ?</h2>
                <p className='text-xl'>ans::express is a backend server for react server.where we can write node.js code which is a web runtime environment of javascript.
                    <br /><br />
                    Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
            </div>
            <div>
                <h2 className='text-3xl'>Ques:What is MongoDB aggregate and how does it work ?</h2>
                <p className='text-xl'>ans::  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.MongoDB enables you to perform aggregation operations through the mechanism called aggregation pipelines.The aggregate command can either return a cursor or store the results in a collection. Each document in the result set is subject to the 16 megabyte BSON Document Size limit.</p>
            </div>
        </div>
    );
};

export default Blogs;