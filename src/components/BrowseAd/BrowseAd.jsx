import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../../redux/slices/locationSlice'; // Import your action
import map from '../../images/map.png';
import './BrowseAd.css';
import { Button } from '@mui/material';
import { ReactComponent as SriLankaMapSVG } from '../../images/lk.svg'; // Import the SVG map

const BrowseAd = () => {
  const dispatch = useDispatch();

  // Access the Redux store state
  const { locations, loading, error } = useSelector((state) => state.locations);
  const [hoveredDistrict, setHoveredDistrict] = useState('');

  // Dispatch action to fetch locations when the component mounts
  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  // Helper function to split the locations into 5 rows
  const chunkLocations = (locations, chunkSize) => {
    let result = [];
    for (let i = 0; i < locations.length; i += chunkSize) {
      result.push(locations.slice(i, i + chunkSize));
    }
    return result;
  };

  // Chunk the locations into 5 rows
  const rows = chunkLocations(locations, 5);

  
  // Handle hover events to update the hovered district
  const handleMouseEnter = (districtName) => {
    setHoveredDistrict(districtName); // Only set the district name, not the event
  };

  const handleMouseLeave = () => {
    setHoveredDistrict('');
  };

  // Handle click on the districts in the map
  const handleDistrictClick = (districtName) => {
    // Logic to show ads related to the selected district
    console.log(`District clicked: ${districtName}`);
    // You can add logic to filter ads based on districtName or navigate to a specific page
  };

  const handleClick = (event) => {
    // Handle click events on specific districts in the SVG
    const districtName = event.target.id;
    if (districtName) {
      handleDistrictClick(districtName); // Trigger action when district is clicked
    }
  };
  return (
    <>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        Browse Advertisement By Location
      </h3>

      <br />

      <div className="browseAd-container">
      <div className="img-div">
          {/* Replace image with SVG map */}
          <div style={{ width: '100%', height: 'auto' }}>
            <SriLankaMapSVG
              style={{ width: '100%', height: '450px' }}
              onClick={handleClick}  // Add click handler to interact with districts
              onMouseEnter={(e) => handleMouseEnter(e.target.id)} // Pass district name to hover handler
              onMouseLeave={handleMouseLeave} // Reset hover effect
            />
          </div>
        </div>
        {/* Display the hovered district name */}
        {hoveredDistrict && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h4>Hovered District: {hoveredDistrict}</h4>
          </div>
        )}
        <div className="district-div">
          <div className="district-subdiv">
            <div>
              <h4
                style={{
                  textAlign: 'center',
                }}
              >
                Districts
              </h4>
              <hr style={{ marginBottom: '40px', borderColor: '#4343f95b' }} />
              <div className="district-content">
                {/* Check if loading or error */}
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  rows.map((row, rowIndex) => (
                    <div className="district-row" key={rowIndex}>
                      {row.map((district, index) => (
                        <div className="district-column" key={index}>
                          <p>{district.title}</p> {/* Assuming 'name' is the property of each district */}
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: ' 40px 0px 10px',
                }}
              >
                <Button className="btn">View All Ads</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseAd;
