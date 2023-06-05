import React from 'react'

function SeriesAddInfo({ summary, status, genres, premiered, ended, country, timezone }) {

  return (
    <section className='add-info text-white px-2'>
      <div className="summary pb-2">
        <p className='font-bold text-[#A657AE] text-xl'>SUMMARY</p>
        <p className='text-lg'>{summary}</p>
      </div>
      <div className="facts">
        <div className="fact-group flex flex-col md:flex-row gap-3 py-2">
          <p className='font-bold text-[#A657AE] text-xl'>STATUS: </p>
          <p className='text-lg'>{status}</p>
        </div>
        <div className="fact-group flex flex-col md:flex-row gap-3 py-2">
          <p className='font-bold text-[#A657AE] text-xl'>PREMIERED: </p>
          <p className='text-lg'>{premiered}</p>
        </div>
        <div className="fact-group flex flex-col md:flex-row gap-3 py-2">
          <p className='font-bold text-[#A657AE] text-xl'>ENDED: </p>
          <p className='text-lg'>{ended}</p>
        </div>
        <div className="fact-group flex flex-col md:flex-row gap-3 pb-3">
          <p className='font-bold text-[#A657AE] text-xl'>GENDERS: </p>
          <p className='text-lg'>{genres[0]}</p>|
          <p className='text-lg'>{genres[1]}</p>|
          <p className='text-lg'>{genres[2]}</p>
        </div>
        <div className="fact-group flex flex-col gap-3">
          <p className='font-bold text-[#A657AE] text-xl'>COUNTRY: </p>
          <p className='text-lg'>{country}</p>
          <p className='font-bold text-[#A657AE] text-xl'>TIMEZONE: </p>
          <p className='text-lg'>{timezone}</p>
        </div>
      </div>
    </section>
  )
}

export default SeriesAddInfo