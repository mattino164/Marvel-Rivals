// src/components/Footer.jsx

import React from 'react'
import '../../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* 
          CENTER SECTION:
          Contains the brand logos (NetEase + Marvel) 
          and all legal text + footer links.
        */}
        <div className="footer-center">
          {/* Partner logos */}
          <div className="footer-logos">
            <img
              src="/assets/footerImg/netease.png"
              alt="NetEase Games"
              className="footer-logo"
            />
            <img
              src="/assets/footerImg/marvel.png"
              alt="Marvel"
              className="footer-logo"
            />
          </div>

          {/* Legal text and navigation links */}
          <div className="footer-text">
            <p>©2025 MARVEL</p>
            <p>©1997–2025 NetEase, Inc. All Rights Reserved</p>

            <div className="footer-links">
              <a href="#">Term of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>

        {/* 
          ESRB RATING BADGE:
          Positioned on the right side independently
          (usually fixed or absolutely placed via CSS)
        */}
        <img
          src="/assets/footerImg/teen-esrb.png"
          alt="ESRB Rating"
          className="footer-esrb"
        />
      </div>
    </footer>
  )
}
