import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer VpxRJfXqFx34ndmDCT_YFEM6JrhiVjXFVYuBzhTKV_tqlsZI7oIltJoezZ26qphzcCp-F4ItavyY0xYOFYHgTLoCrHR3rd08Y3mWfHw86nTAngW4615XeP6j0mN4XXYx'
    }
})

