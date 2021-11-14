import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from '@mui/material/';
import Paper from '@mui/material/Paper';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch( `https://quiet-chamber-40235.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]) 

    const handleProductDelete = id =>{
        const procced = window.confirm("Are You Sure to Delete Product ?")
        
        if(procced)
        {
            fetch(`https://quiet-chamber-40235.herokuapp.com/products/${id}`,{
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0) 
               {
                  alert('Product Deleted')
                  
               } 
               const remainigOrders = products.filter(product => product._id !== id)
                setProducts(remainigOrders)
            })
        }
    }
    return (
        <div>
           <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Id</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleProductDelete(row._id)}><i class="fas fa-trash-alt"></i></Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageProducts;