import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx';
import HomePage from './components/pages/HomePage/HomePage.jsx';
import ErrorPage from './components/pages/ErrorPage/ErrorPage.jsx';
import Register from './components/pages/Register/Register.jsx';
import SingIn from './components/pages/SingIn/SingIn.jsx';
import MovieDetails from './components/pages/MovieDetails/MovieDetails.jsx';
import AllMovies from './components/pages/AllMovies/AllMovies.jsx';
import ProfileAccountSettings from './components/pages/UserAccount/ProfileAccountSettings/ProfileAccountSettings.jsx';
import UserFavoritList from './components/pages/UserAccount/UserFavoritList/UserFavoritList.jsx';
import UserRatingList from './components/pages/UserAccount/UserRatingList/UserRatingList.jsx';
import UserFavoritActors from './components/pages/UserAccount/UserFavortActors/UserFavoritActors.jsx';
import ListsOfUsers from './components/pages/AdminAccount/ListsOfUsers/ListsOfUsers.jsx';
import DataFact from './components/pages/AdminAccount/DataFact/DataFact.jsx';
import DashBoard from './components/pages/AdminAccount/DashBoard/DashBoard.jsx';
import ProfileUpdate from './components/pages/UserAccount/ProfileUpdate/ProfileUpdate.jsx';
import UploadPicture from './components/pages/UserAccount/UploadPicture/UploadPicture.jsx';
import UpdatePassword from './components/pages/UserAccount/UpdatePassword/UpdatePassword.jsx';
import DeletAccount from './components/pages/UserAccount/DeletAccount/DeletAccount.jsx';
import UserWatchList from './components/pages/UserAccount/UserWatchList/UserWatchList.jsx';
import ActorsDetails from './components/pages/ActorsDetails/ActorsDetails.jsx';
import AllTvShows from './components/pages/AllTvShows/AllTvShows.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />
      },

      {
        path: "/actor/:id",
        element: <ActorsDetails />
      },
      {
        path: "/allMovies",
        element: <AllMovies />
      },

      {
        path: "/allTvShows",
        element: <AllTvShows />
      },

      {
        path: "/singIn",
        element: <SingIn />
      },

      {
        path: "/registration",
        element: <Register />
      },

      /* account components */

      /* admin component */

      {
        path: "/admin/dashBoard",
        element: <DashBoard />
      },

      {
        path: "/admin/listOfUsers",
        element: <ListsOfUsers />
      },

      {
        path: "/admin/dataFacts",
        element: <DataFact />
      },

      /* admin component */


      /* users components */


      {
        path: "/user/settings-Profile",
        element: <ProfileAccountSettings />
      },

      {
        path: "/user/settings-ProfileUpdate",
        element: <ProfileUpdate />
      },

      {
        path: "/user/settings-UploadPicture",
        element: <UploadPicture />
      },

      {
        path: "/user/settings-UpdatePassword",
        element: <UpdatePassword />
      },

      {
        path: "/user/settings-UpdatePassword",
        element: <UpdatePassword />
      },

      {
        path: "/user/settings-DeleteAccount",
        element: <DeletAccount />
      },

      /* users components */

      {
        path: "/user/user-WatchList",
        element: <UserWatchList />
      },

      {
        path: "/user/user-FavoritList",
        element: <UserFavoritList />
      },

      {
        path: "/user/user-RatingList",
        element: <UserRatingList />
      },

      {
        path: "/user/user-FavoritActor",
        element: <UserFavoritActors />
      },


      /* account components */
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
