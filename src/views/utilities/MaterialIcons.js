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

const MaterialIcons = () => {

  // const [data, setData] = useState(initialData);
  const [datav, setDatav] = useState();

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

    async function getData() {
      let data = await fetch("http://127.0.0.1:8000/api/v1/getvideo");
      data = await data.json();
      console.log(data.data);
      setDatav(data.data);
    }
    getData();

  }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewItemv({ ...newItemv, [name]: value });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setDatav((prevDatav) => [...prevDatav, { ...newItemv, id: lastUsedIdV + 1 }]);
    setLastUsedIdV((prevId) => prevId + 1);
    setNewItemv({ link: '', desc: '' });

    await fetch('http://127.0.0.1:8000/api/v1/video', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ link: link1, desc: desc1 }),
    });
    // return response.json();

    setlink1('');
    setdesc1('');

    let data = await fetch("http://127.0.0.1:8000/api/v1/getvideo");
    data = await data.json();
    console.log(data.data);
    setDatav(data.data);
  };


  const handleDelete = async (itemIdV) => {

    await fetch(`http://127.0.0.1:8000/api/v1/deletevideo/${itemIdV}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin

      headers: {
        "Content-Type": "application/json",
      },
    });


    let data = await fetch("http://127.0.0.1:8000/api/v1/getvideo");
    data = await data.json();
    setDatav(data.data);
  };

  const [link1, setlink1] = useState('');
  const [desc1, setdesc1] = useState('');
  // const handleChangeLink=(e)=>{setlink(e)}

  return (
    <MainCard title="Upload Video Links">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6} sm={8} md={12}>
          <form onSubmit={handleSubmit}>
            <Grid container direction="row" spacing={1} sx={{ alignItems: { xs: "", md: "center" } }}>
              <Grid item>
                <Grid container direction="column">
                  <label htmlFor='img' style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: "bold", color: "#4527A0" }}>Video Youtube Link</label>
                  <input type="url" name="link" value={link1} onChange={(e) => { setlink1(e.target.value) }} style={{
                    backgroundColor: '#EDE7F6',
                    color: '#4527A0',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    padding: '4px 6px'
                  }} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <label htmlFor='desc' style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: "bold", color: "#4527A0" }}>Video Description</label>
                  <input type="text" name="desc" value={desc1} onChange={(e) => { setdesc1(e.target.value) }} style={{
                    backgroundColor: '#EDE7F6',
                    color: '#4527A0',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    padding: '4px 6px'
                  }} />
                </Grid>
              </Grid>
              <Grid item>
                <input type="submit" placeholder='Upload' style={{
                  backgroundColor: '#EDE7F6',
                  color: '#4527A0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  padding: '6px 10px',
                  margin: '0.5rem'
                }} />
                {/* <Button variant='contained' type='submit'>Upload</Button> */}
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SubCard title="">
            <Grid container direction="column">
              <Grid item>
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr style={{ color: "#1565C0" }}>
                      <th>No.</th>
                      <th>Video Link</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datav && datav.map((item, index) => (
                      <tr key={item._id} style={{ justifyContent: "center", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td> <a href={item.Link} target='_blank' rel="noreferrer"> {item.Link} </a> </td>
                        <td>{item.desc}</td>
                        <td><Button sx={{ color: "crimson" }} onClick={() => handleDelete(item._id)}>Delete</Button></td>
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
