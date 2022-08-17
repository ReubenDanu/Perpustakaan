import React from 'react';
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilSignalAlt3 } from '@iconscout/react-unicons'
import './about.css'

export default function About(){
	return(
		<>
			<section className="section about" id="about">
				<h1 className="about__title">Lebih banyak Tentang Membaca</h1>
				<div className="row">
					<div className="card__box box__1">
						<UilGraduationCap className="icon__about"/>
						<p className="p__content">
						Membaca buku merupakan aktivitas yang menyenangkan
						jadikan membaca buku sebagai jembatan ilmu.
						Sumber ilmu yang amat kaya tersedia di lembaran kertas
						membaca tidak hanya di sekolah tetapi di setiap kehidupanmu
						juga membaca
						</p>
					</div>
					<div className="card__box box__2">
						<UilSignalAlt3 className="icon__about"/>
						<p className="p__content">
							60 juta penduduk Indonesia memiliki gadget, 
							atau urutan kelima dunia terbanyak kepemilikan 
							gadget. Lembaga riset digital marketing Emarketer
							memperkirakan pada 2018 jumlah pengguna aktif 
							smartphone di Indonesia lebih dari 100 juta orang.
						</p>
					</div>

				</div>
			</section>

		</>

	)
}