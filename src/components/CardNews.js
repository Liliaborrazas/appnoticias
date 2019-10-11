import React from 'react';


// <div className="card-item" key={index}>
//   <div className="card mb-3">
//   <img src={item.urlToImage} className="card-img-top imagen" alt="Flor" />
//       <div className="card-img-overlay">
//       <h2 className="card-title"></h2>
//       </div>
//    <div className="card-body">
//       <h5 className="card-title">{item.title}</h5>
//       <p className="card-text">{item.description}</p>
//       <p className="card-text"><small className="text-muted">{item.publishedAt}</small></p>
//       <div className="">
//       <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-link">Leer mas... </a> 
//       </div>
//   </div>
// </div>
// </div>
export default function CardNews({item, index}){
    const {urlToImage, title, description, url } = item
    return(
            <div className="card card-item" key={index}  >
            <img src={urlToImage} className="card-img-top imagen" alt="foto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-warning">Go News</a>
            </div>
            </div>
    )
}