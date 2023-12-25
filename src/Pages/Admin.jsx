import './Admin.css'

export default function Admin() {
    return (
        <>
            <div>
                <h1>This is Admin page</h1>
            </div>
            <div className="form">
                <p>ID</p>
                <input type="text" />
                <p>Title</p>
                <input type="text" />
                <p>Subject</p>
                <input type="text" />
                <p>Class</p>
                <input type="text" />
                <p>Author/Publisher</p>
                <input type="text" />
                <p>Type</p>
                <input type="text" />
                <p>Cover</p>
                <input type="text" />
                <p>Shelf</p>
                <input type="text" /> <br />
                <p>------------------</p>
                <button type="button">Create</button>
                <button type="button">Update</button>
                <button type="button">Delete</button>
            </div>
            <div className="displayBooks">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Class</th>
                        <th>Author/Publisher</th>
                        <th>Type</th>
                        <th>Cover</th>
                        <th>Shelf</th>
                    </tr>
                    <tr>
                        <td>PHYHSC2</td>
                        <td>PHYSICS 2ND PAPER</td>
                        <td>Physics</td>
                        <td>HSC</td>
                        <td>Shahjahan Tapan</td>
                        <td>Academic</td>
                        <td>https://imgv2-2-f.scribdassets.com/img/document/388622461/original/11a61bb830/1601615085?v=1</td>
                        <td>HQ7 3</td>
                    </tr>
                </table>
            </div>
        </>
    )
}