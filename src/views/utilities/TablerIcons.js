import { Button, Grid } from '@mui/material';
// import MuiTypography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// // styles
// const IFrameWrapper = styled('iframe')(({ theme }) => ({
//   height: 'calc(100vh - 210px)',
//   border: '1px solid',
//   borderColor: theme.palette.primary.light
// }));

// =============================|| TABLER ICONS ||============================= //
// const initialData = [
//   {
//     id: 1,
//     category: "Decoration",
//     img: null,
//     desc: "Decoration image",
//   },
//   {
//     id: 2,
//     category: "Decoration",
//     img: null,
//     desc: "Decoration image",
//   },
//   {
//     id: 3,
//     category: "Decoration",
//     img: null,
//     desc: "Decoration image",
//   },
//   {
//     id: 4,
//     category: "Decoration",
//     img: null,
//     desc: "Decoration image",
//   },
// ]
const categories = ["Resort", "Decoration", "Banquet Hall", "Conference Hall", "Swimming Pool"];

function TablerIcons() {

  // const [data, setData] = useState(initialData);
  const [datav, setDatav] = useState();
  // const [newItem, setNewItem] = useState({ category: categories[0], img: null, desc: '' });
  // const [lastUsedId, setLastUsedId] = useState(initialData.length);

  // const [lastUsedId, setLastUsedId] = useState(() => {
  //   // Load last used ID from local storage, or use initialData length if not available
  //   const lastUsedId = localStorage.getItem('lastUsedId');
  //   return lastUsedId ? parseInt(lastUsedId, 10) : initialData.length;
  // });

  useEffect(() => {
    // Save data to local storage whenever it changes
    // localStorage.setItem('tableData', JSON.stringify(data));


    async function getData() {
      let data = await fetch("http://127.0.0.1:8000/api/v1/getImage");
      data = await data.json();
      setDatav(data.data);
    }
    getData();

  }, []);

  // useEffect(() => {
  //   // Save last used ID to local storage whenever it changes
  //   localStorage.setItem('lastUsedId', lastUsedId);
  // }, [lastUsedId]);

  // const handleInputChange = (event) => {
  //   const { name, value, type } = event.target;
  //   if (type === "file") {
  //     const selectedFile = event.target.files[0];
  //     // If a file is selected, create a preview URL and store it in the state
  //     setNewItem({ ...newItem, [name]: selectedFile, img: URL.createObjectURL(selectedFile) });
  //   } else {
  //     setNewItem({ ...newItem, [name]: value });
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // setData((prevData) => [...prevData, { ...newItem, id: lastUsedId + 1 }]);
  //   setLastUsedId((prevId) => prevId + 1);
  //   setNewItem({ category: categories[0], img: null, desc: '' });
  //   // console.log(data);
  // };

  const handleSubmit1 = async (e) => {
    e.preventDefault();



    let index;
    if (cat == 'Resort') {
      index = (1);
    } else if (cat == 'Decoration') {
      index = (2);
    } else if (cat == 'Banquet Hall') {
      index = (3);
    } else if (cat == 'Conference Hall') {
      index = (4);
    } else if (cat == 'Swimming Pool') {
      index = (5);
    } else {
      console.log('else statement executed');
    }


    const formData = new FormData();
    formData.append('index', index);
    formData.append('avatar', fil);
    formData.append('desc', des);

    // console.log('aksh', JSON.stringify({ index, desc: des, avatar: fil }));
    await fetch('http://127.0.0.1:8000/api/v1/uploadImage', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin

      // body: JSON.stringify({ index, desc: des, avatar: fil }),
      body: formData
    });

    let data = await fetch("http://127.0.0.1:8000/api/v1/getImage");
    data = await data.json();
    setDatav(data.data);


    setcat('Resort');
    setfil(null);
    setdes('');

    // const formData = new FormData();
    // formData.append('dropdownValue', cat);
    // formData.append('file', fil);
    // formData.append('textValue', des);

    // try {
    //   const response = await fetch('http://127.0.0.1:8000/api/v1/uploadImage', {
    //     method: 'POST',
    //     body: formData,
    //   });

    // } catch (error) {
    // }
  };

  const handleDelete = async (itemId) => {
    await fetch(`http://127.0.0.1:8000/api/v1/deleteImage/${itemId}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
    });


    let data = await fetch("http://127.0.0.1:8000/api/v1/getImage");
    data = await data.json();
    setDatav(data.data);
  };


  const [cat, setcat] = useState('Resort');
  const [fil, setfil] = useState(null);
  const [des, setdes] = useState('');
  // const [index, setindex] = useState(0);

  const handleTextChange = (e) => {
    setdes(e.target.value);
  };

  const handleFileChange = (e) => {
    setfil(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleDropdownChange = (e) => {
    setcat(e.target.value);

    console.log(e.target.value);

    // if (e.target.value == 'Resort') {
    //   setindex(1);
    // } else if (e.target.value == 'Decoration') {
    //   setindex(2);
    // } else if (e.target.value == 'Banquet Hall') {
    //   setindex(3);
    // } else if (e.target.value == 'Conference Hall') {
    //   setindex(4);
    // } else if (e.target.value == 'Swimming Pool') {
    //   setindex(5);
    // } else {
    //   console.log('else statement executed');
    // }
  };

  return (
    <MainCard title="Upload Images">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6} sm={8} md={12}>
          <form onSubmit={handleSubmit1}>
            {/* <input type="hidden" value={index} /> */}
            <Grid container direction="row" spacing={1} sx={{ alignItems: { xs: "", md: "center" } }}>
              <Grid item>
                <Grid container direction="column">
                  <label htmlFor="category" style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: "bold", color: "#4527A0" }}>Image Category</label>
                  <select
                    name="category"
                    value={cat}
                    onChange={handleDropdownChange}
                    style={{
                      backgroundColor: '#EDE7F6',
                      color: '#4527A0',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
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
                  <label htmlFor='img' style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: "bold", color: "#4527A0" }}>Browse Image</label>
                  <input type="file" placeholder="Upload Image" name="avatar" onChange={handleFileChange} style={{
                    // backgroundColor: '#B39DDB',
                    color: '#4527A0',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    // padding: '4px 6px'
                  }} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <label htmlFor='desc' style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: "bold", color: "#4527A0" }}>Image Description</label>
                  <input type="text" name="desc" value={des} onChange={handleTextChange} style={{
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
        <Grid item xs={12} sm={12} mb={5}>
          <SubCard title="">
            <Grid container direction="column">
              <Grid item>
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr style={{ color: "#1565C0" }}>
                      <th>No.</th>
                      <th>Category</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datav && datav.map((item, index) => (
                      <tr key={item._id} style={{ justifyContent: "center", textAlign: "center", margin: "20px 0" }}>
                        <td>{index + 1}</td>
                        <td>{item.category}</td>
                        <td> <img src={item.path} alt="Uploaded" width="90%" /></td>
                        <td>{item.desc}</td>
                        <td><Button sx={{ color: "crimson" }} id='' onClick={() => handleDelete(item._id)}>Delete</Button></td>
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

export default TablerIcons;
