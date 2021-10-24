import { Component } from "react";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props){
    super();
    this.state = {
      movieList : [],
      isLoading : true
    };
    this.fetchMovieList = this.fetchMovieList.bind(this);
  }

  async fetchMovieList(){
    try{
      const ambilMovie = await fetch("https://api.jikan.moe/v3/top/anime");
      const listMovie = await ambilMovie.json();
      await this.setState({
        movieList : listMovie.top})
    } catch(error){
      console.log('fetchMovieList', error);
    }
  }

  componentDidMount(){
    setTimeout(() => this.fetchMovieList(), 2000);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.movieList !== prevState.movieList){
      this.setState({
        isLoading : false
      })
    }
  }

  render(){
      return (
        <div className="container my-5">
          <h1 className="text-center">Anime List</h1>
          <div className="container my-5">
            <div id="daftar-anime" className="row">
              {this.state.isLoading ? <h2>Loading...</h2> : this.state.movieList.map((movie) => <MovieCard key={movie.mal_id} movie={movie} />)}
            </div>
          </div>
        </div>
      );
  }
}

export default App;

