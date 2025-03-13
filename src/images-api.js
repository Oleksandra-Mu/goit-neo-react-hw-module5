import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesWithTopic = async (topic, page) => {
  const params = {
    client_id: "o660wDUuzzr-VTTtbOL1LWNYaInQTd9mKBQ6sBw_1dk",
    query: topic,
    orientation: "landscape",
    per_page: 16,
    page: page,
  };
  const response = await axios.get(`/search/photos`, { params });
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
