import React, { useEffect, useRef } from "react";
import "./Paypal.scss"
import TransactionService from "../../services/TransactionService";
import MyFormat from "../../libs/MyFormat";
import CardService from "../../services/CardService";
import Currency from "../../libs/Currency"

function Paypal(){

    const paypal = useRef();
    let rechargeValue = null;

    const handleChange = (e) => {
        rechargeValue = [
            {
                description: "Recharge",
                amount: {
                    currency_code: "USD",
                    value: Number(e.target.value)
                }
            }
        ]
    }
    const saveTransaction = (amount) => {
        let did = null;
        Currency.convert("USD", "VND", amount).then(convertedAmount => {
            CardService.getLocalDebitByCid({cid: sessionStorage.getItem("token")})
            .then((response) => {
                if(response.data.debit_card_id) {
                    did = response.data.debit_card_id;
                    TransactionService.addTransaction({
                        date_of_transaction: MyFormat.getNewDateTime(),
                        total_price: convertedAmount,
                        transaction_type_code: 7,
                        debit_card_id: did,
                        credit_card_id: null,
                    }).then((response) => {
                        if(response.data) alert("Recharge SUCCESS!!!");
                        else alert("Recharge FAILED!?!")
                        window.location.reload();
                    })
                } else alert("Please create Debit Card first!!!")
            })
        })
    }

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "Capture",
                    purchase_units: rechargeValue,
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
                saveTransaction(order.purchase_units[0].amount.value)
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="paypal" ref={paypal}>
            <div className="input-container">
                <input className="recharge-input" id="recharge" type="text" placeholder="Please enter the amount" onChange={handleChange}></input>
                <h3 className="recharge-label">USD</h3>
            </div>
        </div>
    )
}

// Email ID:
// sb-fuiwe10418048@personal.example.com
// System Generated Password:
// Txa3m[^a

export default Paypal;