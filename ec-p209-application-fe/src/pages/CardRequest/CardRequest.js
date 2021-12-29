import {useNavigate, useParams} from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import './CardRequest.scss';
import debitcard from '../../assets/images/DebitCard.png';
import interdebitcard from '../../assets/images/InterDebitCard.png';
import creditcard from '../../assets/images/CreditCard.png';
import Title from '../../components/Title/Title';
import { useState, useEffect } from 'react';
import RequestService from '../../services/RequestService';

function CardDetail() {
    const id = useParams().id;
    const navigate = useNavigate();

    const [image_byte, setImageByte] = useState("");
    const [lineCredit, setLineCredit] = useState("");

    const [imageDisplay, setImageDisplay] = useState(false);

    const [request, setRequest] = useState({
        // request_id: 1,
        // card_type: 'Debit',
        // account_number: '124232345634',
        // customer_name: 'Tran Huu Thanh',
        // date_open: null,
        // date_request: null,
    }) 
    const [loaded, setLoaded] = useState(false)

    //eslint-disable-next-line
    useEffect(() => {
        if(loaded === false) {
            RequestService.getRequestById({rid: id})
            .then(response => {
                RequestService.getImage({url: response.data.image_path})
                .then(response => {
                    setImageByte(response.data)
                    // setImageByte(Buffer.from(response.data, 'binary').toString('base64'));
                    // console.log(Buffer.from(response.data, 'binary').toString('base64'))
                })
                setRequest(response.data);
            })
            setLoaded(true);
        }
    })

    const handleApproveRequest = () => {
        if(request.card_type === 'Credit Card' && lineCredit === "") {
            alert("Please enter a line for Credit");
        } else {
            RequestService.approveRequest({...request, line_of_credit: lineCredit})
            .then(response => {
                if(response.data) {
                    alert("Approve SUCCESS!!!")
                    navigate('/admin');
                }
                else alert("Approve FAILED!!!")
            })
        }
    }

    const handleDeclineRequest = () => {
        RequestService.declineRequest(request)
        .then(response => {
            if(response.data) {
                alert("Decline SUCCESS!!!")
                navigate('/admin');
            }
            else alert("Decline FAILED!!!")
        })
    }

    const handleLineCredit = (e) => {
        setLineCredit(e.target.value);
    }

    const handleImageDisplay = () => {
        imageDisplay ? setImageDisplay(false)
        : setImageDisplay(true);
    }

    const cardInfoContent = () => {
        const item =
        <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={request.card_type==="Debit Card" ? debitcard : request.card_type==="International Debit Card" ? interdebitcard : creditcard} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high name">{request.customer_name}</h3>
                    <p className="card-normal bank-name">TUB {request.card_type}</p>
                    <p className="card-normal">Date of request: {request.date_request}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Request Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner margin-wrap">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{request.account_number}</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Account issue date</p>
                    <p className="cardinfo-text">{request.date_open}</p>
                </div>
                {request.card_type==="Credit Card" && <input className="credit-input" id="line-of-credit-input" type="text" placeholder="Enter line of credit for this card" value={lineCredit} onChange={handleLineCredit}></input>}
            </div>
            {request.card_type==="Credit Card" && <span className="img-link" onClick={handleImageDisplay}>Payroll image</span>}

        </div>;
        return item;
    }
    return (
        <MainLayout>
            <main className="cardrequest-main">
                <Title link="/admin" title={request.card_type === 'Debit Card' ? 'Debit Card request' : request.card_type === 'International Debit Card' ? 'International Debit Card request' : 'Credit Card request'} /> 
                <div className="func">
                    <div className="container">
                        <div className="func-inner">
                            {cardInfoContent()}
                            <div className="card-func">
                                <span className="cardfunc-inner" onClick={handleApproveRequest}><i className="fas fa-check-circle icon"></i> Approve</span>
                                <span className="cardfunc-inner lock" onClick={handleDeclineRequest}> <i className="fa fa-ban icon"></i>  Decline</span>
                            </div>
                        </div>
                    </div>
                </div>
                { imageDisplay && <div id="myModal" className="modal">
                    <span className="close" onClick={handleImageDisplay}>&times;</span>
                    <img className="modal-content" id="img01" alt='' src={'data:image/png;base64,'+ image_byte} />
                </div> }
            </main>
        </MainLayout>
    );
}

export default CardDetail;