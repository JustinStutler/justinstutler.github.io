import React from 'react';

const Catan_Project = () => {
    return (
        <div>
            <h1>Catan-Stat-Tracker - Full-Stack App</h1>
            <h3>Project Overview</h3>
            <p>
                During my college experience at USF, I was involved in the Board Game Club as well as their Catan League.
                I developed a website that could track some game statistics for the League. By utilizing MySQL and PostgreSQL,
                the database can retain the information.
            </p>
            <h3>Technologies Used</h3>
            <p>
                MySQL, PostgreSQL, Node.js, Express.js, React
            </p>
            <h3>Challenges and Solutions</h3>
            <p>
                One major challenge was ensuring data consistency between MySQL and PostgreSQL databases.
                I implemented a synchronization process to keep the data up-to-date and prevent discrepancies.
            </p>
            <h3>Results</h3>
            <p>
                The application successfully tracks game statistics, allowing users to view and analyze their performance
                over time. Feedback from users indicated that the app was intuitive and helpful for improving gameplay.
            </p>
            <h3>Frontend Code (available on Github)</h3>
            <pre>
                <code>{`
<div className="ScoreBoard">
  <img 
    src='catan.jpg' 
    width='400px' 
    height='300px' 
    alt='failed to load' 
  />
  <div>
    <table border='1px' className="dashboard">
      <thead className='gsthead'>
        <tr>
          <th>Awards</th>
          <th>Name</th>
          <th>Score</th>
          <th>Houses</th>
          <th>Victory Points</th>
          <th>Road Size</th>
          <th>Army Size</th>
          <th>Dev Cards</th>
        </tr>
      </thead>
      <tbody>
        <tr key={Game._id}>
          <td></td>
          <td>{Game.p1}</td>
          <td>{Game.p1Score}</td>
          <td>{Game.p1Houses}</td>
          <td>{Game.p1VictoryPoints}</td>
          <td>{Game.p1RoadSize}</td>
          <td>{Game.p1ArmySize}</td>
          <td>{Game.p1DevCards}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`}</code>

            </pre>
            <h3>Backend Code (available on Github)</h3>
            <pre>
                <code>{`
const asyncHandler = require('express-async-handler')

const Games = require('../models/gamesModel')

// @desc    Get All Games
// @route   GET /api/Game
// @acces   Private
const getAllGames = asyncHandler(async (req, res) => {
    const games = await Games.find()
    res.status(200).json(games)
})

// @desc    Create New Game
// @route   SET /api/Game
// @acces   Private
const createGame = asyncHandler(async (req, res) => {
    const game = await Games.create({
        _id: req.body._id,
        gameID: req.body.gameID,
        p1: req.body.p1,
        s1: req.body.s1,
        p2: req.body.p2,
        s2: req.body.s2,
        p3: req.body.p3,
        s3: req.body.s3,
        p4: req.body.p4,
        s4: req.body.s4,
    })
    res.status(200).json(game)
})

// @desc    Update Game
// @route   PUT /api/Game/:id
// @acces   Private
const updateGame = asyncHandler(async (req, res) => {
    const game = await Games.findById(req.params.id)

    if (!game) {
        res.status(400)
        throw new Error('Game not found')
    }

    const updatedGame = await Games.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGame)
})

// @desc    Delete Game
// @route   DELETE /api/game/:id
// @access  Private
const deleteGame = asyncHandler(async (req, res) => {
    const game = await Games.findById(req.params.id)

    if (!game) {
        res.status(400)
        throw new Error('Game not found')
    }

    await game.remove()

    res.status(200).json({ message: 'Game deleted' })
})

// @desc    Get Game by ID
// @route   GET /api/Game/:id
// @acces   Private
const getGame = asyncHandler(async (req, res) => {
    const game = await Games.findById(req.params.id)

    if (game) {
        res.status(200).json(game)
    } else {
        res.status(404)
        throw new Error('Game not found')
    }
})

module.exports = {
    getAllGames, createGame, updateGame, deleteGame, getGame
}
`}</code>
            </pre>
            <h3>Display</h3>
            <img src="your_image_path_here" alt="Catan Stat Tracker" />
            <p>The scoreboard displays varous statistics of Catan such as the game_id, player names, and scores.</p>
            <h3>Reflection</h3>
            <p>
                This project enhanced my understanding of full-stack development, particularly in managing databases with MySQL and PostgreSQL. I learned the importance of data integrity and efficient API design, which are crucial for building robust applications.
            </p>
        </div>
    );
};

export default Catan_Project;
