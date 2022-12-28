import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import Moment from 'moment';
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1440.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"
import "swiper/css"

const Blog = () => {
  const hasWindow = typeof window !== 'undefined';
  const widthScreen = hasWindow ? window.innerWidth : null;
  const title = "Блог";
  const showAll = "Посмотреть все";
  const data = [
    {
      key: '1',
      name: 'New 1',
      photo: 'photo',
      date: '29.10.2022',
      link: '#',
    },
    {
      key: '2',
      name: 'New 2',
      photo: 'photo1',
      date: '29.10.2022',
      link: '#',
    },
    {
      key: '3',
      name: 'New 3',
      photo: 'photo1',
      date: '29.10.2022',
      link: '#',
    },
    {
      key: '4',
      name: 'New 4',
      photo: 'photo1',
      date: '29.10.2022',
      link: '#',
    },
    {
      key: '5',
      name: 'New 5',
      photo: 'photo1',
      date: '29.10.2022',
      link: '#',
    },
    {
      key: '6',
      name: 'New 6',
      photo: 'photo1',
      date: '29.10.2022',
      link: '#',
    },
  ];

  const result = data.map((item, i) => {
    return (
      <SwiperSlide key={ i }>
        <div id={ item.key } className="blog_products_block" >
          <Link style={{textDecoration: 'none'}} to={ item.link }>
            <div className="blog_products_block_pic photo_blog"></div>
            <div className="blog_products_block_title">{ item.name }</div>
            <div className="blog_products_block_list">
              <div className="blog_products_block_list_date">{ item.date }</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    )
  });

  return (
    <div className="container" id="blog">
      <div className="blog margin_bottom_300">
        <div className="blog__title">
          <div className="title_96">{ title }</div>
          <div className="blog_show_all">{ showAll }<span className="vector-line"></span>
            <div className="vector" style={{marginBottom: '8px', marginLeft: '-8px'}}></div>
          </div>
        </div>
        <div className="blog__products">
          <Swiper
            spaceBetween={ 19 }
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              1920: {
                width: 1920,
                allowTouchMove: true,
              },
              1440: {
                width: 1440,
                allowTouchMove: true,
              },
              1025: {
                width: 1025,
                allowTouchMove: true,
              },
              1024: {
                width: 1024,
                allowTouchMove: true,
              },
              768: {
                width: 768,
                allowTouchMove: true,
              }
            }}
          >
            { result }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

Blog.propTypes = {
  siteTitle: PropTypes.string,
}
        
Blog.defaultProps = {
  siteTitle: ``,
}

export default Blog