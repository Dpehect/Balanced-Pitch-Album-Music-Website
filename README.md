# Balanced-Pitch-Album-Music-Website

Balanced Pitch icin hazirlanmis, album ve muzik odakli bir React/Vite web sitesidir. Projenin amaci, sanatci kimligini one cikaran, GSAP animasyonlariyla desteklenen, muzik calar deneyimi sunan ve Vercel uzerinde hizli sekilde yayinlanabilen modern bir tanitim sitesi saglamaktir.

## Proje Ozeti

Bu uygulama tek sayfa uygulama mantiginda calisan, cok rotali bir React arayuzudur. Ana sayfa sanatci tanitimi, parallax gorseller, muzik oynatici, album/icerik vurgulari ve destekleyici kurumsal marka bilgisini icerir. Proje Balanced Pitch sanatci adini merkeze alir ve SoftBridge Solutions destegini footer/copyright ve hero destek metni uzerinden gosterir.

## Teknik Yigin

- React 18.3.1
- Vite 5.4.x
- React Router 7
- GSAP 3 ve ScrollTrigger
- Framer Motion
- Lenis ve @studio-freight/react-lenis
- CSS modules yerine component bazli klasik CSS dosyalari
- Statik asset servisleme icin Vite public dizini

## Mimari

```text
src/
  App.jsx                         Route ve document title yonetimi
  main.jsx                        React uygulama girisi
  index.css                       Global stiller ve font tanimlari
  contexts/
    MusicPlayerContext.jsx        Global muzik player state'i
  components/
    Menu/                         Navigasyon ve animasyonlu menu
    Footer/                       Footer, copyright ve iletisim alani
    GlobalMusicPlayer/            Sayfalar arasi global muzik oynatici
    MusicPlayer/                  Lokal muzik oynatici UI'i
    ParallaxImage/                Scroll tabanli gorsel hareketleri
    Transition/                   Sayfa gecis animasyonlari
  pages/
    home/                         Ana landing deneyimi
    about/                        Hakkinda ve ekip icerigi
    solutions/                    Cozumler ve hizmet anlatimi
    updates/                      Haber/guncelleme icerigi
    contact/                      Iletisim sayfasi
public/
  songs/                          MP3 ve kapak gorselleri
  home/, about/, solutions/       Sayfa gorsel assetleri
  logo.png, logo-dark.png         Logo ikonlari
```

## Ozellikler

- Scroll tabanli parallax image davranislari
- GSAP ScrollTrigger ile sekans animasyonlari
- Framer Motion ile route transition akisi
- Global muzik oynatici state yonetimi
- React Router ile client-side routing
- Vite tabanli hizli development server
- Vercel icin SPA fallback rewrite ayari
- Responsive layout ve mobil breakpoint'ler

## Kurulum

```bash
npm install
```

## Gelistirme

```bash
npm run dev
```

Varsayilan Vite adresi:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

Build cikisi:

```text
dist/
```

## Preview

```bash
npm run preview
```

## Vercel Deploy

Bu repo Vercel icin hazirdir. `vercel.json` dosyasi su ayarlari kullanir:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Framework: `vite`
- SPA route fallback: tum route istekleri `index.html` uzerinden cozulur

Vercel uzerinden deploy etmek icin:

1. GitHub reposunu Vercel'e import edin.
2. Framework preset olarak Vite secili kalabilir.
3. Build ve output ayarlari `vercel.json` tarafindan uygulanir.
4. Deploy islemini baslatin.

## Icerik ve Marka

- Sanatci adi: Balanced Pitch
- Destekleyen marka: SoftBridge Solutions
- Author metadata: Yunus Emre Gurlek
- Footer copyright: `© 2026 SoftBridge Solutions`

## Onemli Dosyalar

- `src/App.jsx`: Route title'lari ve sayfa route yapisi
- `src/pages/home/Home.jsx`: Hero, sanatci adi ve ana sayfa icerigi
- `src/pages/home/Home.css`: Hero destek metni ve ana sayfa stilleri
- `src/contexts/MusicPlayerContext.jsx`: Muzik listesi ve player state'i
- `vercel.json`: Vercel build ve SPA rewrite ayarlari

## Lisans

MIT

## Author

Yunus Emre Gurlek
