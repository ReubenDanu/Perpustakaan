import React from 'react'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import './footer.css'
export default function Footer(){
	return(
		<>
			<footer className="section footer">
					<div className="footer__1">
							<span>Media links:</span>
						<ul>
							<li>
							<a href="www.instagram.com" target="_blank"><UilInstagram className="footer__icon"/> Instagram</a>
							</li>
							<li>
							<a href="www.facebook.com" target="_blank"><UilFacebookF className="footer__icon"/> Facebook</a>
							</li>
							<li>
							<a href="https://github.com/ReubenDanu" target="_blank" rel="noreferrer"><UilGithubAlt className="footer__icon"/> Github</a>
							</li>
						</ul>
					</div>
					<div className="footer__2">
						<p>Perpustakaan.ku adalah website baca buku gratis. Baca Sekarang!</p>
					</div>
			</footer>
		</>
	)
}