import React from "react";
import Axios from "axios";
class Search extends React.Component {
    state = {
        booksDB: [],
        searchString: ""
    }

    getBooks = () => {
        Axios.get("https://www.googleapis.com/books/v1/volumes?q=quilting")
            .then(records => {
                console.log("Records", records)
                //     let empData = []
                //     let apiData = records.data.results
                //     for (let i = 0; i < apiData.length; i++) {
                //         empData.push({
                //             firstname: apiData[i].name.first,
                //             lastname: apiData[i].name.last,
                //             email: apiData[i].email,
                //             img: apiData[i].picture.medium

                //         })
                //     }
                //     this.setState({
                //         employeeDetails: empData,
                //         empDataBase: empData
                //     })
            })

    }

    getString = (event) => {
        let ele = event.target.value;
        this.setState({ searchString: ele }, () =>
            console.log(ele))
    }
    render() {
        return (<main>
            <h1>Search</h1>

            <form>
                <div className="col-md-2">
                    <label className="form-label">Google Books:</label>
                    <input type="text" value={this.state.searchString} onChange={this.getString} className="form-control" />
                </div>
                <div className="col-12">
                    <button type="submit" onClick={this.getBooks} className="btn btn-primary">Search Books</button>
                </div>

                

            </form>

        </main>)
    }
}

export default Search;
