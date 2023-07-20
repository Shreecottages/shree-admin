import { Button, Grid } from '@mui/material';
// import MuiTypography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
// import { Form } from 'formik';

// ==============================|| Data ||============================== //
const initialDataV = [
  {
    id: 1,
    link: "https://youtu.be/elDjJ8Qapz8",
    desc: "Sangeet Video",
  },
  {
    id: 2,
    link: "https://youtu.be/elDjJ8Qapz8",
    desc: "Sangeet Video",
  },
  {
    id: 3,
    link: "https://youtu.be/elDjJ8Qapz8",
    desc: "Sangeet Video",
  },
]

const MaterialIcons = () =>{

  // const [data, setData] = useState(initialData);
  const [datav, setDatav] = useState(() => {
    // Load initial data from local storage, or use initialData if not available
    const storedDataV = JSON.parse(localStorage.getItem('tableDataV'));
    return storedDataV || initialDataV;
  });
  const [newItemv, setNewItemv] = useState({ link: '', desc: '' });
  // const [lastUsedId, setLastUsedId] = useState(initialData.length);

  const [lastUsedIdV, setLastUsedIdV] = useState(() => {
    // Load last used ID from local storage, or use initialData length if not available
    const lastUsedIdV = localStorage.getItem('lastUsedIdV');
    return lastUsedIdV ? parseInt(lastUsedIdV, 10) : initialDataV.length;
  });

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem('tableDataV', JSON.stringify(datav));
  }, [datav]);

  useEffect(() => {
    // Save last used ID to local storage whenever it changes
    localStorage.setItem('lastUsedIdV', lastUsedIdV);
  }, [lastUsedIdV]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItemv({ ...newItemv, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setDatav((prevDatav) => [...prevDatav, { ...newItemv, id: lastUsedIdV + 1 }]);
    setLastUsedIdV((prevId) => prevId + 1);
    setNewItemv({ link: '', desc: '' });
    console.log(datav);
  };


  const handleDelete = (itemIdV) => {
    setDatav((prevDatav) => prevDatav.filter((item) => item.id !== itemIdV));
  };
return(
  <MainCard title="Upload Images">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={6} sm={8} md={12}>
          <form onSubmit={handleSubmit}>
          <Grid container direction="row" spacing={1} sx={{alignItems:{xs:"",md:"center"}}}>
            <Grid item>
              <Grid container direction="column">
                <label htmlFor='img' style={{fontSize:"1rem", marginBottom:"0.5rem", fontWeight:"bold", color:"#4527A0"}}>Video Youtube Link</label>
                <input type="text" name="link" value={newItemv.link} onChange={handleInputChange} style={{
                  backgroundColor: '#EDE7F6',
                  color: '#4527A0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize:'0.9rem',
                  padding: '4px 6px'
                }}/>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <label htmlFor='desc' style={{fontSize:"1rem", marginBottom:"0.5rem", fontWeight:"bold", color:"#4527A0"}}>Video Description</label>
                <input type="text" name="desc" value={newItemv.desc} onChange={handleInputChange} style={{
                  backgroundColor: '#EDE7F6',
                  color: '#4527A0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize:'0.9rem',
                  padding: '4px 6px'
                }}/>
              </Grid>
            </Grid>
            <Grid item>
              <input type="submit" placeholder='Upload' style={{
                  backgroundColor: '#EDE7F6',
                  color: '#4527A0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize:'0.9rem',
                  padding: '6px 10px',
                  margin: '0.5rem'
                }}/>
              {/* <Button variant='contained' type='submit'>Upload</Button> */}
            </Grid>
          </Grid>
          </form>
      </Grid>
      <Grid item xs={12} sm={12}>
        <SubCard title="">
          <Grid container direction="column">
            <Grid item>
            <table style={{width:"100%"}}>
              <thead>
                <tr style={{color:"#1565C0"}}>
                  <th>No.</th>
                  <th>Video Link</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {datav.map(item => (
                <tr key={item.id} style={{justifyContent:"center",textAlign:"center"}}>
                  <td>{item.id}</td>
                  <td>{item.link}</td>
                  <td>{item.desc}</td>
                  <td><Button sx={{color:"crimson"}} onClick={() => handleDelete(item.id)}>Delete</Button></td>
                </tr>
              ))}
              </tbody>
            </table>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);
} 

export default MaterialIcons;
