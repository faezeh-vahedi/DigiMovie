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
  film_category: any;
  series_category: any;

  constructor(private router: Router) {
    this.new_item = [
      {
        id: 1,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 2,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 3,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 4,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 5,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 6,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 7,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 8,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 9,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 10,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
        m_score: 78
      },
      {
        id: 11,
        quality: 1080,
        time: "01:24:00",
        zhanr: "معمایی",
        kargardan: "Nolan",
        stars: "",
        country: "USA",
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

    this.film_category = [
      {
        id: 1,
        name: 'درام',
        count: 4220
      },
      {
        id: 2,
        name: 'هیجان انگیز',
        count: 2325
      },
      {
        id: 3,
        name: 'کمدی',
        count: 2206
      },
      {
        id: 4,
        name: 'اکشن',
        count: 2124
      },
      {
        id: 5,
        name: 'ماجراجویی',
        count: 1383
      },
      {
        id: 6,
        name: 'جنایی',
        count: 1305
      },
      {
        id: 7,
        name: 'ترسناک',
        count: 1103
      },
      {
        id: 8,
        name: 'عاشقانه',
        count: 1000
      },
      {
        id: 9,
        name: 'رازآلود',
        count: 889
      },
      {
        id: 10,
        name: 'فانتزی',
        count: 853
      },
      {
        id: 11,
        name: 'علمی تخیلی',
        count: 839
      },
      {
        id: 12,
        name: 'انیمیشن',
        count: 664
      },
      {
        id: 11,
        name: 'خانوادگی',
        count: 651
      },
      {
        id: 13,
        name: 'بیوگرافی',
        count: 513
      },
      {
        id: 14,
        name: 'تاریخی',
        count: 365
      },
      {
        id: 15,
        name: 'جنگی',
        count: 275
      },
      {
        id: 16,
        name: 'ورزشی',
        count: 169
      },
      {
        id: 17,
        name: 'آهنگ',
        count: 166
      },
      {
        id: 18,
        name: 'رمانتیک',
        count: 164
      },
      {
        id: 19,
        name: 'موزیکال',
        count: 152
      },
      {
        id: 20,
        name: 'وسترن',
        count: 94
      },
      {
        id: 21,
        name: 'مستند',
        count: 83
      },
      {
        id: 22,
        name: 'موسیقی',
        count: 37
      },
      {
        id: 23,
        name: 'معمایی',
        count: 33
      },
      {
        id: 24,
        name: 'film-noir',
        count: 21
      },
      {
        id: 25,
        name: 'فیلم کوتاه',
        count: 15
      },
      {
        id: 26,
        name: 'استندآپ کمدی',
        count: 12
      },
      {
        id: 27,
        name: 'کوتاه',
        count: 10
      },
      {
        id: 28,
        name: 'انیمیشن کوتاه',
        count: 6
      },
      {
        id: 29,
        name: 'Talk-Show',
        count: 4
      },
      {
        id: 30,
        name: 'reality-tv',
        count: 3
      },
      {
        id: 31,
        name: 'اجتماعی',
        count: 2
      },
      {
        id: 32,
        name: 'News',
        count: 1
      },
    ];

    this.series_category = [
      {
        id: 1,
        name: 'درام',
        count: 4220
      },
      {
        id: 2,
        name: 'هیجان انگیز',
        count: 2325
      },
      {
        id: 3,
        name: 'کمدی',
        count: 2206
      },
      {
        id: 4,
        name: 'اکشن',
        count: 2124
      },
      {
        id: 5,
        name: 'ماجراجویی',
        count: 1383
      },
      {
        id: 6,
        name: 'جنایی',
        count: 1305
      },
      {
        id: 7,
        name: 'ترسناک',
        count: 1103
      },
      {
        id: 8,
        name: 'عاشقانه',
        count: 1000
      },
      {
        id: 9,
        name: 'رازآلود',
        count: 889
      },
      {
        id: 10,
        name: 'فانتزی',
        count: 853
      },
      {
        id: 11,
        name: 'علمی تخیلی',
        count: 839
      },
      {
        id: 12,
        name: 'انیمیشن',
        count: 664
      },
      {
        id: 11,
        name: 'خانوادگی',
        count: 651
      },
      {
        id: 13,
        name: 'بیوگرافی',
        count: 513
      },
      {
        id: 14,
        name: 'تاریخی',
        count: 365
      },
      {
        id: 15,
        name: 'جنگی',
        count: 275
      },
      {
        id: 16,
        name: 'ورزشی',
        count: 169
      },
      {
        id: 17,
        name: 'آهنگ',
        count: 166
      },
      {
        id: 18,
        name: 'رمانتیک',
        count: 164
      },
      {
        id: 19,
        name: 'موزیکال',
        count: 152
      },
      {
        id: 20,
        name: 'وسترن',
        count: 94
      },
      {
        id: 21,
        name: 'مستند',
        count: 83
      },
      {
        id: 22,
        name: 'موسیقی',
        count: 37
      },
      {
        id: 23,
        name: 'معمایی',
        count: 33
      },
      {
        id: 24,
        name: 'film-noir',
        count: 21
      },
      {
        id: 25,
        name: 'فیلم کوتاه',
        count: 15
      },
      {
        id: 26,
        name: 'استندآپ کمدی',
        count: 12
      },
      {
        id: 27,
        name: 'کوتاه',
        count: 10
      }
    ]
  }
}

