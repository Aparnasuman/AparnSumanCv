import React from 'react';
import { connect } from "react-redux";
class IntrestDetail extends React.Component{
  render(){
return (
      <div className=" about-detail intrest">
     
<section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <div className="alig"> test:{this.props.simpleReducer && this.props.simpleReducer.result}</div>
                    <p>Apart from being a web developer, I enjoy most of the time to deeloped new idea in front end animation with refrence from google</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
      </div>
    );
}
};


export default  connect(state=>state)(IntrestDetail);