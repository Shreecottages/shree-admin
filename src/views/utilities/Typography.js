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
const initialData = [
  {
    id: 1,
    category: "Decoration",
    img: null,
    desc: "Decoration image",
  },
  {
    id: 2,
    category: "Decoration",
    img: null,
    desc: "Decoration image",
  },
  {
    id: 3,
    category: "Decoration",
    img: null,
    desc: "Decoration image",
  },
  {
    id: 4,
    category: "Decoration",
    img: null,
    desc: "Decoration image",
  },
]

// const [newData, setNewData] = useState({
//   category:"",
//   img:"",
//   desc:"",
// });
const categories = ["Resort","Decoration", "Banquet Hall", "Conference Hall", "Swimming Pool"];

const Typography = () =>{

  // const [data, setData] = useState(initialData);
  const [data, setData] = useState(() => {
    // Load initial data from local storage, or use initialData if not available
    const storedData = JSON.parse(localStorage.getItem('tableData'));
    return storedData || initialData;
  });
  const [newItem, setNewItem] = useState({ category: categories[0], img: null, desc: '' });
  // const [lastUsedId, setLastUsedId] = useState(initialData.length);

  const [lastUsedId, setLastUsedId] = useState(() => {
    // Load last used ID from local storage, or use initialData length if not available
    const lastUsedId = localStorage.getItem('lastUsedId');
    return lastUsedId ? parseInt(lastUsedId, 10) : initialData.length;
  });

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem('tableData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    // Save last used ID to local storage whenever it changes
    localStorage.setItem('lastUsedId', lastUsedId);
  }, [lastUsedId]);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const selectedFile = event.target.files[0];
      // If a file is selected, create a preview URL and store it in the state
      setNewItem({ ...newItem, [name]: selectedFile, img: URL.createObjectURL(selectedFile) });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((prevData) => [...prevData, { ...newItem, id: lastUsedId + 1 }]);
    setLastUsedId((prevId) => prevId + 1);
    setNewItem({ category: categories[0], img: null, desc: '' });
  };


  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
return(
  <MainCard title="Upload Images">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={6} sm={8} md={12}>
          <form onSubmit={handleSubmit}>
          <Grid container direction="row" spacing={1} sx={{alignItems:{xs:"",md:"center"}}}>
            <Grid item>
              <Grid container direction="column">
              <label htmlFor="category" style={{fontSize:"1rem", marginBottom:"0.5rem", fontWeight:"bold", color:"#4527A0"}}>Image Category</label>
              <select
                name="category"
                value={newItem.category}
                onChange={handleInputChange}
                style={{
                  backgroundColor: '#EDE7F6',
                  color: '#4527A0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize:'0.9rem',
                  padding: '4px 6px'
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <label htmlFor='img' style={{fontSize:"1rem", marginBottom:"0.5rem", fontWeight:"bold", color:"#4527A0"}}>Browse Image</label>
                <input type="file" placeholder="Upload Image" name="img" onChange={handleInputChange} style={{
                  // backgroundColor: '#B39DDB',
                  color: '#4527A0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize:'0.9rem',
                  // padding: '4px 6px'
                }}/>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <label htmlFor='desc' style={{fontSize:"1rem", marginBottom:"0.5rem", fontWeight:"bold", color:"#4527A0"}}>Image Description</label>
                <input type="text" name="desc" value={newItem.desc} onChange={handleInputChange} style={{
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
                  <th>Category</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {data.map(item => (
                <tr key={item.id} style={{justifyContent:"center",textAlign:"center"}}>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item.img && <img src={item.img} alt="Uploaded" width="90%" />}</td>
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

export default Typography;
