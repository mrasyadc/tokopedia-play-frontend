# tokopedia-play-frontend
Final Project of Generasi GIGIH 3.0 by GoTo Impact by Muhammad Rasyad Caesarardhi (GG3FSGP0448)

- Frontend

The live apps are available here on [tokopedia-play-frontend](https://tokopedia-play-ten.vercel.app) or [https://tokopedia-play-ten.vercel.app](https://tokopedia-play-ten.vercel.app). 

Repository for front-end available here on [tokopedia-play-frontend repo](https://github.com/mrasyadc/tokopedia-play-frontend)

- Backend
  
Backend Server are available here on [tokopedia-play-backend](https://final-tokopedia-play-backend-production.up.railway.app/api) or [https://final-tokopedia-play-backend-production.up.railway.app](https://final-tokopedia-play-backend-production.up.railway.app/api). 

Repository for back-end system available here on [final-tokopedia-play-backend repo](https://github.com/mrasyadc/final-tokopedia-play-backend)

## What is Tokopedia Play?

tokopedia-play-frontend is clone of [Tokopedia Play](https://www.tokopedia.com/play/channels)

Tokopedia Play hadir sebagai wadah hiburan untuk menikmati tayangan seru seperti live shopping, olahraga, memasak, dan berkreasi.

Play adalah sebuah streaming platform yang dapat diakses melalui aplikasi Tokopedia. Pengguna dapat menikmati berbagai video menarik mengenai live shopping dengan promo khusus, acara memasak, berkreasi, dan olahraga yang akan ditayangkan secara live ataupun siaran ulang. Pengguna juga dapat membeli langsung produk-produk yang terdapat pada tayangan di Tokopedia Play.


This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Features

tokopedia-play-frontend app have some features described here:
- Homepage of all videos available
  <img width="1410" alt="image" src="https://github.com/mrasyadc/tokopedia-play-frontend/assets/56964497/2c0b9d96-92ab-438b-9f0a-5254a5ed914d">

- Details products from the video along with the embedded video
  <img width="1081" alt="image" src="https://github.com/mrasyadc/tokopedia-play-frontend/assets/56964497/1c036c3e-e6a2-4279-baf8-a0ae4865b6d9">

- Comments on each video!
  <img width="1081" alt="image" src="https://github.com/mrasyadc/tokopedia-play-frontend/assets/56964497/c5b8a074-b88c-42f6-8b20-136fbf902278">

- Dark mode and light mode support!
  <img width="1081" alt="image" src="https://github.com/mrasyadc/tokopedia-play-frontend/assets/56964497/f104d673-54b1-412c-9db8-3b8eb6a44c7c">


## Installation

Create a new copy `.env` file from `.env.example` provided. it should consist the backend app that provides data. 

Here you can access the [Backend Repo](https://github.com/mrasyadc/final-tokopedia-play-backend). Or you can directly accessed this link [https://github.com/mrasyadc/final-tokopedia-play-backend](https://github.com/mrasyadc/final-tokopedia-play-backend)

Use the package manager [npm](https://www.npmjs.com) to install tokopedia-play-frontend.

```bash
npm install
```

## Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

# Database Structure
Database are divided into 3 collections (Comment, Product, and Video)

<img width="422" alt="image" src="https://github.com/mrasyadc/final-tokopedia-play-backend/assets/56964497/7893e3db-abae-4074-9efa-8191b072d9f3">

- 1 video have many comments but not included in the document inside the video document but are separated. 1 comment are responsible for 1 comment inside a video. a comment is linked to a video.
- 1 video document can have many products. a document in video collection have array of product object ID linked to the product.

<img width="902" alt="image" src="https://github.com/mrasyadc/tokopedia-play-backend/assets/56964497/42465368-c220-4c5e-aa20-f079e6901a48">

<img width="902" alt="image" src="https://github.com/mrasyadc/tokopedia-play-backend/assets/56964497/98852729-bf4c-4880-aa47-78ab5bf5e4ba">

<img width="902" alt="image" src="https://github.com/mrasyadc/tokopedia-play-backend/assets/56964497/27448864-a882-46fb-a0bd-6d0c265a373f">


