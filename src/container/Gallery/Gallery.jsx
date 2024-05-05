import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryimage = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;

    }
    else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">
          Photo Gallery
        </h1>
        <p className='p__opensans' style={{ color: "#AAA", marginTop: "2rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images flex__center">
        <div className="w-[40%] scroller overflow-x-auto h-full px-4 gap-2  flex justify-start items-center">
          <img src={galleryimage[0]} alt="" className='ml-2' srcset="" />
          <img src={galleryimage[1]} alt="" className='ml-2' srcset="" />
          <img src={galleryimage[2]} alt="" className='ml-2' srcset="" />
          <img src={galleryimage[3]} alt="" className='ml-2' srcset="" />
        </div>
        {/* <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />

        </div> */}
      </div>
    </div>)
};

export default Gallery;
