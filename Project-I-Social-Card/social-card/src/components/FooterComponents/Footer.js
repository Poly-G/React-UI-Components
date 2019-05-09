import React, { Component } from 'react'
import './Footer.css'

 class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
            like: 0,
            retweet: 0,
            isLiked: false,
            isRetweeted: false
        }
    }

    handleLike = () => {
      if (!this.state.isLiked) {
        this.setState({
          like: this.state.like +1,
          isLiked: true
        })
      } else {
         this.setState({
           like: this.state.like -1,
           isLiked: false
         })
      }
    }

   handleRetweet = () => {
     if (!this.state.isRetweeted) {
       this.setState({
         retweet: this.state.retweet + 1,
         isRetweeted: true
       })
     } else {
       this.setState({
         retweet: this.state.retweet - 1,
         isRetweeted: false
       })
     }
   }
    

  render() {
    return (
      <div className="footer">
        <i className="far fa-comment fa-2x"></i>
        <i onClick={this.handleRetweet} className="fas fa-sync fa-2x"><span className="number">{this.state.retweet}</span></i>
        <i onClick={this.handleLike} className="far fa-heart fa-2x"><span className="number">{this.state.like}</span></i>
        <i className="far fa-envelope fa-2x"></i>
      </div>
    )
  }
}

export default Footer;