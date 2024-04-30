import React from 'react';

const Pukukopit = () => {
  return (
    <div className="container">
      <div className="table-container">
        <hr/>
        <h2>Lauantai</h2>
        <table className='ranking-table'>
          <thead>
            <tr>
              <th>Joukkue</th>
              <th>Koppi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wolf</td>
              <td>Ulkokoppi</td>
            </tr>
            <tr>
              <td>Hunters 8</td>
              <td>Ulkokoppi</td>
            </tr>
            <tr>
              <td>Salamat</td>
              <td>Koppi 1</td>
            </tr>
            <tr>
              <td>HJK</td>
              <td>Koppi 2</td>
            </tr>
            <tr>
              <td>Haki</td>
              <td>Koppi 3</td>
            </tr>
            <tr>
              <td>Hunters U7</td>
              <td>Koppi 4</td>
            </tr>
            <tr>
              <td>HIFK red</td>
              <td>Koppi 4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <hr/>
        <h2>Sunnuntai</h2>
        <table className='ranking-table'>
          <thead>
            <tr>
              <th>Joukkue</th>
              <th>Koppi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wolf</td>
              <td>Ulkokoppi</td>
            </tr>
            <tr>
              <td>HJK</td>
              <td>Ulkokoppi</td>
            </tr>
            <tr>
              <td>HIFK U8</td>
              <td>Koppi 1</td>
            </tr>
            <tr>
              <td>Viikingit</td>
              <td>Koppi 2</td>
            </tr>
            <tr>
              <td>Haki</td>
              <td>Koppi 3</td>
            </tr>
            <tr>
              <td>HIFK U7</td>
              <td>Koppi 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pukukopit;
