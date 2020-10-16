import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"complimentary cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur."
            },
            {
                icon:<FaShuttleVan/>,
                title:"airport and beach shuttles",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur."
            },
            {
                icon:<FaHiking/>,
                title:"various long hiking trails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur."
            },
            {
                icon:<FaBeer/>,
                title: "best beer in area",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur."
            }
        ]
    }
    render() {
        return ( 
         <section className="services">
             <div className="services-center">
             <Title title="services" className="services-title"/>
                 {this.state.services.map((item, index)=>{
                    return (
                        <article key={index} className="service">
                            <span>
                                {item.icon}
                            </span>
                            <h6>
                                {item.title}
                            </h6>
                            <p>
                                {item.info}
                            </p>
                        </article>
                    )
                 })}
             </div>

         </section>
          
        )
    }
}