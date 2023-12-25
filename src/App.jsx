import './App.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h3>Find your book</h3>
        <input type="text" />
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
              <td><button>Add To Cart</button></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
