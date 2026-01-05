const Content = ({ nama, membership }) => {
        return (
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <td colSpan={2}>{nama}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>{membership}</td>
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