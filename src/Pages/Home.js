import React, { useEffect, useState } from 'react'
import Helmet from "../Components/Helmet/Helmet"
import { Container, Row, Col } from "reactstrap"
import HeroImg from "../Asset/Images/Hero-3.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Category from "../Components/UI/Category/Category"
import Data from "../Asset/Data/Data"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "../Styles/Hero-sec.css"
import "../Styles/Home.css"
import featureimage01 from "../Asset/Images/delivery-bike.png"
import featureimage02 from "../Asset/Images/gaming pc.png"
import featureimage03 from "../Asset/Images/ps.jpg"
import DataCard from '../Components/UI/DataCard/DataCard';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureimage01,
    desc: "Something about delivery that will benefit you. We'll deliver your product at your door step."
  },
  {
    title: 'Gaming PC',
    imgUrl: featureimage02,
    desc: 'We have a great games that will enhance your world that will keep away from anxiety and depression.'
  },
  {
    title: 'PS controller',
    imgUrl: featureimage03,
    desc: "Bore? play with your friends online on a multiplayer server to enjoy more."
  },
]


const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [allData, setAllData] = useState(Data)

  const handleCategoryChange = (category) => {
    if (category === 'ALL') {
      setAllData(Data)
    }
    if (category === 'THEFT') {
      const filterTheft = Data.filter(item => item.category === 'Theft')
      setAllData(filterTheft)
    }
    if (category === 'HACKING') {
      const filterHacking = Data.filter(item => item.category === 'Hacking')
      setAllData(filterHacking)
    }
    if (category === "FIGHTING") {
      const filterFighting = Data.filter(item => item.category === 'Fighting')
      setAllData(filterFighting)
    }
    if (category === 'SURVIVAL') {
      const filterSurvival = Data.filter(item => item.category === 'Survival')
      setAllData(filterSurvival)
    }
    if (category === 'ADVENTURE') {
      const filterAdventure = Data.filter(item => item.category === 'Adventure')
      setAllData(filterAdventure)
    }
    if (category === 'CAR DRIVE') {
      const filterCar = Data.filter(item => item.category === 'Car drive')
      setAllData(filterCar)
    }
    if (category === "STEALTH") {
      const filterStealth = Data.filter(item => item.category === 'Stealth')
      setAllData(filterStealth)
    }
  }

  useEffect(() => {
    if (category === 'ALL') {
      setAllData(Data)
    }
    if (category === 'THEFT') {
      const filterTheft = Data.filter(item => item.category === 'Theft')
      setAllData(filterTheft)
    }
    if (category === 'HACKING') {
      const filterHacking = Data.filter(item => item.category === 'Hacking')
      setAllData(filterHacking)
    }
    if (category === "FIGHTING") {
      const filterFighting = Data.filter(item => item.category === 'Fighting')
      setAllData(filterFighting)
    }
    if (category === 'SURVIVAL') {
      const filterSurvival = Data.filter(item => item.category === 'Survival')
      setAllData(filterSurvival)
    }
    if (category === 'ADVENTURE') {
      const filterAdventure = Data.filter(item => item.category === 'Adventure')
      setAllData(filterAdventure)
    }
    if (category === 'CAR DRIVE') {
      const filterCar = Data.filter(item => item.category === 'Car drive')
      setAllData(filterCar)
    }
    if (category === "STEALTH") {
      const filterStealth = Data.filter(item => item.category === 'Stealth')
      setAllData(filterStealth)
    }
  }, [category])

  return (
    <>
      <Helmet title='Home'>
        <section className='hero-background mt-5'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='hero__content'>
                  <h5 className='mb-3'>Easy to make order</h5>
                  <h1 className='mb-4 hero__title'><span>Gamer?</span> Just wait <br /> for games at <span>your door</span></h1>
                  <p>You will never forget like this games in your entire life with best animation, details, graphics, story and in gameplay</p>


                  <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                    <button className='order__btn d-flex align-items-center justify-content-between'> Order now <KeyboardArrowRightIcon className='i' /> </button>

                    <button className='all__games-btn'><Link to='/games'>See all games</Link></button>
                  </div>

                  <div className='hero__service d-flex align-items-center gap-5 mt-5 w-100'>
                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><DirectionsCarOutlinedIcon className='i' /></span> No Shipping charges</p>
                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><VerifiedUserOutlinedIcon className='i' /></span> 100% secure checkout</p>
                  </div>
                </div>
              </Col>

              <Col lg='6' md='6' className='d-flex align-items-center justify-content-between'>
                <div className='hero__img '>
                  <img src={HeroImg} alt='' className='w-100 rounded' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='pt-0'>
          <Category />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center mt-5'>
                <h5 className='feature__subtitle mb-4'>What we do?</h5>
                <h2 className='feature__title'>Just sit back at home and relax</h2>
                <h2 className='feature__title'>we will <span>take care</span></h2>
                <p className='mb-1 mt-4 feature__text'>lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officiis?</p>
                <p className='feature__text'>lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officiis?</p>
              </Col>

              {featureData.map((item, index) => (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div className='feature__item text-center px-5 py-3 mb-4'>
                    <img src={item.imgUrl} alt='feature-img'
                      className='w-25 mb-3 rounded'
                    />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}

            </Row>
          </Container>
        </section>

        <section className='w-100'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2>Popular Games</h2>
              </Col>

              <Col lg='12' md='12'  >
               
                <div className='game__category d-flex flex-row align-items-center justify-content-center gap-4 w-100'>
                  <ul class="nav justify-content-center mt-4 mb-4 ">
                    <button className={`text-start all_btn ${category === 'ALL' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('ALL')}>All</button>
                    <button className={`text-start ${category === 'THEFT' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('THEFT')}>THEFT</button>
                    <button className={`text-start ${category === 'HACKING' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('HACKING')}>HACKING</button>
                    <button className={`text-start ${category === 'SURVIVAL' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('SURVIVAL')}>SURVIVAL</button>
                    <button className={`text-start ${category === 'CAR DRIVE' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('CAR DRIVE')}>CAR</button>
                    <button className={`text-start ${category === 'ADVENTURE' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('ADVENTURE')}>ADVENTURE</button>
                    <button className={`text-start ${category === 'STEALTH' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('STEALTH')}>STEALTH</button>
                    <button className={`text-start ${category === 'FIGHTING' ? 'GameBtnActive' : ''}`} onClick={() => setCategory('FIGHTING')}>FIGHTING</button>
                  </ul>
                </div>

                

              </Col>

              {
                allData.map(item => (
                  <Col lg='3' md='4' sm='4' xs='6' key={item.id} className='mt-5 mb-5'>
                    <DataCard item={item} />
                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>

      </Helmet >
    </>
  )
}

export default Home