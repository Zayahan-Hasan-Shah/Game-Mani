import React, { useState } from 'react'
import Helmet from "../Components/Helmet/Helmet"
import CommonSection from "../Components/UI/Common-Section/CommonSection"
import { Container, Row, Col } from "reactstrap"
import SearchIcon from "@mui/icons-material/Search"
import Data from "../Asset/Data/Data"
import DataCard from "../Components/UI/DataCard/DataCard"
import ReactPaginate from 'react-paginate'
import "../Styles/AllGame.css"
import "../Styles/Pagination.css"

const AllGame = () => {
  const [searchTerm, setsearchTerm] = useState('') // initial search value from search bar

  const [pageNumber, setPageNumber] = useState(0) // initializing page number
  const DataPerPage = 12 // data per page
  const visitedPage = pageNumber * DataPerPage // page that have been visited
  const displayPage = Data.slice(visitedPage, visitedPage + DataPerPage) // current display page

  // searching functionality
  const SearchData = Data.filter(item => {
    if (searchTerm.value === "") return item
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item
  })

  // pages 

  const pageCount = Math.ceil(SearchData.length / DataPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  // filtered Data
  // const [category, setCategory] = useState('ALL');
  // const [filteredData, setFilteredData] = useState(Data)
  // const handleCategoryChange = (selectedCategory) => {
  //   setCategory(selectedCategory);

  //   // Filter the data based on the selected category
  //   if (selectedCategory === 'ALL') {
  //     setFilteredData(Data);
  //   } else {
  //     const filtered = Data.filter(item => item.category === selectedCategory);
  //     setFilteredData(filtered);
  //   }
  // };

  return (
    <>
      <Helmet title='All Games' />
      <CommonSection title='All Games' />
      <section>
        <Container>
          <Row>
            <Col lg='12' md='12' sm='12' className='mt-4 mb-5'>
              <div className='search__widget d-flex align-items-center justify-content-between'>
                <input type='text' placeholder="I'm looking for..."
                  value={searchTerm}
                  onChange={e => setsearchTerm(e.target.value)}
                />
                <span><SearchIcon className='searchicon' /></span>
              </div>
            </Col>

            {/* <Col lg='6' md='6' sm='6' className='mb-5 mt-4'>
              <div className='sorting__widget text-end'>
                <select className='w-50' value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
                  <option value='all'>All</option>
                  <option value='hacking'>Hacking</option>
                  <option value='theft'>Theft</option>
                  <option value='car drive'>Car Drive</option>
                  <option value='survival'>Survival</option>
                  <option value='fighting'>Fighting</option>
                </select>
              </div>
            </Col> */}



            {displayPage?.filter((item) => {
              if (searchTerm.value === "") return item
              if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item
            })
              .map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                  <DataCard item={item} />
                </Col>
              ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName='paginationBttns mb-2'
              />
            </div>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default AllGame