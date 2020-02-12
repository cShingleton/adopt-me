import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media && media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      // not going to use unary for type-casting like teacher as I think it is confusing
      // and Number(...) is both more explicit and provides exact same functionality
      active: Number(event.target.dataset.index)
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // disabling in interest of time since takes a lot more
            // wrangling to get the a11y right
            // eslint-disable-next-line
            <img
              key={photo}
              // in prod handlers should be set on interactive els only for a11y reasons
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : undefined}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
