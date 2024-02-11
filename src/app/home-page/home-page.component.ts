import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


  new_item: any;
  update_series: any;

  constructor (private router: Router){
    this.new_item = [
      {
      id: 1,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 2,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 3,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 4,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 5,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 6,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 7,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 8,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 9,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 10,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
      {
      id: 11,
      quality: 1080,
      time: "01:24:00",
      zhanr: "معمایی",
      kargardan: "Nolan",
      stars: "",
      country:"USA",
      m_score: 78
    },
  ];

  this.update_series = [
    {
      id: 1,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 2,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 3,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 4,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 5,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 6,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 7,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 8,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 9,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 10,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 11,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 12,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 13,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    },
    {
      id: 14,
      e_number: 9,
      s_number: ' فصل دوم ',
      img_path: '../../assets/images/WhatIfseries.jpg'
    }
  ];
  }

}
