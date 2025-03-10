import React from "react"
import Footer from "../footer/Footer"
import Slide from "../Slide/Slide"
import Card from "./Card"
import CardTwo from "./CardTwo"

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "WINE TRENDS",
      titletwo: "wine 365",
      paraOne: "Catering To The Travelling Customer",
      paraTwo: "Three easy one-liners to upsell any wine!",
      name: "A Classic Drinks Blog",
      subTitle: "How to Shop Mindfully",
    //   qrCode: "/images/qrcode.png",
      cover: "/Images/wine.jpg",
    },
  ]
  return (
    <>
      <section className='home'>
        <div className='left-content'>
          {data.map((value) => {
            return (
              <div className='content'>
                <div className='logo'>
                  <h1>WT</h1>
                </div>
                <div className='home-img'>
                  <img src={value.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>
                <div className='text text2'>
                  <h1>{value.titletwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>

                <div className='qrcode'>
                  <img src={value.qrCode} alt='' />
                </div>
              </div>
            )
          })}
        </div>
        <div className='right-content'>
          <Slide />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  )
}

export default BlogHome
