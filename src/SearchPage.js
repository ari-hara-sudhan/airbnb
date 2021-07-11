import { Button } from '@material-ui/core'
import React from 'react'
import "./SearchPage.css"
import SearchResults from './SearchResults'
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__info">
                <p>62 stays. 26 august to 30 august .2guest </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                Cancellation Flexblity
                </Button>
                <Button variant="outlined">
                Type of Place
                </Button>
                <Button variant="outlined">
                Price 
                </Button>
                <Button variant="outlined">
                Rooms and beds
                </Button>
                <Button variant="outlined">
                More Filters
                </Button>
            </div>
            <SearchResults 
            img="https://i0.wp.com/www.godsavethepoints.com/wp-content/uploads/2017/08/bali-airbnb3.jpg?fit=1200%2C800&ssl=1"
            loaction="Nearby us-paris"
            title="This is AirbNb"
            des="We providing a best destination for ur beautiful life"
            star="5"
            price="$100"
            total="4"

            />
                 <SearchResults 
            img="https://shorttermrentalz.com/wp-content/uploads/2019/06/Airbnb-Luxe.jpg"
            loaction="Nearby us-paris"
            title="This is AirbNb"
            des="We providing a best destination for ur beautiful life"
            star="5"
            price="$100"
            total="4"

            />
                 <SearchResults 
            img="https://th.bing.com/th/id/R.91b84bbda142b4aadb1515cb57bb669d?rik=StVbsbRNrpypTA&riu=http%3a%2f%2fcdn-image.travelandleisure.com%2fsites%2fdefault%2ffiles%2fstyles%2f1600x1000%2fpublic%2f1503582247%2flos-angeles-airbnb-STATEAIRBNB_1.jpg%3fitok%3d3h9C7VkV&ehk=2DaJOUw3gVf4%2bggmWU4TiMXNnudJhxmuLEhCl%2bpzADI%3d&risl=&pid=ImgRaw"
            loaction="Nearby us-paris"
            title="This is AirbNb"
            des="We providing a best destination for ur beautiful life"
            star="5"
            price="$100"
            total="4"

            />
                 <SearchResults 
            img="https://www.thebreeze.co.nz/home/must-see/20181/08/5-of-the-most-popular-rentals-on-airbnb/_jcr_content/image.dynimg.1280.q75.jpg/v1534457222965/airbnb.jpg"
            loaction="Nearby us-paris"
            title="This is AirbNb"
            des="We providing a best destination for ur beautiful life"
            star="5"
            price="$100"
            total="4"

            />
                 <SearchResults 
            img="https://playhardertours.com/wp-content/uploads/2018/06/bed-room.jpg"
            loaction="Nearby us-paris"
            title="This is AirbNb"
            des="We providing a best destination for ur beautiful life"
            star="5"
            price="$100"
            total="4"

            />
                 <SearchResults 
            img="https://www.soyacincau.com/wp-content/uploads/2020/04/200419-airbnb-backgrounds-download-4.jpg"
            loaction="Nearby us-paris"
            title="This is AirbNb"
            des="We providing a best destination for ur beautiful life"
            star="5"
            price="$100"
            total="4"

            />
            
        </div>
    )
}

export default SearchPage
