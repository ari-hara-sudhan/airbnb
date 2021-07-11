import React from 'react'
import "./Home.css"
import Banner from './Banner'
import Card from "./Card"
function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home__sections">
                <Card
                src="https://th.bing.com/th/id/OIP.pPfY9rT9cgBgj6vpDRHYrwHaE8?pid=ImgDet&rs=1"
                title="This is Airbnb"
                des="I like this love u"
                price="$70"
                />
                      <Card
                src="https://a0.muscache.com/im/pictures/f8ceb262-665c-466b-a317-a0be2c21f637.jpg?aki_policy=large"
                title="My love airbnb"
                des="this is so cool"
                price="$50"
                />
                
                <Card
                src="https://th.bing.com/th/id/OIP.pPfY9rT9cgBgj6vpDRHYrwHaE8?pid=ImgDet&rs=1"
                title="My love airbnb"
                des="this is so cool"
                price="$50"
                />
               
               


            </div>
            <div className="home__sections">
                <Card
                src="https://th.bing.com/th/id/R.cd55495c07f32a7e77b955790e1e9a4b?rik=q6GbBBySBYUEMw&riu=http%3a%2f%2fpassportandplates.com%2fwp-content%2fuploads%2f2016%2f01%2fhow-to-pick-a-good-airbnb.jpg&ehk=zEpuR5XIaEjtD29iTWIQ86he7nvnx73WSBHud9JQQpw%3d&risl=&pid=ImgRaw"
                title="This is Airbnb"
                des="I like this love u"
                price="$70"
                />
                      <Card
                src="https://i.pinimg.com/originals/d0/50/1c/d0501cbd31d8e33dd2573ec9064d779e.png"
                title="My love airbnb"
                des="this is so cool"
                price="$50"
                />
                
                <Card
                src="https://cdn.foodandwineespanol.com/2018/08/destacada_simulador_airbnb.jpg"
                title="My love airbnb"
                des="this is so cool"
                price="$50"
                />
               
               


            </div>

            
        </div>
    )
}

export default Home
