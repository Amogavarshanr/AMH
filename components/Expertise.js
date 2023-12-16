import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import{Ncard} from"./common/Ncard"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>Unleashing the Creative Potential of Modern Marketing</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Ncard data={item} key={item.id} caption='learn more'/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
