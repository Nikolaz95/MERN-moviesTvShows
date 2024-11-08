import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


//import css
import "./ActorsDetails.css";

//import img 
import DefaultFav from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../assets/icons/icon-like.png"


//import components
import Buttons from '../../layouts/Buttons/Buttons';
import TitleName from '../../../hooks/TitleName/TitleName';
import MoviesOfActor from './MoviesOfActor/MoviesOfActor';
import BtnGoBack from '../../layouts/Buttons/BtnGoBack/BtnGoBack';



const ActorsDetails = () => {
    const params = useParams();
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiActorsDetails = `https://api.themoviedb.org/3/person/${params.id}?api_key=${apiKey}`;
    console.log(apiActorsDetails);
    const [isOnWatchList, setIsOnWatchList] = useState(false);

    const handleWatchList = () => {
        setIsOnWatchList(!isOnWatchList);
    }

    // Fetch data
    const { data, loading, error } = useFetch(apiActorsDetails);

    // Check if data or results are available
    const actorsDetails = data || {}; // Safely access the 'results' array
    console.log(actorsDetails);

    return (
        <>
            <TitleName title={actorsDetails?.name} />
            <div className="erorTopContent">
                <BtnGoBack />
            </div>
            <section>
                <div className="actorDetails-topContent">
                    <div className="actorDetailsTop-left">
                        <div className="actorDetailsTop-img">
                            <img src={`https://image.tmdb.org/t/p/w500${actorsDetails?.profile_path}`}
                                alt="" title={actorsDetails?.name} className='Actors-img' />
                        </div>
                        <div className="actorDetailsTop-info">
                            <div className="details-Actors">
                                <div className="details-addbutons">
                                    <Buttons onClick={handleWatchList}
                                        variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}
                                        icon={isOnWatchList ? AddFavoritList : DefaultFav}>
                                        <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                    </Buttons>
                                </div>
                                <h1>Personal Info :</h1>
                                <div>
                                    <h1>Know for:</h1>
                                    <p>{actorsDetails?.known_for_department}</p>
                                </div>
                                <div>
                                    <h1>Gender:</h1>
                                    <p>{actorsDetails?.gender === 2 ? 'Man' : actorsDetails?.gender === 1 ? 'Female' : 'Not specified'}</p>
                                </div>
                                <div>
                                    <h1>Birthday:</h1>
                                    <p>{actorsDetails?.birthday}</p>
                                </div>
                                {actorsDetails?.deathday && (
                                    <div>
                                        <h1>Death day:</h1>
                                        <p>{actorsDetails.deathday}</p>
                                    </div>
                                )}
                                <div>
                                    <h1>Place of Birth:</h1>
                                    <p>{actorsDetails?.place_of_birth}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="actorDetailsTop-right">
                        <h1 className="Actors-name">{actorsDetails?.name}</h1>
                        <h1 className="Actors-bio">Biograph</h1>
                        <p>{actorsDetails?.biography}</p>
                    </div>
                </div>
                <MoviesOfActor actorsDetails={actorsDetails} params={params} />
            </section>
        </>
    )
}

export default ActorsDetails