import React, { useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { GiQueenCrown } from "react-icons/gi";
import Section from './Section';
import axios from 'axios';

function CardsComp() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get("https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections");
        console.log(response.data); // Check the response structure
        setCollections(response.data); // Store the response in state
        setLoading(false); // Stop loading
      } catch (err) {
        setError("Error fetching collections");
        setLoading(false); // Stop loading
      }
    };
  
    fetchCollections();
  }, []);
   // Empty dependency array to run only once when the component mounts

  // Show loading state while data is being fetched
  if (loading) {
    return <div>Loading popular collections...</div>;
  }

  // Show error if the request fails
  if (error) {
    return <div>{error}</div>;
  }

  // Dynamically render cards for each collection
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-10">
      {collections.map((collection) => (
        <div key={collection.symbol} className="h-[270px] w-[300px] bg-[rgb(24,26,29)] rounded-lg flex flex-col items-center mt-10 hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out">
          <img
            src={collection.image}
            className="h-16 w-16 -mt-6 rounded-full border-2 border-white"
            alt={collection.name}
          />
          
          <div className="flex items-center justify-center mt-4 space-x-2">
            <CiStar className='text-gray-600 text-2xl' />
            <div className="text-white font-bold text-sm">{collection.name}</div>
            <GiQueenCrown className='text-xl text-yellow-300 ml-2' />
          </div>

          <div className="mt-2 text-[rgb(53,205,248)] font-bold text-xs tracking-wider">
            {collection.spread} Spread
          </div>
          
          <div className="mt-4 w-full px-4 flex justify-between text-sm">
            <div className="space-y-3">
              <Section main={collection.buyNow} sub="BUY NOW" color="text-[rgb(53,205,248)]" />
              <Section main={collection.listedCount} sub="LISTED #" />
              <Section main={collection.marketCap} sub="MARKET CAP" />
            </div>
            <div className="space-y-3">
              <Section main={collection.sellNow} sub="SELL NOW" color="text-[rgb(255,138,173)]" />
              <Section main={collection.listedPercentage} sub="LISTED %" />
              <Section main={collection.volume} sub="24H VOLUME" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsComp;