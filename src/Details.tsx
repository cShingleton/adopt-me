import React from "react";
import PetAPI, { Photo } from "@frontendmasters/pet";
import { navigate, RouteComponentProps } from "@reach/router";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  // experimental public field declaration
  public state = {
    error: false,
    loading: true,
    showModal: false,
    animal: "",
    breed: "",
    location: "",
    description: "",
    name: "",
    media: [] as Photo[],
    url: ""
  };

  public componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }

    PetAPI.animal(Number(this.props.id))
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary
        });
      })
      .catch((e: Error) => this.setState({ error: e }))
      .finally(() => this.setState({ loading: false }));
  }

  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });

  public adopt = () => navigate(this.state.url);

  public render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                type="button"
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Are you sure you would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button type="button" onClick={this.adopt}>
                    Yes
                  </button>
                  <button type="button" onClick={this.toggleModal}>
                    No
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(
  props: RouteComponentProps<{ id: string }>
) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
