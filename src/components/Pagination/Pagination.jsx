import React from "react";
import cl from './Pagination.module.css'
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
const Pagination = function (props) {
    function splitNext() {
        props.setSplit(props.split + 8)
      }
      function splitPrev() {
        props.setSplit(props.split - 8)
      }  
    
    return (
        <div className={cl.pagination}>
            {props.split > 0 ?  <button className={cl.prevbtn} onClick={splitPrev}><Icon path={mdiArrowLeft} size={1}/></button> : null}
            {props.split < 32 ? <button className={cl.nextbtn} onClick={splitNext}><Icon path={mdiArrowRight} size={1}/></button> : null}
    
       
        </div>
        
    );
};
export default Pagination;
