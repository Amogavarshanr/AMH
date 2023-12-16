import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Building buisness through digital marketing.' />
              <p className='desc-p'> In today's fast-paced and technologically driven world, the success of any business hinges on its ability to adapt and thrive in the digital landscape. Traditional marketing methods are no longer sufficient to reach a broad audience and engage potential customers. Enter digital marketing – a powerful tool that not only opens new doors but also transforms the way businesses connect with their target audience.</p>
              
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='The Digital Advantage...' />

              <p className='desc-p'> 1. Global Reach:
One of the primary benefits of digital marketing is its ability to break down geographical barriers. With a well-crafted online strategy, businesses can reach audiences far beyond their local market. Social media platforms, search engines, and email marketing enable businesses to connect with potential customers worldwide, expanding their reach exponentially..</p>
<p className='desc-p'>


In today's fast-paced and technologically driven world, the success of any business hinges on its ability to adapt and thrive in the digital landscape. Traditional marketing methods are no longer sufficient to reach a broad audience and engage potential customers. Enter digital marketing – a powerful tool that not only opens new doors but also transforms the way businesses connect with their target audience.

The Digital Advantage
1. Global Reach:
One of the primary benefits of digital marketing is its ability to break down geographical barriers. With a well-crafted online strategy, businesses can reach audiences far beyond their local market. Social media platforms, search engines, and email marketing enable businesses to connect with potential customers worldwide, expanding their reach exponentially.

2. Cost-Effectiveness:
Digital marketing offers a cost-effective alternative to traditional advertising. Small and medium-sized enterprises, in particular, can allocate their budgets more efficiently by leveraging online channels. Pay-per-click (PPC) advertising, social media promotions, and email campaigns allow businesses to target specific demographics, ensuring that resources are used wisely.</p>
<p className='desc-p'>3. Data-Driven Decision Making:
In the digital realm, data is king. Through analytics tools, businesses can track and measure the performance of their marketing efforts in real-time. This wealth of data enables informed decision-making, helping companies refine their strategies, optimize campaigns, and allocate resources where they yield the best results.</p>
<p className='desc-p'></p>
<p className='desc-p'></p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
