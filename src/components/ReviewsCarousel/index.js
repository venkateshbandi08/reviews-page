// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    profileIndex: 0,
  }

  onClickLeftArrow = () => {
    const {profileIndex} = this.state
    if (profileIndex > 0 && profileIndex < 4) {
      this.setState(prevState => ({
        profileIndex: prevState.profileIndex - 1,
      }))
    } else {
      this.setState({
        profileIndex: 0,
      })
    }
  }

  onClickRightArrow = () => {
    const {profileIndex} = this.state
    if (profileIndex >= 0 && profileIndex < 3) {
      this.setState(prevState => ({
        profileIndex: prevState.profileIndex + 1,
      }))
    } else {
      this.setState({
        profileIndex: 3,
      })
    }
  }

  render() {
    const {profileIndex} = this.state
    const {reviewsList} = this.props
    const eachProfile = reviewsList[profileIndex]
    return (
      <div className="bg-container">
        <div className="carousel-container">
          <h1 className="reviews-heading"> Reviews </h1>
          <div className="profile-and-buttons-container">
            <button
              className="left-button-container"
              onClick={this.onClickLeftArrow}
              type="button"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <div className="profile-container">
              <img
                src={eachProfile.imgUrl}
                className="profile-image"
                alt={eachProfile.username}
              />
              <p className="profile-name"> {eachProfile.username} </p>
              <p className="company-name"> {eachProfile.companyName} </p>
              <p className="profile-description">{eachProfile.description}</p>
            </div>
            <button
              className="right-button-container"
              onClick={this.onClickRightArrow}
              type="button"
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
