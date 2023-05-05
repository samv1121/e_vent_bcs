import React from 'react'

function Leaderboard() {

  const listCLasses = 'text-center block text-black rounded h-16 m-2 py-2'
  let listCLass = listCLasses
  const scores = {
    scores: [
      {
        rank: 1,
        teamName: 'ProBots',
        score: 500
      },
      {
        rank: 2,
        teamName: 'ProBots',
        score: 400
      },
      {
        rank: 3,
        teamName: 'ProBots',
        score: 300
      },
      {
        rank: 4,
        teamName: 'ProBots',
        score: 300
      },
      {
        rank: 5,
        teamName: 'ProBots',
        score: 300
      },
      {
        rank: 6,
        teamName: 'ProBots',
        score: 300
      },
      {
        rank: 7,
        teamName: 'ProBots',
        score: 300
      },
      {
        rank: 8,
        teamName: 'ProBots',
        score: 300
      },
      {
        rank: 9,
        teamName: 'ProBots',
        score: 300
      }
    ]
  }
   
  return (
    <>
      <h1 className='text-leagueGolden text-center text-5xl m-7'>LEADERBOARD</h1>
      <ol className='flex text-darkgb flex-col content-center justify-center w-2/3 m-auto bg-darkbg'>
        {scores.scores.map((ele, index) => {
          listCLass = listCLasses
          if(index === 0){
            listCLass += ' bg-leagueChampion'
          }
          else if(index === 1){
            listCLass += ' bg-leagueIndigo'
          }
          else if(index === 2){
            listCLass += ' bg-leagueGolden'
          }
          else if(index === 3){
            listCLass += ' bg-leagueSilver'
          }
          else if(index === 4){
            listCLass += ' bg-leagueBronze'
          }
          else{
            listCLass += ' bg-leagueSecondary'
          }
          return(
          <li className={listCLass}>
            <div className='h-11 inline-block m-2'>{ele.rank}</div>
            <div className='w-44 h-11 inline-block m-2 sm:w-3/4'>{ele.teamName}</div>
            <div className='h-11 inline-block m-2'>{ele.score}</div>
          </li>)
        })}
      </ol>
    </>
  )
}

export default Leaderboard