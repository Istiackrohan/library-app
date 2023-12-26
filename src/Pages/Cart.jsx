import Navbar from "../Components/Navbar";

export default function Cart() {
    // function Borrow() {

    // }

    
    return (
        <>
            <h1>This is Cart</h1>
            <Navbar />
            <div>
                <table>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Class</th>
                        <th>Author/Publisher</th>
                        <th>Shelf</th>
                    </tr>
                    <tr>
                        <td><img src="https://imgv2-2-f.scribdassets.com/img/document/388622461/original/11a61bb830/1601615085?v=1" /></td>
                        <td>PHYSICS 2ND PAPER</td>
                        <td>Physics</td>
                        <td>HSC</td>
                        <td>Shahjahan Tapan</td>
                        <td>HQ7 3</td>
                    </tr>
                </table>
                <p>If you want to borrow books, then you have to provide returning date.</p>
                <p>Returning Date: </p>
                <input type="date" name="" id="" />
                <button>Borrow</button>
            </div>
        </>
    )
}