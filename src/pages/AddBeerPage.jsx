import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription]  = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeerReqBody = {
                                name,
                                tagline,
                                description,
                                first_brewed: firstBrewed,
                                brewers_tips: brewersTips,
                                attenuation_level: attenuationLevel,
                                contributed_by: contributedBy
                            }
        
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeerReqBody)
             .then(resp => {
                setName('');
                setTagline('')
                setDescription('')
                setFirstBrewed('')
                setBrewersTips('')
                setAttenuationLevel(undefined)
                setContributedBy('')
                console.log('beer id ', resp);
                //Navigate to beers page
                // navigate(`/beers/${resp.data._id}`);
                navigate(`/beers`);
             })
             .catch(err=> console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <br></br>
            <label>Tagline</label>
            <input
                type="text"
                name="tagline"
                onChange={(e) => setTagline(e.target.value)}
                value={tagline}
            />
            <br></br>
            <label>Description</label>
            <textarea 
                type="text"
                name="description"
                rows="4" cols="50"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <br></br>
            <label>First Brewed</label>
            <input 
                type="text"
                name="first_brewed"
                onChange={(e) => setFirstBrewed(e.target.value)}
                value={firstBrewed}    
            />
            <br></br>
            <label>Brewer's Tips</label>
            <input
                type="text"
                name="brewers_tips"
                onChange={(e) => setBrewersTips(e.target.value)}
                value={brewersTips}
             />
             <br></br>
             <label>Attenuation Level</label>
             <input 
                type="number"
                name="attenuation_level"
                onChange={(e) => setAttenuationLevel(e.target.value)}
                value={attenuationLevel}
             />
            <br></br>
            <label>Contributed By</label>
            <input
                type="text"
                name="contributed_by"
                onChange={(e) => setContributedBy(e.target.value)}
                value={contributedBy}
             />
            <button type="submit">Add Beer</button>

        </form>
    )

}

export default AddBeerPage;
