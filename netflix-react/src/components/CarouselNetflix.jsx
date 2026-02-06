import { Component } from "react"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Spinner from "react-bootstrap/Spinner"

class CarouselNetflix extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    const moviesURL = "https://www.omdbapi.com/?apikey="
    const api = "1834c867&s="

    fetch(moviesURL + api + this.props.query)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore fetch")
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)

        this.setState({
          movies: data.Search || [],
          data,
          isLoading: false,
        })
      })
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
        })
      })
  }

  chunkMovies = (movies, size) => {
    const chunks = []
    for (let i = 0; i < movies.length; i += size) {
      chunks.push(movies.slice(i, i + size))
    }
    return chunks
  }

  render() {
    const { title } = this.props
    const { movies, isLoading, isError } = this.state

    const movieChunks = this.chunkMovies(movies, 5)

    return (
      <Container fluid className="px-5 bg-dark">
        <div className="my-4">
          <h4 className="text-light mb-3">{title}</h4>

          {this.state.isLoading && (
            <div className=" text-center">
              <Spinner variant="danger" animation="border" />
            </div>
          )}

          {!isLoading && !isError && (
            <Carousel indicators={false} controls={true}>
              {movieChunks.map((group, chunkId) => (
                <Carousel.Item key={chunkId}>
                  <div className="d-flex gap-2 justify-content-center">
                    {group.map((movie, idx) => (
                      <div
                        key={`${movie.imdbID}-${chunkId}-${idx}`}
                        className="col-4 col-md-3 col-lg-2"
                      >
                        <img
                          src={
                            movie.Poster !== "N/A"
                              ? movie.Poster
                              : "/fallback.jpg"
                          }
                          alt={movie.Title}
                          className="img-fluid"
                          style={{
                            objectFit: "cover",
                            cursor: "pointer",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </Container>
    )
  }
}

export default CarouselNetflix
