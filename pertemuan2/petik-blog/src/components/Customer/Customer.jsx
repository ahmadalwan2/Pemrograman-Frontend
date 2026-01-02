function Customer ({ nama, alamat, member, tag }) {
    return (
        <div>
            <h3>{tag}</h3>
            <ol>
                <li>Nama: {nama}</li>
                <li>Alamat: {alamat}</li>
                <li>Membership: {member}</li>
            </ol>
                <button style={{border: "none", backgroundColor: "white"}}>Detail</button>
        </div>
    )
}
export default Customer;