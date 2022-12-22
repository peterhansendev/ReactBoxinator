import React from "react";

export default function ShippingTimeLine(props) {

    const DisplayShippings = (props) => {
        const {menu, shipping} = props;

        if(shipping.length > 0) {
            return(
                shipping.map((shipping, index) => {
                    console.log(shipping);
                    return(
                        <div key={shipping.destination_country}>
                            <h3>{shipping.id}</h3>

                        </div>
                    )
                })
            )
        } else {
            return (<h3>No shipping information</h3>)
        }
    }
}