import React from "react";
import './section1.css';
export default function Section1 (){
    return(
        <>
            <div className="content"> 
                <h1>Perpuskaan</h1>
                <p>Mari kita membaca bersama di Perpuskaan</p>
                <div>            
                    <button type="button"><span></span>Baca Buku</button>
                    <button type="button"><span></span>Cari Buku</button>
                    <button type="button"><span></span>update</button>
                    <button type="button"><span></span>hapus Buku</button>
                    <button type="button"><span></span>tambah Buku</button>
                </div>
            </div>
            <div>
            <div className="about" id="about">
            
            </div>
        </div>
      </>
    )
}