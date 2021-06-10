import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Footer from './components/footer/footer';
import {blogs,filters} from "./components/data-used";
import { useState,useEffect } from 'react';

function App() {
  const [showBlogs,setShowBlogs] = useState([]);
  const filterBlogs = (id,slug) => {
    if(id === 0){
      setShowBlogs(blogs)
    }
    else if(id === 8){
        let newBlogs = blogs.filter((item) => item.slug.includes("edyoda"))
        setShowBlogs(newBlogs);
    }
    else{
      let newBlogs = blogs.filter((item) => item.slug.includes(slug.split('-')[0]));
      setShowBlogs(newBlogs);
    }
  }
  useEffect(() => {setShowBlogs(blogs);},[])
  return (<>
    <TopBar />
    <div className="main-container">
      <h1 style={{fontWeight: "400"}}>Latest Post</h1>
      <div className="fiters-container">
        <div style={{display:"flex",alignItems: "center"}}>
          <i className="fas fa-filter" style={{color: "#3580C1"}} onClick = {filterBlogs}></i>
          <p style={{margin: "16px 8px",fontWeight: "600",fontSize: "13px"}}>Filter by Category</p>
        </div>
        <div className="filters-box">
          <Filters activeCards = {filterBlogs} />
        </div>
      </div>
      <div className="cards-container">
         {showBlogs.length && showBlogs.map((item)=><Cards item = {item} />)}
      </div>
    </div>
    <Footer />
  </>
  );
}

export default App;

const Filters = (props) => {
  const [categories,setCategories] = useState([]);
  const [activeFilterId ,setActiveFilterId] = useState(0);
  const addActiveClass = (id) => setActiveFilterId(id);
  useEffect(() => {
    setCategories([{ id: 0, title: 'All' }, ...filters])
  }, [categories])
  return (
    categories.length && categories.map(({id,title,slug}) => <div key={id} onClick = {() => {addActiveClass(id); props.activeCards(id,slug); }} 
    className={ id === activeFilterId ? "filters active-filter":"filters"} >
      {title}
    </div>)
   );
}

const Cards = (props) => {
  const {id,title,description,small_image,posted_on,authorname,slug} = props.item;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const date = posted_on.split("T")[0].split("-");
  let monthNumber = date[1][0] > 0 ? date[1] : date[1][1]; 
  return (
    <div className="cards" key={id}>
      <a href="#">
        <div className="card-image-container">
          <img src= {small_image} alt={slug}/>
        </div>
        <div className="card-info">
          <h2 className="card-heading">{title}</h2>
          <div><span className="author-name">{authorname}</span>|<span className="date">{date[2]} {months[monthNumber - 1]} {date[0]}</span></div>
          <p className="card-description">{description}</p>
        </div>
      </a>
    </div>
   );
}