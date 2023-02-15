import React from 'react'
import { useSelector } from 'react-redux'
import CardBox from './CardBox'
import Loader from './Loader'

function Home() {

  const { loading, allUser } = useSelector((state) => state.userReducer)

  return (
    loading ? <Loader /> : (
      <div className='Container'>
        {
          allUser.length > 0 ? (
            <div className='Card-contain'>
              {

                allUser[0].map((i) => (

                  <CardBox key={i.id} fname={i.first_name} lname={i.last_name} email={i.email} img={i.avatar} />
                ))
              }
            </div>
          ) : " "
        }
      </div>)
  )
}



export default Home