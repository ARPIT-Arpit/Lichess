// pages/leaderboards.js

export default function Leaderboards() {
    return (
      <div>
        <h1>Leaderboard</h1>
        <p>Welcome to the Leaderboard page!</p>
  
        {/* Example of leaderboard data (you can fetch this dynamically later) */}
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Player One</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Player Two</td>
              <td>900</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Player Three</td>
              <td>850</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  