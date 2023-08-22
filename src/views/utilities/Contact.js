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
// const initialDataV = [
//   {
//     id: 1,
//     name: "ABC",
//     email: "Sangeet Video",
//     mobile_no: "7878153615",
//     message: "hello"
//   },
//   {
//     id: 2,
//     name: "ABC",
//     email: "Sangeet Video",
//     mobile_no: "7878153615",
//     message: "hello"
//   },
//   {
//     id: 3,
//     name: "ABC",
//     email: "Sangeet Video",
//     mobile_no: "7878153615",
//     message: "hello"
//   },
// ]

const MaterialIcons = () => {

  // const [data, setData] = useState(initialData);
  const [datav, setDatav] = useState();
  // const [newItemv, setNewItemv] = useState({ link: '', desc: '' });
  // const [lastUsedId, setLastUsedId] = useState(initialData.length);

  // const [lastUsedIdV, setLastUsedIdV] = useState(() => {
  //   // Load last used ID from local storage, or use initialData length if not available
  //   const lastUsedIdV = localStorage.getItem('lastUsedIdV');
  //   return lastUsedIdV ? parseInt(lastUsedIdV, 10) : initialDataV.length;
  // });

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem('tableDataV', JSON.stringify(datav));

    async function getData() {
      let data = await fetch("http://127.0.0.1:8000/api/v1/getcontact");
      data = await data.json();
      setDatav(data.data);
    }
    getData();

  }, []);

  // useEffect(() => {
  //   // Save last used ID to local storage whenever it changes
  //   localStorage.setItem('lastUsedIdV', lastUsedIdV);
  // }, [lastUsedIdV]);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewItemv({ ...newItemv, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   setDatav((prevDatav) => [...prevDatav, { ...newItemv, id: lastUsedIdV + 1 }]);
  //   setLastUsedIdV((prevId) => prevId + 1);
  //   setNewItemv({ link: '', desc: '' });
  //   console.log(datav);
  // };


  const handleDelete = async (itemIdV) => {
    await fetch(`http://127.0.0.1:8000/api/v1/deleteContact/${itemIdV}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
    });


    let data = await fetch("http://127.0.0.1:8000/api/v1/getcontact");
    data = await data.json();
    setDatav(data.data);
  };


  return (
    <MainCard title="Contact Us Query">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6} sm={8} md={12}>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SubCard title="">
            <Grid container direction="column">
              <Grid item>
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr style={{ color: "#1565C0" }}>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>Message</th>
                      <th>Posting Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datav && datav.map((item, index) => (
                      <tr key={item._id} style={{ justifyContent: "center", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.number}</td>
                        <td>{item.message}</td>
                        <td>{new Date(item.date).toLocaleString()}</td>

                        {<td><Button sx={{ color: "crimson" }} onClick={() => handleDelete(item._id)}>Delete</Button></td>}
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
