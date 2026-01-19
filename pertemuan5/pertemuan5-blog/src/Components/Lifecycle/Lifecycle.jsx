import { Component } from "react";

// Cara membuat state diclass component

export default class Lifecycle extends Component {
    constructor(props) {
        super (props);
        console.log("1. Constructor: Komponen dibuat");
        this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        console.log("componentDidMount: Komponen sudah dirender ke DOM");

// Perubahan pada DOM: Mengubah isi teks button, warna teks dan background
// Button setelah komponen dimount 

    document.getElementById("btn").textContent = "klik untuk tambah";
    document.getElementById("btn").style.backgroundColor = "#3674B5";
    document.getElementById("btn").style.color = "#F9F9F9";

    this.interval = setInterval (() => {
        console.log("Count sekarang", this.state.count);      
    }, 1000);
    }


    componentDidUpdate(prevProps, preState) {
        console.log(
            "3. componentDiUpdate: Komponen diperbarui",
            preState.count,
            "->",
            this.state.count
        );
        
    }

    componentWillUnmount() {
        console.log("4. componentWillUnmount: Komponen akan dihapus");
        clearInterval(this.interval);
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        console.log("render: Komponen sedang dirender");
        
        return (
            <div>
                <h2>React Lifecycle</h2>
                <p>Count: {this.state.count}</p>
                <button id="btn" onClick={this.increment}>Tambah</button>
            </div>
        )
    }
}