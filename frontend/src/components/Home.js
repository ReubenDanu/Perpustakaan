import React from "react";
import "./home.css";
import HomeImg1 from "../images/index2.png";
import HomeImg2 from "../images/test.png";
export default function Home() {
    return (
        <>
            <section className="section">
                <div className="row row__1">
                    <div className="box__1">
                        <h1 className="section_tile">
                            Cara Baru Untuk Membaca
                        </h1>
                        <p className="p__content">
                            Ayo membaca buku di Perpustakaan online. Jaman
                            sekarang masih baca buku tatap muka? mulai dari
                            sekarang baca buku lewat online aja
                        </p>
                        <a href="#login" className="button__home">
                            Buat Akun
                        </a>
                    </div>
                    <div className="box__2">
                        <img src={HomeImg1} alt="Book.png" />
                    </div>
                </div>
                <div className="row row__2">
                    <div className="box__3">
                        <h1 className="section_tile">Perpustakaan.ku</h1>
                        <p className="p__content">
                            Perpustakaan.ku adalah cara kita bisa mengakses
                            berbagai ilmu dengan mudah dengan banyaknya buku
                            yang bisa kita baca dengan mudah!
                        </p>
                        <a href="#login" className="button__home">
                            Baca Sekarang
                        </a>
                    </div>
                    <div className="box__4">
                        <img src={HomeImg2} alt="read.png" />
                    </div>
                </div>
            </section>
        </>
    );
}
