import React from "react";
import Datasource from "./datasource";


function table(title,price,brand,category) {
    return (
        <table class="table table-bordered ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">{title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Price</th>
                    <td>{price}</td>
                </tr>
                <tr>
                    <th scope="row">Brand</th>
                    <td>{brand}</td>
                </tr>
                <tr>
                    <th scope="row">Category</th>
                    <td>{category}</td>
                </tr>
            </tbody>
        </table>
    )
}

function Comparepage() {
    const data = Datasource();
    let data1 = () =>{
        return(data ? (
            data.products.slice(0,4)) : 0);   
    }
    let data2 = data1();
    console.log(data2);

    const tableitems = ()=>{
        return (
            data ? 
            (data2.map((i)=> 
                <div className="col">
                    {table(i.title,i.price,i.brand,i.category)}
                </div>))
                 : 0);
}

    return (

        <div style={{margin: 10  }}>
            <div> Comparison </div>
        { data ? (
                <div class= "mt-3 container text-center" >
                    <div class="row">
                        {tableitems()}
                    </div>
                </div>
            )
            :
            (<p> Loading </p>)
}
        </div>
        
    )
}

export default Comparepage;