import "./Content.css"

const Content = ({ nama, membership }) => {
        const tableStyle = {
            // border: "1px solid black",
            // width: "300px",
            // margin: "10px auto",
            // color: "black"
        };

        const headerStyle = {
            // textAlign: "center",
            // fontWeight: "bold",
        };

        const cellStyle = {
            // textAlign: "center",
        };

        const buttonStyle = {
            // backgroundColor: "blue",
            // color: "white",
        }


        return (
            <div>
                <table className="card">
                    <thead className="card-head">
                        <tr>
                            <td className="user" colSpan={2}>{nama}</td>
                        </tr>
                    </thead>
                    <tbody className="card-body">
                        <tr>
                            <td className="member" colSpan={2}>{membership}</td>
                        </tr>
                        <tr>
                        <td>
                                <button>Message</button>
                            </td>
                        <td>
                            <button>Subscribe</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}

export default Content;