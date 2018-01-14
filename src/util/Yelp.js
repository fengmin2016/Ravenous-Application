const apiKey = 'wiLT9_uG0aIEFMNeRZfNA3WsyyNACwjQ_oV-fJLvv7d8wd82UoTd4rn0jOgOVqZFz9HtaUj2ZDjPnMWT1qw9PFrxg3ERsbY2MO7cVfJ8O7TECHSYLsjT-OsX_aRbWnYx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
