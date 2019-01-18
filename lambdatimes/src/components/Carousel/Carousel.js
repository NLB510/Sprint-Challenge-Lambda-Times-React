import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
      selectedImageIndex: 3,
    }
  }
  componentDidMount(){
    this.setState({
      carouselData: carouselData,
    })
  }

  leftClick = () => {
    if (this.state.selectedImageIndex === 0) {
      return this.setState({
        selectedImageIndex: this.state.carouselData.length - 1
      })
    }

    if (this.selectedImageIndex !== 0) {
       return this.setState(prevState => ({
        selectedImageIndex: prevState.selectedImageIndex - 1
      }))
      
    }
  }

  rightClick = () => {
    const dataLength = this.state.carouselData.length - 1;
    const i = this.state.selectedImageIndex

    if (i === dataLength) {
       this.setState({
        selectedImageIndex: 0
      })
      
    }

    console.log(i)

    if (i !== dataLength) {
      return this.setState(prevState => ({
        selectedImageIndex: ++prevState.selectedImageIndex
      }))
      
    }

    

  }

  selectedImage = () => {
    const image = this.state.carouselData;
    const selectedImage = image[this.state.selectedImageIndex]

    console.log(this.state.carouselData.length - 1)

    return <img src={selectedImage} style={{display: 'block'}} />
  }
  
  render(){
    const carouselImage = this.selectedImage();
    console.log(this.selectedImageIndex)
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {carouselImage}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}


