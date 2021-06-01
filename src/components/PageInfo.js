import React from 'react'

const PageInfo = () => {
    return (
        <div className="col-md-8 col-sm-12 order-sm-1 border pageInfo">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-uppercase"><span className="textRed">We're</span> <br/> coming soon</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="textRed">
                        Hello fellow shoppers! We're currently building our new fashion store.
                        Add your email below to stay up-to-date with announcements and our launch deals
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="emailButton">
                        <input type="email" placeholder="Email Address"></input>    
                        <button className="buttonStyle">&#62;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageInfo
