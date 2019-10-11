import React from 'react';
import CardNews from './CardNews';

export default function ListNews({news}){
    return(<>

     <div className="card-container">
      {news.map((item , index)=>
        (
            <CardNews
            item={item}
            index={index}
            />
       )
      )}
    </div>
    </>)
};