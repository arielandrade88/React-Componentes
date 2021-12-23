import React from "react";
import Row from "./Row";


let data = [
    {   
      
        title:"Billy Elliot",
        duration:"123",
        rating:"5",
        genre:["Drama","Comedia"],
        awards:2
    },   
    {
        
        title:"Alicia en el pais de las maravillas",
        duration:"142",
        rating:"4.8",
        genre:["Drama","Acción","Comedia"],
        awards:2
    },   
    {
        
       
        genre:["Género"],
      
    },   
  
]

function Table() {
  return (
    <div class="d-flex justify-content-center">
      <div class="card shadow mb-4 col-lg-11 ">
        
        <div class="card-body">
          <div class="col-lg-12 mb-6">
            <table class=" table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Duración</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Género</th>
                  <th scope="col">Premios</th>
                </tr>
              </thead>
              <tbody>
               
              { data.map((item) => (

                           <Row
                           title={item.title}
                           genre={item.genre}
                           duration={item.duration}
                            rating={item.rating}
                            awards={item.awards}
                           />
                       ))}
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
