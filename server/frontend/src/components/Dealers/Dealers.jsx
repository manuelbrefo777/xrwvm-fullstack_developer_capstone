import React, { useState, useEffect } from 'react';
import "./Dealers.css";
import "../assets/style.css";
import Header from '../Header/Header';
import review_icon from "../assets/reviewicon.png";

const Dealers = () => {
  const [allDealers, setAllDealers] = useState([]); // The master list
  const [dealersList, setDealersList] = useState([]); // The list shown on screen

  let dealer_url = "/djangoapp/get_dealers";

  // Function to handle the searching/filtering locally
  const handleSearch = (searchText) => {
    const filtered = allDealers.filter(dealer => 
      dealer.state.toLowerCase().includes(searchText.toLowerCase())
    );
    setDealersList(filtered);
  };

  const get_dealers = async () => {
    const res = await fetch(dealer_url, {
      method: "GET"
    });
    const retobj = await res.json();
    if (retobj.status === 200) {
      let all_dealers = Array.from(retobj.dealers);
      setAllDealers(all_dealers); // Store the full list once
      setDealersList(all_dealers); // Show the full list initially
    }
  };

  useEffect(() => {
    get_dealers();
  }, []);

  let isLoggedIn = sessionStorage.getItem("username") != null;

  return (
    <div>
      <Header />
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dealer Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Zip</th>
            <th>
              <input 
                type="text" 
                placeholder="Search State..." 
                onChange={(e) => handleSearch(e.target.value)} 
                style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </th>
            {isLoggedIn && <th>Review Dealer</th>}
          </tr>
        </thead>
        <tbody>
          {dealersList.map(dealer => (
            <tr key={dealer['id']}>
              <td>{dealer['id']}</td>
              <td><a href={'/dealer/' + dealer['id']}>{dealer['full_name']}</a></td>
              <td>{dealer['city']}</td>
              <td>{dealer['address']}</td>
              <td>{dealer['zip']}</td>
              <td>{dealer['state']}</td>
              {isLoggedIn && (
                <td>
                  <a href={`/postreview/${dealer['id']}`}>
                    <img src={review_icon} className="review_icon" alt="Post Review" />
                  </a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dealers;