import MainLayout from '../../components/MainLayout';
import './Index.scss';
import debitcard from '../../assets/images/DebitCard.png';
import interdebitcard from '../../assets/images/InterDebitCard.png';
import creditcard from '../../assets/images/CreditCard.png';
import background from '../../assets/images/btcbg.jpg';

function Index() {
    return (
        <MainLayout nonlogin={true} >
            <main className="index-main">
                <figure className="banner img">
                    <img src={background} alt="" className=""></img>
                </figure>
                <div className="main-inner">
                    <div className="fav">
                        <div className="container">
                            <div className="fav-inner">
                                <p className="discription">Welcome to our online banking<br/>In here you can create and manage your online<br/>credit/debit card in just a few steps</p>
                            </div>
                        </div>
                    </div>
                    <div className="func">
                        <div className="container">
                            <div className="func-inner">
                                <figure className="card img">
                                    <img src={debitcard} alt="" className=""></img>
                                </figure>
                                <div className="card-info">
                                    <h3 className="card-title">DEBIT CARD</h3>
                                    <ul>
                                        <li>Easy to use for online shopping</li>
                                        <li>Recharge & activate your card and you can spend until the money runs out</li>
                                        <li>No physical card needed</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="func-line"/>
                            <div className="func-inner">
                                <figure className="card img">
                                    <img src={interdebitcard} alt="" className=""></img>
                                </figure>
                                <div className="card-info">
                                    <h3 className="card-title">INTERNATIONAL DEBIT CARD</h3>
                                    <ul>
                                        <li>Full features of DEBIT CARD</li>
                                        <li>Domestic and foreign payment</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="func-line"/>
                            <div className="func-inner">
                                <figure className="card img">
                                    <img src={creditcard} alt="" className=""></img>
                                </figure>
                                <div className="card-info">
                                    <h3 className="card-title">CREDIT CARD</h3>
                                    <ul>
                                        <li>Safe, eliminates the risk of carrying cash</li>
                                        <li>Spend even without money</li>
                                        <li>Convenient to pay</li>
                                        <li>Short-term money spending is interest-free</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default Index;