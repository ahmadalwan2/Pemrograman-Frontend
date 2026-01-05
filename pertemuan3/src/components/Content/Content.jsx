const Content = ({ nama, membership }) => {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>colSpan={2}{nama}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>colSpan={2}{membership}</td>
                        </tr>
                        <tr>
                            <td>
                                <button>Message</button>
                            </td>
                        </tr>
                        <td>
                            <button>Subscribe</button>
                        </td>
                    </tbody>
                </table>
            </div>
        )
}

export default Content;