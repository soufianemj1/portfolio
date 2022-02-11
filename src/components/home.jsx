import image from '../pictures/image.png'
import { FiChevronDown } from 'react-icons/fi';



const Home = () => {
  return <div className='home '>
      <div><img src={image} alt="" /></div>
      <div><h1 className='text-justify	'>Hi, I'm Zainab Belbhiria. <br />
      I'm a full-satck developer.  <br />
      I love learning new tech.</h1>
      </div>

      <div className='discover'>
          <div><h5>discover me!</h5></div>
          <div className='down'><FiChevronDown /></div>
      </div>
     
  </div>;
};
export default Home;