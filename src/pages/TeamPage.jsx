import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Footer} from '../components/Footer/Footer';

export default class TeamPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memberList: [{
                id: 1, name: "Varga Iosif", title: "CEO", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"},
                {id: 2, name: "Varga Elod", title: "CFO", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"},
                {id: 3, name: "Korosi Sandor", title: "CTO", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"},
                {id: 4, name: "Nagy Attila", title: "Employee", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"},
                {id: 5, name: "Nagy Attila", title: "Employee", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"},
                {id: 6, name: "Nagy Attila", title: "Employee", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"},
                {id: 7, name: "Nagy Attila", title: "Employee", image: "https://source.unsplash.com/sNut2MqSmds/500x350", description: "The founder of the firm"}],

            memberToDisplay: null
        };
    }

    handleClickDisplay = (id) => {
        this.setState({
            memberToDisplay : {
                id: id
            }
        })
    };

    handleClickHide = () => {
        this.setState({
            memberToDisplay : null
        })
    };


    render() {
            const cardList = this.state.memberList.map(member => {
                return (
                    <div className="col-xl-3 col-md-6 mb-4" key={member.id} onClick={() => this.handleClickDisplay(member.id)} >
                        <div className="card border-0 shadow" id="page-header">
                            <img src={member.image} className="card-img-top" alt={member.name}/>
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">{member.name}</h5>
                                <div className="card-text text-black-50">{member.title}</div>
                            </div>
                        </div>
                    </div>
                )
            });
            return (<div style={{background: "#fdf7f6"}}>
                    <div className="container text-center py-5 mb-4" style={{background: "#fdf7f6"}}>
                        <div className="container" >
                            <h1 className="font-weight-bold text-black" >Echipa Meteor</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {cardList}
                        </div>
                    </div>
                    {(this.state.memberToDisplay !== null && this.state.memberToDisplay !== undefined && this.state.memberToDisplay.id !== null)
                        ?
                    <Modal show={this.state.memberToDisplay !== null} size="lg" onHide={this.handleClickHide} aria-labelledby="example-modal-sizes-title-lg" >
                        <Modal.Header closeButton closeLabel="Inchide" style={{background: 	"#da9970"}}>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="card border-0 shadow" >
                                <img src={this.state.memberList.find(member => member.id === this.state.memberToDisplay.id).image} className="card-img-top" alt={this.state.memberList.find(member => member.id === this.state.memberToDisplay.id).name}/>
                                <div className="card-body text-center" >
                                    <h5 className="card-title mb-0">{this.state.memberList.find(member => member.id === this.state.memberToDisplay.id).name}</h5>
                                    <div className="card-text text-black-50">
                                        {this.state.memberList.find(member => member.id === this.state.memberToDisplay.id).title}
                                        <br/>
                                        {this.state.memberList.find(member => member.id === this.state.memberToDisplay.id).description}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                        : "" }
                        <Footer/>
                </div>
            )
        }
};