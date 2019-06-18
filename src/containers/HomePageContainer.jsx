import React, {Component} from 'react';

export default class HomePageContainer extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {productCategories} = this.props;
        const productList = productCategories.map(category => {
            return(
                <div className="col-12 col-md-6 col-lg-4 text-center py-4" key={category.name}>
                    <i className="fa fa-cloud fa-4x text-muted" aria-hidden="true"></i>
                    <h5 className="text-info">{category.name}</h5>
                    <p className="text-muted">{category.description}</p>
                </div>
            )
        });
        return(
            <div>
                <section id="products" className="bg-white">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="section-title">Categorii de produse</h3>
                        </div>
                    </div>
                    <div className="row">
                        {productList}
                    </div>
                </section>
            </div>
        )
    }
}